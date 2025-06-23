// utils/imageRenderer.js
import React from 'react';
import { logInfo } from '@hubspot/cms-components';

const renderImage = ({ imageField }) => {
    if (!imageField?.src) return null;

    const imageType = imageField?.size_type;
    const imageGetHeight = imageField?.height;
    const imageGetWidth = imageField?.width;
    const imageGetMaxWidth = imageField?.max_width;
    const imageGetMaxHeight = imageField?.max_height;
    
    let imageStyle = {};
    let imageWidth;
    let imageHeight;

    if (imageType === 'auto') {
        imageStyle = { maxWidth: '100%', height: 'auto' };
    } else if (imageType === 'auto_custom_max') {
        imageWidth = '100%';
        imageStyle = { maxWidth: imageGetMaxWidth, maxHeight: imageGetMaxHeight };
    } else if (imageType === 'exact') {
        imageWidth = imageGetWidth;
        imageHeight = imageGetHeight;
    }

    return (
        <img
            src={imageField.src}
            alt={imageField.alt || 'default alt text'} // Fallback alt text added
            loading={imageField.loading || 'lazy'}
            style={imageStyle}
            width={imageWidth}
            height={imageHeight}
            fetchpriority= 'high'
            
        />
    );
};

export default renderImage;
