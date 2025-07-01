import React from "react";
import { ModuleFields, FieldGroup, RichTextField, BooleanField, ImageField, RepeatedFieldGroup, ColorField } from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from "../../components/SpacingStyleComponent/CommonStylesSpacingFields";
import HeadingStyles from "../../components/HeadingComponent/HeadingStyle";
import HeadingContent from "../../components/HeadingComponent/HeadingContent";
import ButtonContent from "../../components/ButtonComponent/ButtonContent";
import ButtonStyle from "../../components/ButtonComponent/ButtonStyle";

const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'sectionContent.sectionButton.showButton',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}

const matchButtonType = {
  controlling_field_path: 'sectionContent.sectionButton.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^button$'
};

const matchCtaType = {
  controlling_field_path: 'sectionContent.sectionButton.buttonContentType',
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
      controlling_field_path: 'sectionContent.sectionButton.buttonContentShowIcon',
      operator: 'MATCHES_REGEX',
      controlling_value_regex: '^true$'
    }
  ]
};


const blockButtonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'imageTextContainer.blockContentContainer.blockButton.showButton',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}

const matchBlockButtonType = {
  controlling_field_path: 'imageTextContainer.blockContentContainer.blockButton.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^button$'
};

const matchBlockCtaType = {
  controlling_field_path: 'imageTextContainer.blockContentContainer.blockButton.buttonContentType',
  operator: 'MATCHES_REGEX',
  controlling_value_regex: '^cta$'
};

const blockButtonTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [matchBlockButtonType]
};

const blockCtaTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [matchBlockCtaType]
};

const blockIconTypeVisibility = {
  boolean_operator: 'AND',
  criteria: [
    matchBlockButtonType,
    {
      controlling_field_path: 'imageTextContainer.blockContentContainer.blockButton.buttonContentShowIcon',
      operator: 'MATCHES_REGEX',
      controlling_value_regex: '^true$'
    }
  ]
};

export const fields = (
    <ModuleFields>
        <FieldGroup tab="STYLE" name="groupStyle" label="Style">
            <HeadingStyles headingStyleAsDefault="h2" />
            <FieldGroup name="sectionButton" label="Section Button" display="inline">
                <ButtonStyle
                    buttonStyleDefault='simple'
                    buttonSizeDefault='medium'
                    buttonSizeVisibility={buttonFieldVisibility}
                    buttonStyleVisibility={buttonStyleVisibility}
                />
            </FieldGroup>
            <CommonStylesSpacingFields />
        </FieldGroup>
        <FieldGroup name="sectionContent" label="Section Content">
            <HeadingContent />
            <FieldGroup name="sectionButton" label="Section Button" display="inline">
                <BooleanField
                    label='Show button'
                    name='showButton'
                    display='toggle'
                    default={true}
                />
                <ButtonContent
                    textDefault='Read more case studies'
                    linkDefault={{
                        open_in_new_tab: false,
                    }}
                    iconPositionDefault='left'
                    buttonVisibility={buttonTypeVisibility}
                    ctaVisibility={ctaTypeVisibility}
                    iconVisibility={iconTypeVisibility}
                />
            </FieldGroup>
        </FieldGroup>

        <RepeatedFieldGroup name="imageTextContainer" label="Image Text Repeated Container">
            <FieldGroup tab="STYLE" name="blockContentStyle" label="Block Content Style">
                <ColorField
                    name="blockBGColor"
                    label="Block Background color"
                    required={false}
                    locked={false}
                    default={{
                        color: '#F1F2FF',
                        opacity: 100,
                    }}
                />
                <HeadingStyles headingStyleAsDefault="h2" />
                <FieldGroup name="blockButton" label="Block Button" display="inline">
                    <ButtonStyle
                        buttonStyleDefault='simple'
                        buttonSizeDefault='small'
                        buttonSizeVisibility={blockButtonFieldVisibility}
                        buttonStyleVisibility={buttonStyleVisibility}
                    />
                </FieldGroup>
            </FieldGroup>
            <FieldGroup name="blockContentContainer" label="Block Content Container" display="inline">
                <HeadingContent />
                <RichTextField name="paragraphText" label="Paragraph Text" />
                <FieldGroup name="blockButton" label="Block Button" display="inline">
                    <BooleanField
                        label='Show button'
                        name='showButton'
                        display='toggle'
                        default={true}
                    />
                    <ButtonContent
                        textDefault='Read More'
                        linkDefault={{
                            open_in_new_tab: false,
                        }}
                        iconPositionDefault='left'
                        buttonVisibility={blockButtonTypeVisibility}
                        ctaVisibility={blockCtaTypeVisibility}
                        iconVisibility={blockIconTypeVisibility}
                    />
                </FieldGroup>
                <ImageField
                    label="Image"
                    name="image"
                    resizable={true}
                    responsive={true}
                    showLoading={true}
                    visibilityRules="ADVANCED"
                    advancedVisibility={imageFieldVisibility}
                />
            </FieldGroup>
        </RepeatedFieldGroup>
    </ModuleFields>
);