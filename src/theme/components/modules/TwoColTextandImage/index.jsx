import { logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../TwoColTextandImage/twocoltextandimage.module.css';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx'
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx'
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.jsx';

export function Component(props) {
  const {
    module_id,
    groupStyle: {
      headingStyleVariant, headingStyleColor
    },
    textcontent: { headingAndTextHeadingLevel, headingAndTextHeading, paragraphText, button_group: {
      buttonContentText: text,
      buttonContentLink: link,
      buttonStyleSize,
      buttonStyleVariant,
      buttonContentShowIcon: showIcon,
      buttonContentIconPosition: iconPosition,
      buttonContentIconStyle
    }
    }
  } = props;

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);

  logInfo(props, 'Two Col Image-Text Section');
  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={Styles.two_col_image_text}>
          <div className='page-center'>
            <div className={Styles.two_col_container}>
              <div className={Styles.text_container}>
                {headingAndTextHeading && (
                  <div className={Styles.heading_content}>
                    <HeadingComponent
                      headingLevel={headingAndTextHeadingLevel}
                      headingStyleVariant={headingStyleVariant}
                      heading={headingAndTextHeading}
                      headingStyleColor={headingStyleColor}
                    />
                  </div>
                )}
                {paragraphText && (
                  <div className={Styles.paragraph_text}>
                    <RichText fieldPath={paragraphText}></RichText>
                  </div>
                )}
                {text && (
                  <div className={Styles.button_content}>
                    <Button
                      buttonSize={buttonStyleSize}
                      buttonStyle={buttonStyleVariant}
                      href={buttonHref}
                      rel={buttonRel}
                      target={buttonTarget}
                      showIcon={showIcon}
                      iconFieldPath="bottom_group.buttonContentIconPosition"
                      iconPosition={iconPosition}
                    >
                      {text}
                    </Button>
                  </div>
                )}
              </div>
              <div className={Styles.image_container}>

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
  label: 'Two Col Image-Text Section',
};
