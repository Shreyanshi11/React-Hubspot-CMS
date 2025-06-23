import { logInfo } from '@hubspot/cms-components';

// // shared/getSpacingStyle.js
export const getSpacingStyle = (fieldValues = {}) => {
  const spacingData =
    fieldValues?.groupStyle?.groupSpacingandBackground?.spacing;

  const getSpacing = (spacing) => {
    if (!spacing) return 'No spacing data';

    const padding = spacing.padding || {};
    const margin = spacing.margin || {};

    return {
      paddingTop: (padding.top?.value ?? 0) + 'px',
      paddingBottom: (padding.bottom?.value ?? 0) + 'px',
      paddingLeft: (padding.left?.value ?? 0) + 'px',
      paddingRight: (padding.right?.value ?? 0) + 'px',
      marginTop: (margin.top?.value ?? 0) + 'px',
      marginBottom: (margin.bottom?.value ?? 0) + 'px',
      marginLeft: (margin.left?.value ?? 0) + 'px',
      marginRight: (margin.right?.value ?? 0) + 'px',
    };
  };
  // const getBackground = (groupStyle) => {
  //     const bg = {};

  //     const bgColor = groupStyle?.groupSpacingandBackground.background_color?.color;
  //     if (bgColor) {
  //         bg.backgroundColor = bgColor;
  //     }

  //     const bgImage = styles?.background_image;
  //     if (bgImage?.src) {
  //         bg.backgroundImage = `url(${bgImage.src})`;
  //         bg.backgroundRepeat = bgImage.background_repeat || 'no-repeat';
  //         bg.backgroundSize = bgImage.background_size || 'cover';
  //         bg.backgroundPosition = bgImage.background_position || 'center';
  //     }

  //     return bg;
  // };

  return {
    desktop: {
      ...getSpacing(spacingData?.desktopSpacing),
      // ...getBackground(fieldValues?.groupStyle),
    },
    laptop: {
      ...getSpacing(spacingData?.laptopSpacing),
      // ...getBackground(fieldValues?.groupStyle),
    },
    tablet: {
      ...getSpacing(spacingData?.tabletSpacing),
      // ...getBackground(fieldValues?.groupStyle),
    },
    mobile: {
      ...getSpacing(spacingData?.mobileSpacing),
      // ...getBackground(fieldValues?.groupStyle),
    },
  };
};
