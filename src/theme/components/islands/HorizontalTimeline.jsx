import React from 'react';
import styles from '../modules/HorizontalTimeline/HorizontalTimeline.module.css';
import HeadingComponent from '../components/HeadingComponent/HeadingComponent';
import { RichText } from '@hubspot/cms-components';

export default function HorizontalTimeline({ groupContent }) {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
        {groupContent.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.item} ${idx % 2 === 0 ? styles.top : styles.bottom}`}
          >
            <div className={styles.card}>
              <HeadingComponent
                headingLevel={item.headingAndTextHeadingLevel}
                headingStyleVariant={item.headingStyleVariant}
                heading={`#${idx + 1} ${item.headingAndTextHeading}`}
              />
              <RichText fieldPath={`groupContent[${idx}].description`} />
            </div>
            <div className={styles.connector}></div>
          </div>
        ))}

        <div className={styles.trophy}>🏆</div>
      </div>
    </div>
  );
}
