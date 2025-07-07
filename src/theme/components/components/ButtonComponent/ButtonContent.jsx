import {
  TextField,
  LinkField,
  IconField,
  ChoiceField,
  BooleanField,

  CtaField,
} from '@hubspot/cms-components/fields';


export default function ButtonContent(props) {
  const {
    textDefault = 'Learn more',
    linkDefault = {
      open_in_new_tab: true,
    },
    iconDefault = {
      name: 'arrow-right',
    },
    iconPositionDefault = 'right',
    buttonVisibility = null,
    ctaVisibility = null,
    iconVisibility = null
  } = props;

  return (
    <>
      <ChoiceField
        label="Chose Button Type"
        name="buttonContentType"
        choices={[
          ['cta', 'CTA Button'],
          ['button', 'Normal Button'],
        ]}
        display="select"
        default="button"
      />
      <CtaField
        name="ctaField"
        label="CTA"
        required={false}
        locked={false}
        defaultValue={null}
        visibilityRules='ADVANCED'
        advancedVisibility={ctaVisibility}
      />

      <TextField
        label="Button text"
        name="buttonContentText"
        visibilityRules='ADVANCED'
        advancedVisibility={buttonVisibility}
        default={textDefault}
      />

      <LinkField
        label="Link"
        name="buttonContentLink"
        visibilityRules='ADVANCED'
        advancedVisibility={buttonVisibility}
        supportedTypes={[
          'EXTERNAL',
          'CONTENT',
          'FILE',
          'EMAIL_ADDRESS',
          'CALL_TO_ACTION',
          'BLOG',
          'PAYMENT',
        ]}
        default={linkDefault}
      />
      <BooleanField
        label="Show icon"
        name="buttonContentShowIcon"
        // id="buttonContentShowIcon"
        display="toggle"
        default={false}
        visibilityRules='ADVANCED'
        advancedVisibility={buttonVisibility}
      />
      <IconField
        label="Icon"
        name="buttonContentIcon"
        // id="buttonContentIcon"
        // visibility={{
        //   controlling_field: 'buttonContentShowIcon',
        //   controlling_value_regex: 'true',
        //   operator: 'EQUAL',
        // }}
        visibilityRules='ADVANCED'
        advancedVisibility={iconVisibility}
        iconSet="fontawesome-6.4.2"
        default={iconDefault}
      />
      <ChoiceField
        label="Icon position"
        name="buttonContentIconPosition"
        // visibility={{
        //   controlling_field: 'buttonContentShowIcon',
        //   controlling_value_regex: 'true',
        //   operator: 'EQUAL',
        // }}
        visibilityRules='ADVANCED'
        advancedVisibility={iconVisibility}
        choices={[
          ['left', 'Left'],
          ['right', 'Right'],
        ]}
        display="select"
        default={iconPositionDefault}
      />
    </>
  );
}
