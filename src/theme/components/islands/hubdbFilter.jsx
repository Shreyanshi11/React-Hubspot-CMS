import React, { useState } from 'react';
import Styles from '../../components/modules/HubdbFilter/hubdbFilter.module.css';
import { logInfo } from '@hubspot/cms-components';

export default function HubdbFilter({ language_type, language_image }) {
  const [selectedType, setSelectedType] = useState(null);

  // Get unique types
  const uniqueTypes = [
    ...new Map(
      language_type
        .flat()
        .map((item) => [item.label, item])
    ).values()
  ];

  // Filter images based on selected type
  const filteredImages = selectedType
    ? language_image.filter((img) => img.language_type === selectedType)
    : language_image;

  return (
    <>
      <div className={Styles.filter_content}>
        {/* Filter Buttons */}
        <div className={Styles.language_name_container}>
          <div className={Styles.language_name}>
            {uniqueTypes.map((type, index) => (
              <div
                className={`${Styles.language_name_inner} ${
                  selectedType === type.label ? Styles.active : ''
                }`}
                key={index}
                onClick={() =>
                  setSelectedType((prev) => (prev === type.label ? null : type.label))
                }
              >
                <p>{type.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className={Styles.filter_image_container}>
          <div className={Styles.filter_image_content}>
            {filteredImages.map((item, index) => (
              <div className={Styles.filter_image} key={index}>
                <img src={item.url} alt={item.altText} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
