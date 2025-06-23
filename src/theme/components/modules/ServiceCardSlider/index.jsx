import React from 'react';
import { logInfo, RichText, Island } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import ServiceCard from '../../islands/ServiceCardSlider?island';



export function Component(props) {

  const {
    module_id,
    groupContent = [],
    groupStyle: {
      groupContent: {
        headingStyleVariant
      }
    },

  } = props;

  logInfo(props, 'Service Card Slider');

  return (
    <>
      <StyledComponentsRegistry>
        <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
          <div className='page-center'>
            <div className='inner_slider_container'>
           
            <Island module={ServiceCard} content={groupContent} clientOnly hydrateOn='idle' />

            </div>
          </div>
        </ResponsiveSpacingWrapper>
      </StyledComponentsRegistry>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Service Card Slider Module',
};
