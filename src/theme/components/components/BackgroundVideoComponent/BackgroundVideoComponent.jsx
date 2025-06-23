import { useEffect, useRef, useState } from 'react';

const BackgroundVideo = ({
  showVideo,
  videoUrl,
  videoPosterUrl,
  children,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  videoType = 'video/mp4',
  altText = 'Background video'
}) => {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setShouldLoad(true); // or trigger image loading
          observer.disconnect(); // stop observing once loaded
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.2
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, []);

  return (
    <>
      {showVideo ? (
        <section
          ref={containerRef}
          className="background-video-container"
          aria-label={altText}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* SEO-friendly fallback image */}
          
            <picture>
              <img
                src={videoPosterUrl}
                alt={altText}
                fetchpriority='high'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 0
                }}
              />
            </picture>
        
          {shouldLoad && (
            <video
              className="background-video"
              src={videoUrl}
              poster={videoPosterUrl}
              type={videoType}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              playsInline={playsInline}
              preload="none"
              aria-hidden="true"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1
              }}
            />
          )}
          <div className="video-content" style={{ position: 'relative', zIndex: 2 }}>
            {children}
          </div>

        </section>
      ) : <>{children}</>
      }
    </>
  );
};

export default BackgroundVideo;
