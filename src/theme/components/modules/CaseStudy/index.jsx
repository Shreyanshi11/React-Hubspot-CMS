import { logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../CaseStudy/case_study.module.css';
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
    add_case_study = []
  } = props;



  logInfo(props, 'Case Study');
  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={Styles.two_col_image_text}>
          <div className='page-center'>
            {add_case_study.map((item, index) => (

              <div className={Styles.two_col_container}>
                <div className={Styles.image_container}>
                  <RenderImage imageField={add_case_study[index]?.image} />
                </div>

                <div className={Styles.text_container} style={{ backgroundColor: item.content_bg_color }}>
                  <div className={Styles.text_container_inner}>

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
                      <RichText fieldPath={`add_case_study[${index}].content`} />
                    </div>

                    <div className={Styles.button_content}>
                      <Button
                        buttonSize={item.buttonStyleSize}
                        buttonStyle={item.buttonStyleVariant}
                        href={getLinkFieldHref(item.buttonContentLink)}
                        rel={getLinkFieldRel(item.buttonContentLink)}
                        target={getLinkFieldTarget(item.buttonContentLink)}
                        showIcon={item.buttonContentShowIcon}     
                        iconFieldPath={`add_case_study[${index}].buttonContentIcon`}
                        iconPosition={item.buttonContentIconPosition}
                        ctaFieldpath={`add_case_study[${index}].ctaField`}
                        buttonType={item.buttonContentType}
                      >{item.buttonContentText}</Button>
                    </div>



                  </div>
                </div>


              </div>
            ))}

          </div>
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}


export { fields } from './fields.jsx';


export const meta = {
  label: 'Case Study - Repeater',
};
