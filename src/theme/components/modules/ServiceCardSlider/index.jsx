import React from 'react';
import { logInfo, RichText, Island } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import ServiceCard from '../../islands/ServiceCardSlider?island';
import Styles from '../ServiceCardSlider/ServiceCard.module.css';




export function Component(props) {

  const {
    module_id,
    groupContent = [],

  } = props;

  logInfo(props, 'Service Card Slider');

  return (
    <>
     
        <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
          <div>
            <div className={Styles.heading_container}>
              
            </div>
            <div className={Styles.inner_slider_container}>
            <Island module={ServiceCard} groupContent={ groupContent } clientOnly hydrateOn='idle' />
            </div>
          </div>
        </ResponsiveSpacingWrapper>
     
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Service Card Slider Module',
};
