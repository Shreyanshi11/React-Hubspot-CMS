import { logInfo, RichText } from "@hubspot/cms-components";
import Styles from "../AlternateImageText/alternate_image_text.module.css";
import ResponsiveSpacingWrapper from "../../components/SpacingStyleComponent/ResponsiveSpacingWrapper";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import RenderImage from "../../components/ImageComponent/imageRenderer";
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx'
import {
    getLinkFieldHref,
    getLinkFieldRel,
    getLinkFieldTarget,
} from '../../utils/content-fields.jsx';


export function Component(props) {
    const {
        module_id,
        add_image_text = [],
    } = props;

    logInfo(props, 'Alternate Image Text');
    return (
        <>
            <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
                <div className={Styles.alternate_image_text}>
                    <div className="page-center">
                        <div className={Styles.heading_block}>
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
                        <div className={Styles.image_text_container}>
                            {add_image_text.map((item, index) => (
                                <div className={`${Styles.image_text_block} ${Styles[item.img_position]}`}>
                                    <div class={Styles.image_block}>
                                        <RenderImage imageField={add_image_text[index]?.image} />
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

                                        <div className={Styles.button_content}>
                                            <Button
                                                buttonSize={item.buttonStyleSize}
                                                buttonStyle={item.buttonStyleVariant}
                                                href={getLinkFieldHref(item.buttonContentLink)}
                                                rel={getLinkFieldRel(item.buttonContentLink)}
                                                target={getLinkFieldTarget(item.buttonContentLink)}
                                                showIcon={item.buttonContentShowIcon}
                                                iconFieldPath={`add_image_text[${index}].buttonContentIcon`}
                                                iconPosition={item.buttonContentIconPosition}
                                                ctaFieldpath={`add_image_text[${index}].ctaField`}
                                                buttonType={item.buttonContentType}
                                            >{item.buttonContentText}</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ResponsiveSpacingWrapper>
        </>
    );
}

export { fields } from './fields.jsx';


export const meta = {
    label: 'Alternate Image Text',
};