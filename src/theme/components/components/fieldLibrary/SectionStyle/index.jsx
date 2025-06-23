import {
  ChoiceField,
} from '@hubspot/cms-components/fields';



export default function SectionStyle(props) {
  const {
    sectionStyleDefault = 'section_variant_1',
    sectionStyleVisibility = null,
  } = props;

  return (
    <ChoiceField
      label='Text color'
      name='sectionStyleVariant'
      visibilityRules='ADVANCED'
      advancedVisibility={sectionStyleVisibility}
      display='select'
      choices={[
        ['section_variant_1', 'Light section 1 text color'],
        ['section_variant_2', 'Light section 2 text color'],
        ['section_variant_3', 'Light section 3 text color'],
        ['section_variant_4', 'Dark section text color'],
      ]}
      required={true}
      default={sectionStyleDefault}
    />
  );
}
