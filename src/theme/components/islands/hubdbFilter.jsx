import React, { useState } from 'react';
import Styles from '../../components/modules/HubdbFilter/hubdbFilter.module.css';

export default function HubdbFilter({ language_type, language_image }) {
  const [selectedLabel, setSelectedLabel] = useState(null);

  // Flatten and get unique labels
  const flattenedLanguageType = language_type.flat();
  const uniqueLabels = [
    ...new Map(flattenedLanguageType.map((item) => [item.label, item])).values()
  ];

  // Combine image + its associated types
  const imageData = language_image.map((img, index) => ({
    ...img,
    types: language_type[index]?.map(type => type.label) || [],
  }));

  // Filter based on selected label
  const filteredImages = selectedLabel
    ? imageData.filter((img) => img.types.includes(selectedLabel))
    : imageData;

  return (
    <div className={Styles.filter_content}>
      {/* Filter Buttons */}
      <div className={Styles.language_name_container}>
        {uniqueLabels.map((item, index) => (
          <div
            className={`${Styles.language_name} ${selectedLabel === item.label ? Styles.active : ''}`}
            key={index}
            onClick={() =>
              setSelectedLabel(selectedLabel === item.label ? null : item.label)
            }
          >
            <div className={Styles.language_name_inner}>
              <p className='font-700'>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filtered Image Grid */}
      <div className={Styles.filter_image_container}>
        {filteredImages.map((item, index) => (
          <div className={Styles.filter_image_content} key={index}>
            <div className={Styles.filter_image}>
              <img src={item.url} alt={item.altText || item.label} />
              {/* Show type badges under image (optional) */}
              <div className={Styles.language_type_badges}>
                {item.types.map((type, i) => (
                  <span key={i} className={Styles.type_badge}>{type}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
