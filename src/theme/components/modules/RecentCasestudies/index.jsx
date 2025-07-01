import { logInfo, RichText } from "@hubspot/cms-components";
import Styles from '../RecentCasestudies/RecentCasestudies.module.css';
import renderImage from "../../components/ImageComponent/imageRenderer";
import ResponsiveSpacingWrapper from "../../components/SpacingStyleComponent/ResponsiveSpacingWrapper";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import { button } from "../../components/ButtonComponent/ButtonContent";

export function component(props) {
    const {
        module_id,
        groupStyle: {
            headingStyleVariant, headingStyleColor,
            sectionButton: {
                buttonStyleSize,
                buttonStyleVariant,
            }
        },
        sectionContent: { headingAndTextHeadingLevel, headingAndTextHeading, sectionButton: {
            showButton,
            buttonContentText: text,
            buttonContentLink: link,
            buttonContentShowIcon: showIcon,
            buttonContentIconPosition: iconPosition,
            buttonContentType
        }
        },
        imageTextContainer = [],

    } = props;

    logInfo(props, 'Recent Casestudies Section');
    return (
        <>
            <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
                <div className={Styles.recent_case_study_container}>
                    <div className="page-center">
                        <div className={Styles.heading_text_container}>
                            <div class="gradient-border"></div>
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
                        </div>
                        <div className={Styles.image_text_block_container}>
                            {imageTextContainer.map((item, index) => (
                                <div className={Styles.image_text_block} key={index}>
                                    <div className={Styles.image_container}>
                                        <RenderImage imageField={item.blockContentContainer.image} />
                                    </div>
                                    <div className={Styles.text_container}>
                                        <HeadingComponent
                                            headingLevel={item.blockContentContainer.headingAndTextHeadingLevel}
                                            headingStyleVariant={item.blockContentContainer.headingStyleVariant}
                                            heading={item.blockContentContainer.headingAndTextHeading}
                                            headingStyleColor={item.blockContentContainer.headingStyleColor} />
                                        <RichText fieldPath={`imageTextContainer[${index}].blockContentContainer.description`}></RichText>
                                        <div className={Styles.button_block} >
                                            <Button
                                                buttonSize={item.blockContentContainer.buttonStyleSize}
                                                buttonStyle={item.blockContentContainer.buttonStyleVariant}
                                                href={item.blockContentContainer.buttonHref}
                                                rel={item.blockContentContainer.buttonRel}
                                                target={item.blockContentContainer.buttonTarget}
                                                showIcon={item.blockContentContainer.showIcon}
                                                iconFieldPath='imageTextContainer.blockContentContainer.blockButton.buttonContentIcon'
                                                iconPosition={item.blockContentContainer.iconPosition}
                                                additionalClassArray={['button-container__button']}
                                                ctaFieldpath={`imageTextContainer.blockContentContainer.blockButton.ctaField`}
                                                buttonType={item.blockContentContainer.buttonContentType}
                                            >{text}</Button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="{Styles.section_button_container}">
                            <Button
                                buttonSize={buttonStyleSize}
                                buttonStyle={buttonStyleVariant}
                                href={buttonHref}
                                rel={buttonRel}
                                target={buttonTarget}
                                showIcon={showIcon}
                                iconFieldPath='sectionButton.buttonContentIcon'
                                iconPosition={iconPosition}
                                additionalClassArray={['button-container__button']}
                                ctaFieldpath={`sectionButton.ctaField`}
                                buttonType={buttonContentType}
                            >{text}</Button>
                        </div>
                    </div>
                </div>
            </ResponsiveSpacingWrapper>
        </>
    );

}
export { fields } from './fields.jsx';

export const meta = {
    label: 'Recent Casestudies',
};


