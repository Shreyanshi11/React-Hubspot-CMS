import {
    ChoiceField,
  } from '@hubspot/cms-components/fields';
  
  export default function ButtonStyle(props) {
    const {
      buttonStyleDefault = 'primary',
      buttonStyleVisibility = null,
      buttonSizeDefault = 'medium',
      buttonSizeVisibility = null,
    } = props;
  
    return (
      <>
        <ChoiceField
          label="Button style"
          name="buttonStyleVariant"
          visibilityRules="ADVANCED"
          advancedVisibility={buttonStyleVisibility}
          display="select"
          choices={[
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['tertiary', 'Tertiary'],
            ['accent', 'Accent'],
          ]}
          inlineHelpText='select a style for the button'
          required={true}
          default={buttonStyleDefault}
        />
        <ChoiceField
          label="Button size"
          name="buttonStyleSize"
          visibilityRules="ADVANCED"
          advancedVisibility={buttonSizeVisibility}
          display="select"
          choices={[
            ['small', 'Small'],
            ['medium', 'Medium'],
            ['large', 'Large'],
          ]}
          inlineHelpText='select a size for the button'
          required={true}
          default={buttonSizeDefault}
        />
      </>
    );
  }
  