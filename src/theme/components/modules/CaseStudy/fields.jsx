import React from 'react';
import { ModuleFields, FieldGroup, RichTextField, ImageField, RepeatedFieldGroup, ColorField } from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx'
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx'
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx'




const matchButtonType = {
  controlling_field_path: 'add_case_study.groupButton.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^button$'
};

const matchCtaType = {
  controlling_field_path: 'add_case_study.groupButton.buttonContentType',
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
      controlling_field_path: 'add_case_study.groupButton.buttonContentShowIcon',
      operator: 'MATCHES_REGEX',
      controlling_value_regex: '^true$'
    }
  ]
};
export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">

      <CommonStylesSpacingFields />
    </FieldGroup>

    <RepeatedFieldGroup label="Add Case Study" name="add_case_study">


      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h1" />

      <RichTextField label='Content' name='content' />

     
      <ImageField
        label="Image"
        name="image"
        resizable={true}
        responsive={true}
        showLoading={true}
   
      />
       <FieldGroup
        label='Button Section'
        name='groupButton'
        display='inline'
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
        />

      </FieldGroup>
      <ColorField name='content_bg_color' label='Content BG Color' default=''>
      </ColorField>

    </RepeatedFieldGroup>



  </ModuleFields>
);
