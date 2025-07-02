import React from "react";
import { logInfo, RichText } from "@hubspot/cms-components";
import Styles from "../RecentCasestudies/RecentCasestudies.module.css";
import RenderImage from "../../components/ImageComponent/imageRenderer";
import ResponsiveSpacingWrapper from "../../components/SpacingStyleComponent/ResponsiveSpacingWrapper";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import { Button } from "../../components/ButtonComponent/ButtonContent";

export function Component(props) {
  const {
    module,
    fieldValues,
    groupStyle: {
      headingStyleVariant,
      headingStyleColor,
      sectionButton: {
        buttonStyleSize,
        buttonStyleVariant,
      } = {},
    } = {},
    sectionContent: {
      headingAndTextHeadingLevel,
      headingAndTextHeading,
      sectionButton: {
        showButton,
        buttonContentText: sectionButtonText,
        buttonContentLink: sectionButtonLink = {},
        buttonContentShowIcon: sectionShowIcon,
        buttonContentIconPosition: sectionIconPosition,
        buttonContentType,
      } = {},
    } = {},
    imageTextContainer = [],
  } = props;

  logInfo(props, "Recent Case Studies Section");

  return (
    <ResponsiveSpacingWrapper moduleId={module?.module_id} fields={fieldValues}>
      <div className={Styles.recent_case_study_container}>
        <div className="page-center">
          {/* Heading */}
          {headingAndTextHeading && (
            <div className={Styles.heading_text_container}>
              <div className="gradient-border" />
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

          {/* Repeated blocks */}
          <div className={Styles.image_text_block_container}>
            {imageTextContainer.map((item, index) => {
              const {
                headingAndTextHeadingLevel: blockHeadingLevel,
                headingStyleVariant: blockHeadingVariant,
                headingAndTextHeading: blockHeading,
                headingStyleColor: blockHeadingColor,
                paragraphText,
                buttonStyleSize: blockButtonSize,
                buttonStyleVariant: blockButtonVariant,
                buttonContentText: blockButtonText,
                buttonContentLink: blockButtonLink = {},
                buttonContentShowIcon: blockShowIcon,
                buttonContentIconPosition: blockIconPosition,
                buttonContentType: blockButtonType,
                showButton: blockShowButton,
                image,
              } = item.blockContentContainer || {};

              return (
                <div className={Styles.image_text_block} key={index}>
                  {image && (
                    <div className={Styles.image_container}>
                      <RenderImage imageField={image} />
                    </div>
                  )}

                  <div className={Styles.text_container}>
                    {blockHeading && (
                      <HeadingComponent
                        headingLevel={blockHeadingLevel}
                        headingStyleVariant={blockHeadingVariant}
                        heading={blockHeading}
                        headingStyleColor={blockHeadingColor}
                      />
                    )}

                    {paragraphText && (
                      <RichText fieldPath={`imageTextContainer[${index}].blockContentContainer.paragraphText`} />
                    )}

                    {blockShowButton && (
                      <div className={Styles.button_block}>
                        <Button
                          buttonSize={blockButtonSize}
                          buttonStyle={blockButtonVariant}
                          href={blockButtonLink.url}
                          rel={blockButtonLink.open_in_new_tab ? "noopener" : undefined}
                          target={blockButtonLink.open_in_new_tab ? "_blank" : undefined}
                          showIcon={blockShowIcon}
                          iconFieldPath={`imageTextContainer.blockContentContainer.blockButton.buttonContentIcon`}
                          iconPosition={blockIconPosition}
                          additionalClassArray={["button-container__button"]}
                          ctaFieldpath={`imageTextContainer.blockContentContainer.blockButton.ctaField`}
                          buttonType={blockButtonType}
                        >
                          {blockButtonText}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section‑level button */}
          {showButton && (
            <div className={Styles.section_button_container}>
              <Button
                buttonSize={buttonStyleSize}
                buttonStyle={buttonStyleVariant}
                href={sectionButtonLink.url}
                rel={sectionButtonLink.open_in_new_tab ? "noopener" : undefined}
                target={sectionButtonLink.open_in_new_tab ? "_blank" : undefined}
                showIcon={sectionShowIcon}
                iconFieldPath="sectionButton.buttonContentIcon"
                iconPosition={sectionIconPosition}
                additionalClassArray={["button-container__button"]}
                ctaFieldpath={`sectionButton.ctaField`}
                buttonType={buttonContentType}
              >
                {sectionButtonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </ResponsiveSpacingWrapper>
  );
}

export { fields } from "./fields.jsx";

export const meta = {
  label: "Recent Case Studies",
};
