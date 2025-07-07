import { logInfo, RichText } from "@hubspot/cms-components";
import Styles from "../AlternateImageText/alternate_image_text.module.css";
import ResponsiveSpacingWrapper from "../../components/SpacingStyleComponent/ResponsiveSpacingWrapper";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import RenderImage from "../../components/ImageComponent/imageRenderer";
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.jsx';

export function Component(props) {
  const {
    module_id,
    groupStyle: {
      headingStyleVariant,
      headingStyleColor,
      groupButtonStyle: {
        buttonStyleSize,
        buttonStyleVariant,
      }
    },
    headingAndTextHeadingLevel,
    headingAndTextHeading,
    groupButtonContent: {
      group_buttonContentText: text,
      group_buttonContentLink: link,
      group_buttonContentShowIcon: showIcon,
      group_buttonContentIconPosition: iconPosition,
      group_buttonContentType: buttonContentType,
      showButton
    },
    add_image_text = [],
  } = props;

  logInfo(props, 'Alternate Image Text');

  return (
    <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
      <div className={Styles.alternate_image_text}>
        <div className="page-center">

          {/* Section Heading */}
          {headingAndTextHeading && (
            <div className={Styles.heading_block}>
              <div className={Styles.heading_content}>
                <HeadingComponent
                  headingLevel={headingAndTextHeadingLevel}
                  headingStyleVariant={headingStyleVariant}
                  heading={headingAndTextHeading}
                  headingStyleColor={headingStyleColor}
                />
              </div>
            </div>
          )}

          {/* Repeated Blocks */}
          <div className={Styles.image_text_container}>
            {add_image_text.map((item, index) => (
              <div className={`${Styles.image_text_block} ${Styles[item.img_position]}`} key={index}>
                <div className={Styles.image_block}>
                  <RenderImage imageField={item.image} />
                </div>
                <div className={Styles.text_block}>
                  {item.headingAndTextHeading && (
                    <div className={Styles.heading_content}>
                      <HeadingComponent
                        headingLevel={item.headingAndTextHeadingLevel}
                        headingStyleVariant={item.headingStyleVariant}
                        heading={item.headingAndTextHeading}
                        headingStyleColor={item.headingStyleColor}
                      />
                    </div>
                  )}
                  <div className={Styles.paragraph_text}>
                    <RichText fieldPath={`add_image_text[${index}].content`} />
                  </div>
                  {item.repeater_buttonContentText && (
                    <div className={Styles.button_content}>
                      <Button
                        buttonSize={item.buttonStyleSize}
                        buttonStyle={item.buttonStyleVariant}
                        href={getLinkFieldHref(item.repeater_buttonContentLink)}
                        rel={getLinkFieldRel(item.repeater_buttonContentLink)}
                        target={getLinkFieldTarget(item.repeater_buttonContentLink)}
                        showIcon={item.repeater_buttonContentShowIcon}
                        iconFieldPath={`add_image_text[${index}].repeater_buttonContentIcon`}
                        iconPosition={item.repeater_buttonContentIconPosition}
                        ctaFieldpath={`add_image_text[${index}].repeater_ctaField`}
                        buttonType={item.repeater_buttonContentType}
                      >
                        {item.repeater_buttonContentText}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Group Button */}
          {showButton && (
            <div className={Styles.button_content}>
              <Button
                buttonSize={buttonStyleSize}
                buttonStyle={buttonStyleVariant}
                href={getLinkFieldHref(link)}
                rel={getLinkFieldRel(link)}
                target={getLinkFieldTarget(link)}
                showIcon={showIcon}
                iconFieldPath="groupButtonContent.group_buttonContentIcon"
                iconPosition={iconPosition}
                ctaFieldpath="groupButtonContent.group_ctaField"
                buttonType={buttonContentType}
              >
                {text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </ResponsiveSpacingWrapper>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Alternate Image Text',
};
