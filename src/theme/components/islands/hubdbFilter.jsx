import React, { useState } from 'react';
import Styles from '../../components/modules/HubdbFilter/hubdbFilter.module.css';
import { logInfo } from '@hubspot/cms-components';


export default function HubdbFilter({ language_type, language_image, table }) {

    return (
        <>
            <div className={Styles.filter_content}>
                <div className={Styles.language_name_container}>
                    <div className={Styles.language_name}>
                        {/* {language_type.map((item, index) => (
                            item.map((item2, index) => (
                                <div className={Styles.language_name_inner} key={index}>
                                    <p>{item2.name}</p>
                                </div>
                            ))
                        ))} */}
                        {[
                            ...new Map(
                                language_type
                                    .flat() // Flatten the nested arrays
                                    .map((item) => [item.label, item]) // Use name as key to filter unique
                            ).values()
                        ].map((uniqueItem, index) => (
                            <div className={Styles.language_name_inner} key={index}>
                                <p>{uniqueItem.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Styles.filter_image_container}>
                    <div className={Styles.filter_image_content}>
                        {/* {language_image.map((item, index) => (
                            <div className={Styles.filter_image} key={index}>
                                <img src={item.url} alt={item.altText} />
                            </div>
                        ))} */}
                          {table.map((item, index) => (
                            <div className={Styles.filter_image} key={index}>
                                <img src={item.objects.language_image.url} alt={item.objects.language_image.altText} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
