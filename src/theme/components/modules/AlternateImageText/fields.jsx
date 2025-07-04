import React from "react";
import { FieldGroup, ModuleFields, RepeatedFieldGroup, ImageField, RichTextField, ChoiceField } from "@hubspot/cms-components/fields";
import CommonStylesSpacingFields from "../../components/SpacingStyleComponent/CommonStylesSpacingFields";
import HeadingContent from "../../components/HeadingComponent/HeadingContent";
import HeadingStyles from "../../components/HeadingComponent/HeadingStyle";
import ButtonContent from "../../components/ButtonComponent/ButtonContent";
import ButtonStyle from "../../components/ButtonComponent/ButtonStyle";


const matchButtonType = {
    controlling_field_path: 'add_image_text.buttonContentType',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^button$'
};

const matchCtaType = {
    controlling_field_path: 'add_image_text.buttonContentType',
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
            controlling_field_path: 'add_image_text.buttonContentShowIcon',
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
        <RepeatedFieldGroup name="add_image_text" label="Add Image and Text">
            <HeadingContent />
            <HeadingStyles headingStyleAsDefault="h2" />
            <RichTextField label='Content' name='content' />
            <ImageField
                label="Image"
                name="image"
                resizable={true}
                responsive={true}
                showLoading={true}
            />
            <ButtonContent
                textDefault='Learn more'
                linkDefault={{
                    open_in_new_tab: true,
                }}
                iconPositionDefault='right'
                buttonVisibility={buttonTypeVisibility}
                ctaVisibility={ctaTypeVisibility}
                iconVisibility={iconTypeVisibility}
            />
            <ButtonStyle
                buttonStyleDefault='primary'
                buttonSizeDefault='medium'
            />
            <ChoiceField
                name="img_position"
                label="Image Position"
                required={false}
                locked={false}
                multiple={false}
                display="select"
                choices={[
                    ['img--left', 'Image Left - Text Right'],
                    ['img--right', 'Text Left - Image Right'],
                ]}
                default="img--left"
            />
        </RepeatedFieldGroup>
    </ModuleFields>
);