import React from 'react';
import { ModuleFields, FieldGroup, RichTextField, BooleanField } from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx'
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx'
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx'

const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
      controlling_field_path: 'groupButton.showButton',
      controlling_value_regex: 'true',
      operator: 'EQUAL',
  }]
}

const matchButtonType = {
controlling_field_path: 'groupButton.buttonContentType',
operator: 'MATCHES_REGEX',
controlling_value_regex: '^button$'
};

const matchCtaType = {
controlling_field_path: 'groupButton.buttonContentType',
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
    controlling_field_path: 'groupButton.buttonContentShowIcon',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^true$'
  }
]
};

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles headingStyleAsDefault="h1" />
      <CommonStylesSpacingFields />
    </FieldGroup>

    <FieldGroup label="Text Content" name="textcontent" display="inline">
      <HeadingContent />

      <RichTextField label='Paragraph Text' name='paragraphText' />

      <FieldGroup
        label='Button Section'
        name='groupButton'
        display='inline'
      >
        <BooleanField
          label='Show button'
          name='showButton'
          display='toggle'
          default={true}
        />
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

      </FieldGroup>

    </FieldGroup>

  </ModuleFields>
);
