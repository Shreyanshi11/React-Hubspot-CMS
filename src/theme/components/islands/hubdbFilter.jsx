import React, { useState } from 'react';
import Styles from '../../components/modules/HubdbFilter/hubdbFilter.module.css';

export default function HubdbFilter({ language_type, language_image }) {
    const [selectedLabel, setSelectedLabel] = useState(null);

    // Flatten the nested language_type array
    const flattenedLanguageType = language_type.flat();

    // Get unique labels from flattened type
    const uniqueLabels = [
        ...new Map(
            flattenedLanguageType.map((item) => [item.label, item])
        ).values()
    ];

    // Combine language_image with label using index
    const imagesWithLabel = language_image.map((img, index) => ({
        ...img,
        label: flattenedLanguageType[index]?.label || 'Unknown'
    }));

    // Filter images based on selected label
    const filteredImages = selectedLabel
        ? imagesWithLabel.filter((img) => img.label === selectedLabel)
        : imagesWithLabel;

    return (
        <div className={Styles.filter_content}>
            {/* Filter Buttons */}
            <div className={Styles.language_name_container}>
                {uniqueLabels.map((item, index) => (
                    <div
                        className={`${Styles.language_name} ${selectedLabel === item.label ? Styles.active : ''}`}
                        key={index}
                        onClick={() =>
                            setSelectedLabel(
                                selectedLabel === item.label ? null : item.label
                            )
                        }
                    >
                        <div className={Styles.language_name_inner}>

                            <p>{item.label}</p>
                        </div>
                    </div>
                ))}

            </div>

            {/* Filtered Images */}
            <div className={Styles.filter_image_container}>
                {filteredImages.map((item, index) => (
                    <div className={Styles.filter_image_content}>
                        <div className={Styles.filter_image} key={index}>
                            <img src={item.url} alt={item.altText} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}