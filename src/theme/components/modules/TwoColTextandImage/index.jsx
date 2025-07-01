import { logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../TwoColTextandImage/twocoltextandimage.module.css';
import RenderImage from '../../components/ImageComponent/imageRenderer.jsx'
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
      headingStyleVariant, headingStyleColor,
      groupButton: {
        buttonStyleSize,
        buttonStyleVariant,
      }
    },
    textcontent: { headingAndTextHeadingLevel, headingAndTextHeading, paragraphText, groupButton: {
      showBorder,
      showButton,
      buttonContentText: text,
      buttonContentLink: link,
      buttonContentShowIcon: showIcon,
      buttonContentIconPosition: iconPosition,
      buttonContentType
    },
    },
    imagecontent: { video_image, image, videoUrl, videoPosterUrl }
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
                <div className={Styles.text_container_inner}>
                  {showBorder &&
                    <div className='gradient-border' style={{ marginBottom: '20px' }}>

                    </div>
                  }
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
                      <RichText fieldPath="textcontent.paragraphText" value={paragraphText} />
                    </div>
                  )}

                  <div className={Styles.button_content}>
                    <Button
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
                    >{text}</Button>
                  </div>
                </div>
              </div>

              <div className={Styles.image_container}>
                {video_image === 'video' && (
                  <video
                    src={videoUrl}
                    poster={videoPosterUrl?.src || ''}
                    controls
                    className={Styles.video}
                  />
                )}

                {video_image === 'image' && (
                  <RenderImage imageField={image} />
                )}
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
