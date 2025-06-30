import React from 'react';
import { logInfo, RichText, Island } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../modules/ServiceCardSlider/ServiceCard.module.css';
import ServiceCard from '../../islands/ServiceCardSlider?island';



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
