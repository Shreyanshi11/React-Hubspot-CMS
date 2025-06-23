// shared/ResponsiveSpacingWrapper.jsx
import React, { useMemo } from 'react';
import { getSpacingStyle } from './getSpacingStyle';
import { Island, logInfo } from '@hubspot/cms-components';
import BackgroundVideo from '../../islands/BackgroundVideo.jsx?island';


const ResponsiveSpacingWrapper = ({ moduleId, fields, children }) => {
  const spacingStyles = getSpacingStyle(fields);

  // Generate a unique class name per module
  const fallbackId = Math.random().toString(36).substr(2, 5);
  const uniqueClass = useMemo(() => `module-spacing-${moduleId || fallbackId}`, [moduleId]);

  // Map enum-like background position values to valid CSS
  const positionMap = {
    TOP_LEFT: 'top left',
    TOP_CENTER: 'top center',
    TOP_RIGHT: 'top right',
    CENTER_LEFT: 'center left',
    CENTER_CENTER: 'center center',
    CENTER_RIGHT: 'center right',
    BOTTOM_LEFT: 'bottom left',
    BOTTOM_CENTER: 'bottom center',
    BOTTOM_RIGHT: 'bottom right',
  };

  const backgroundType = fields?.groupStyle?.groupSpacingandBackground?.background_option || 'color';
  const customClass = fields?.customClass || '';
  const enableOverlay = fields?.groupStyle?.groupSpacingandBackground?.enable_overlay_color;
  const overlayColor = fields?.groupStyle?.groupSpacingandBackground?.overlay_color?.rgba || 'transparent';

  const videoPosterUrl = fields?.groupStyle?.groupSpacingandBackground?.videoPosterUrl?.src;
  const videoUrl = fields?.groupContent?.videoUrl;
  const hideVideoMobile = fields?.groupContent?.hide_video_mobile || false;

  // logInfo(hideVideoMobile);
  // console.log("Video URL", videoPosterUrl, videoUrl);

  const backgroundStyle = useMemo(() => {
    if (backgroundType === 'color') {
      return { backgroundColor: fields?.groupStyle?.groupSpacingandBackground?.bg_color?.rgba };
    }
    if (backgroundType === 'gradient_color') {
      return { backgroundImage: fields?.groupStyle?.groupSpacingandBackground?.bg_gradient?.css };
    }
    if (backgroundType === 'image') {
      return {
        backgroundImage: `url(${fields?.groupStyle?.groupSpacingandBackground?.bg_image?.src})`,
        backgroundSize: fields?.groupStyle?.groupSpacingandBackground?.bg_image?.background_size || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:
          positionMap[fields?.groupStyle?.groupSpacingandBackground?.bg_image?.background_position] || 'center',
      };
    }
    return {};
  }, [backgroundType, fields]);



  return (
    <>
      <style>
        {`

          ${(backgroundType === 'video_bg') ? `
            .${uniqueClass} {
              position: relative;
                  overflow: hidden;
            }
            .${uniqueClass}.background-video-container .page-center{
              position: relative;
              z-index: 4;
            }
            .${uniqueClass}.background-video-container::after {
              z-index: 1;
            }
            

          ` : ''}

          ${enableOverlay ? `
            .${uniqueClass} {
              position: relative;
            }
            .${uniqueClass}::after {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${overlayColor};
              pointer-events: none;
              z-index: 1;
            }
          ` : ''}

          .${uniqueClass} {
            padding-top: ${spacingStyles.desktop.paddingTop};
            padding-bottom: ${spacingStyles.desktop.paddingBottom};
            padding-left: ${spacingStyles.desktop.paddingLeft};
            padding-right: ${spacingStyles.desktop.paddingRight};
            margin-top: ${spacingStyles.desktop.marginTop};
            margin-bottom: ${spacingStyles.desktop.marginBottom};
            margin-left: ${spacingStyles.desktop.marginLeft};
            margin-right: ${spacingStyles.desktop.marginRight};
          }

         
          @media (max-width: 1199px) {
            .${uniqueClass} {
              padding-top: ${spacingStyles.laptop.paddingTop};
              padding-bottom: ${spacingStyles.laptop.paddingBottom};
              padding-left: ${spacingStyles.laptop.paddingLeft};
              padding-right: ${spacingStyles.laptop.paddingRight};
              margin-top: ${spacingStyles.laptop.marginTop};
              margin-bottom: ${spacingStyles.laptop.marginBottom};
              margin-left: ${spacingStyles.laptop.marginLeft};
              margin-right: ${spacingStyles.laptop.marginRight};
            }
          }

          @media (max-width: 991px) {
            .${uniqueClass} {
              padding-top: ${spacingStyles.tablet.paddingTop};
              padding-bottom: ${spacingStyles.tablet.paddingBottom};
              padding-left: ${spacingStyles.tablet.paddingLeft};
              padding-right: ${spacingStyles.tablet.paddingRight};
              margin-top: ${spacingStyles.tablet.marginTop};
              margin-bottom: ${spacingStyles.tablet.marginBottom};
              margin-left: ${spacingStyles.tablet.marginLeft};
              margin-right: ${spacingStyles.tablet.marginRight};
            }
          }

          @media (max-width: 767px) {
            .${uniqueClass} {
              padding-top: ${spacingStyles.mobile.paddingTop};
              padding-bottom: ${spacingStyles.mobile.paddingBottom};
              padding-left: ${spacingStyles.mobile.paddingLeft};
              padding-right: ${spacingStyles.mobile.paddingRight};
              margin-top: ${spacingStyles.mobile.marginTop};
              margin-bottom: ${spacingStyles.mobile.marginBottom};
              margin-left: ${spacingStyles.mobile.marginLeft};
              margin-right: ${spacingStyles.mobile.marginRight};
            }
          }
        `}
      </style>

      <section
        className={`${customClass} ${uniqueClass} ${enableOverlay ? 'has-overlay' : ''} ${backgroundType === "video_bg" ? 'background-video-container' : ''} `}
        style={backgroundType === 'video_bg' ? {
         
        } : backgroundStyle}
      >
        {backgroundType === 'video_bg' && videoUrl && (
          <Island
            module={BackgroundVideo}
            hydrateOn="load"
            videoSrc={videoUrl}
            poster={videoPosterUrl}
            mobileHide={hideVideoMobile}
            overlayColor={overlayColor}
          />

        )}
        {children}
      </section>
    </>
  );
};

export default ResponsiveSpacingWrapper;
