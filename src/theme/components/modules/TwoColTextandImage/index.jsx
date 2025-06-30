import { logInfo } from '@hubspot/cms-components';
// import Styles from '../TwoColTextandImage/twocoltextandimage.css';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';

export function Component(props) {
 const {
   module_id,
   groupStyle: {
   }
 } = props;


 logInfo(props, 'Two Col Image-Text Section');
 return (
   <>
     <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
       <div className={Styles.two_col_image_text}>
                
       </div>
     </ResponsiveSpacingWrapper>
   </>
 );
}


export { fields } from './fields.jsx';


export const meta = {
 label: 'Two Col Image-Text Section',
};
