import {
  ModuleFields,
  RepeatedFieldGroup,
  TextField,
  FieldGroup,
  AlignmentField,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';


const matchButtonType = {
  controlling_field_path: 'groupButtons.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^button$'
};

const matchCtaType = {
  controlling_field_path: 'groupButtons.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^cta$'
};

const buttonTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [matchButtonType]
};

const ctaTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [matchCtaType]
};

const iconTypeVisibility = {
  boolean_operator: 'AND',
  criteria: [
    matchButtonType,
    {
      controlling_field_path: 'groupButtons.buttonContentShowIcon',
      operator: 'MATCHES_REGEX',
      controlling_value_regex: '^true$'
    }
  ]
};


export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      label='Buttons'
      name='groupButtons'
      occurrence={{
        min: 1,
        max: 4,
        default: 1,
      }}
      default={[
        {
          buttonContentText: 'Learn more',
          buttonContentLink: {
            open_in_new_tab: true,
          },
          buttonContentShowIcon: false,
          buttonContentIcon: {
            name: 'arrow-right',
          },
          buttonContentIconPosition: 'right',
        },
      ]}
    >
      <ButtonContent
        textDefault='Learn more'
        linkDefault={{
          open_in_new_tab: true,
        }}
        iconPositionDefault='left'
        buttonVisibility={buttonTypeVisibility}
        ctaVisibility={ctaTypeVisibility}
        iconVisibility={iconTypeVisibility}
      />
      <ButtonStyle
        buttonStyleDefault='primary'
        buttonSizeDefault='medium'
        buttonStyleVisibility={buttonTypeVisibility}
        buttonSizeVisibility={buttonTypeVisibility}

      />
    </RepeatedFieldGroup>
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >

      <ChoiceField
        label='Gap'
        name='gap'
        helpText='The horizontal space between buttons'
        display='select'
        choices={[
          ['small', 'Small'],
          ['medium', 'Medium'],
          ['large', 'Large'],
        ]}
        required={true}
        default='medium'
      />
      <AlignmentField
        label='Alignment'
        name='alignment'
        alignmentDirection='HORIZONTAL'
        default={{
          horizontal_align: 'LEFT',
        }}
      />
    </FieldGroup>

  </ModuleFields>
);
