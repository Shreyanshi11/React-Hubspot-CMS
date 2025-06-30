import React from 'react';
import { logInfo, RichText } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';


export function Component(props) {

  const {
    module_id,
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML },
    groupButton: {
      showButton,
      buttonContentText: text,
      buttonContentLink: link,
      buttonContentShowIcon: showIcon,
      buttonContentIconPosition: iconPosition,
      buttonContentType
    },
    groupStyle: {
      groupContent: {
        headingStyleVariant
      },
      groupButton: {
        buttonStyleSize,
        buttonStyleVariant, 
      }
    },

  } = props;

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);


  logInfo(props, 'props');
  return (
    <>
      <StyledComponentsRegistry>
        <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
          <div className='page-center'>
            {headingAndTextHeading && (
              <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} />
            )}
            {richTextContentHTML && <RichText fieldPath='groupContent.richTextContentHTML' />}
            {showButton && <Button
              buttonSize={buttonStyleSize}
              buttonStyle={buttonStyleVariant}
              href={buttonHref}
              rel={buttonRel}
              target={buttonTarget}
              showIcon={showIcon}
              iconFieldPath='groupButton.buttonContentIcon'
              iconPosition={iconPosition}
              additionalClassArray={['button-container__button']}
              ctaFieldpath={`groupButton.ctaField`}
              buttonType={buttonContentType}
            >{text}</Button>}
          </div>
        </ResponsiveSpacingWrapper>
      </StyledComponentsRegistry>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Example Module',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};
