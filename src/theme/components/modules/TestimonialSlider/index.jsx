import { logInfo, RichText, Island } from "@hubspot/cms-components";
import Styles from "../TestimonialSlider/testimonial_slider.module.css";
import ResponsiveSpacingWrapper from "../../components/SpacingStyleComponent/ResponsiveSpacingWrapper";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import TestimonialBlock from "../../islands/TestimonialSlider.jsx";


export function Component(props) {
    const {
        module_id,
        groupStyle: {
            headingStyleVariant,
            headingStyleColor,
        },
        headingAndTextHeadingLevel,
        headingAndTextHeading,
        add_testimonial = [],
    } = props;

    logInfo(props, 'Testimonial Slider');
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
                            <Island module={TestimonialBlock} add_testimonial={ add_testimonial } clientOnly hydrateOn='idle' />
                        </div>
                        
                    </div>
                </div>
            </ResponsiveSpacingWrapper>
        </>
    );
}

export { fields } from './fields.jsx';


export const meta = {
    label: 'Testimonial Slider',
};