import React from 'react';
import { ModuleFields, FieldGroup, RichTextField, ImageField, RepeatedFieldGroup, ColorField } from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx'
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx'
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx'



export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">

      <CommonStylesSpacingFields />
    </FieldGroup>

    <RepeatedFieldGroup label="Add Case Study" name="add_case_study" display="inline">


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
          buttonSizeVisibility={buttonFieldVisibility}
          buttonStyleVisibility={buttonFieldVisibility}
        />

      </FieldGroup>
      <ColorField name='content_bg_color' label='Content BG Color' default=''>
      </ColorField>

    </RepeatedFieldGroup>



  </ModuleFields>
);
