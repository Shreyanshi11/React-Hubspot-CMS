import React from 'react';
import { ModuleFields, FieldGroup, RichTextField, BooleanField, ImageField, ChoiceField, TextField } from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx'
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx'
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx'


const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'textcontent.groupButton.showButton',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}

const matchButtonType = {
  controlling_field_path: 'textcontent.groupButton.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^button$'
};

const matchCtaType = {
  controlling_field_path: 'textcontent.groupButton.buttonContentType',
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
      controlling_field_path: 'textcontent.groupButton.buttonContentShowIcon',
      operator: 'MATCHES_REGEX',
      controlling_value_regex: '^true$'
    }
  ]
};

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles headingStyleAsDefault="h1" />

      <FieldGroup
        label='Button Section'
        name='groupButton'
        display='inline'
      >
        <ButtonStyle
          buttonStyleDefault='primary'
          buttonSizeDefault='medium'
          buttonSizeVisibility={buttonFieldVisibility}
          buttonStyleVisibility={buttonFieldVisibility}
        />
      </FieldGroup>

      <CommonStylesSpacingFields />
    </FieldGroup>

    <FieldGroup label="Text Content" name="textcontent" display="inline">

    <BooleanField
       label='Show Border'
       name='showBorder'
       display='toggle'
       default={false}
     />

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

    <FieldGroup label="Image Content" name="imagecontent" display="inline">

      <ChoiceField
        label="Video/Image"
        name="video_image"
        display="select"
        choices={[
          ['video', 'Video'],
          ['image', 'Image']
        ]}
        default="image"
      />

      <TextField
        label="Video URL"
        name="videoUrl"
        default=""
        visibility={{
          controlling_field_path: 'imagecontent.video_image',
          operator: 'EQUAL',
          controlling_value_regex: 'video'
        }}
      />

      <ImageField
        label="Video Poster Image"
        name="videoPosterUrl"
        default=""
        visibility={{
           controlling_field_path: 'imagecontent.video_image',
          operator: 'EQUAL',
          controlling_value_regex: 'video'
        }}
      />

      <ImageField
        label="Image"
        name="image"
        resizable={true}
        responsive={true}
        showLoading={true}
        visibility={{
           controlling_field_path: 'imagecontent.video_image',
          operator: 'EQUAL',
          controlling_value_regex: 'image'
        }}
      />


    </FieldGroup>

  </ModuleFields>
);
