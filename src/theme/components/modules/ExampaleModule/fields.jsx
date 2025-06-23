import React from 'react';
import {
    AlignmentField,
    BooleanField,
    FieldGroup,
    ModuleFields
} from '@hubspot/cms-components/fields';
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';
import RichTextContent from '../../components/fieldLibrary/RichTextField/index.jsx';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import CommonStylesSpacingContentFields from '../../components/SpacingStyleComponent/CommonStylesSpacingContentFields.jsx';


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

const bgVideoFieldVisibility = {
    boolean_operator: 'AND',
    criteria: [
        {
            controlling_field_path: 'groupStyle.groupSpacingandBackground.background_option',
            controlling_value_regex: '^video_bg$',
            operator: 'MATCHES_REGEX',
        },
    ],
};
export const fields = (
    <ModuleFields>

        <FieldGroup
            label='Content Section'
            name='groupContent'
            display='inline'
        >
            {/* <CommonStylesSpacingContentFields bgVideoFieldVisibility={bgVideoFieldVisibility} /> */}
            <HeadingContent />

            <RichTextContent
                label='Description'
                richTextDefault='<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>'
                featureSet='text'
            />
        </FieldGroup>
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

        <FieldGroup
            label='Styles'
            name='groupStyle'
            tab='STYLE'
        >
            <CommonStylesSpacingFields />

            <FieldGroup
                label='Content'
                name='groupContent'
                display='inline'
            >

                <HeadingStyles headingStyleAsDefault='h3' />
               
            </FieldGroup>


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

            
            
           
        </FieldGroup>
    </ModuleFields>
);