import { logInfo } from '@hubspot/cms-components';
import { useEffect, useRef, useState } from 'react';

const BackgroundVideo = ({
    videoSrc,
    poster,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true,
    videoType = 'video/mp4',
    altText = 'Background video',
    mobileHide,
    overlayColor
}) => {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust as needed
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px',
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

      const shouldHideVideo = mobileHide && isMobile;

    return (
        <>
            <style>
                {` 
                    .background_video_position {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }
                    .background-video {
                        object-fit: cover;
                    }

                     
                `}

            </style>

            {/* Conditionally add overlay CSS */}
                {shouldHideVideo && (
                    <style>
                    {`
                        .background_video_position::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: ${overlayColor};
                        top: 0;
                        left: 0;
                        z-index: 2;
                        }
                    `}
                    </style>
                )}


            <div
                ref={containerRef}
                className='background_video_position'
            >
                {/* Always show the poster image */}
                <img
                    src={poster}
                    alt={altText}
                    className='background_video_position background_video_thumb_img'
                    fetchpriority="high"
                    width={1920}
                    height={1080}
                />

                {/* Conditionally render video only if not hidden on mobile */}
                {shouldLoad && !shouldHideVideo && (
                    <video
                        className="background-video background_video_position"
                        autoPlay={autoPlay}
                        loop={loop}
                        muted={muted}
                        playsInline={playsInline}
                        preload="auto"
                        poster={poster}
                        aria-hidden="true"
                    >
                        <source src={videoSrc} type={videoType} />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </>
    );
};

export default BackgroundVideo;
