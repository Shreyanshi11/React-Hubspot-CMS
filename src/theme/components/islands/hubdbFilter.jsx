import React, { useState } from 'react';
import Styles from '../../components/modules/HubdbFilter/hubdbFilter.module.css';
import { logInfo } from '@hubspot/cms-components';


export default function HubdbFilter({ language_type, language_image, table1 }) {

    const image = Array.isArray(props.hublData?.language_image)
        ? props.hublData.language_image
        : [];
    const ltype = Array.isArray(props.hublData?.language_type)
        ? props.hublData.language_type
        : [];

    return (
        <>
            {/* <div className={Styles.filter_content}>
                <div className={Styles.language_name_container}>
                    <div className={Styles.language_name}>
                        {ltype.map((item, index) => (
                            <div className={Styles.language_name_inner} key={index}>
                                <p>{item.language_type}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Styles.filter_image_container}>
                    <div className={Styles.filter_image_content}>

                        <div className={Styles.filter_image}>

                        </div>

                    </div>
                </div>
            </div> */}
        </>
    );
}
