import React from 'react';
import { logInfo, Island } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HorizontalTimeline from '../../islands/HorizontalTimeline?island';
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
          <Island module={HorizontalTimeline} groupContent={ groupContent } clientOnly hydrateOn='idle' />
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
