import {
  ModuleFields,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import RichTextContent from '../../components/RichTextContent/index.jsx';
import SectionStyle from '../../components/fieldLibrary/SectionStyle/index.jsx';


export const fields = (
  <ModuleFields>
    <RichTextContent featureSet='extended' />
    
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <SectionStyle sectionStyleDefault='section_variant_1' />
    </FieldGroup>
  </ModuleFields>
);
