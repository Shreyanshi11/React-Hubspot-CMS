import React from 'react';
import { logInfo, Island, RichText } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../HorizontalTimeline/HorizontalTimeline.module.css';

export function Component(props) {

const {
  module_id,
  heading_group:{
  headingAndTextHeadingLevel,
  headingAndTextHeading,
  headingStyleVariant
  },
  groupContent = [],

} = props;

logInfo(props, 'Timeline');

return (
  <>
     <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={Styles.timeline_sec_heading}>
          <div className="page-center">
              <div className={Styles.heading_container}>
                  {headingAndTextHeading && (
                <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} />
              )}
              </div>
          
          <div className={Styles.timeline_container}>
         <div className={Styles.timelineWrapper}>
      <div className={Styles.timeline}>
        {groupContent.map((item, idx) => (
          <div
            key={idx}
            className={`${Styles.item} ${idx % 2 === 0 ? Styles.top : Styles.bottom}`}
          >
            <div className={Styles.card}>
              <HeadingComponent
                headingLevel={item.headingAndTextHeadingLevel}
                headingStyleVariant={item.headingStyleVariant}
                heading={`#${idx + 1} ${item.headingAndTextHeading}`}
              />
              <RichText fieldPath={`groupContent[${idx}].description`} />
            </div>
            <div className={Styles.connector}></div>
          </div>
        ))}

        <div className={Styles.trophy}>🏆</div>
      </div>
    </div>
          </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper>
    
  </>
);
}

export { fields } from './fields.jsx';

export const meta = {
label: 'Horizontal Timeline',
};
