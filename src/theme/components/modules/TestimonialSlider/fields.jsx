import React from "react";
import {
    FieldGroup,
    ModuleFields,
    RepeatedFieldGroup,
    ImageField,
    RichTextField,
    TextField,
} from "@hubspot/cms-components/fields";

import CommonStylesSpacingFields from "../../components/SpacingStyleComponent/CommonStylesSpacingFields";
import HeadingContent from "../../components/HeadingComponent/HeadingContent";
import HeadingStyles from "../../components/HeadingComponent/HeadingStyle";

export const fields = (
    <ModuleFields>
        <FieldGroup tab="STYLE" name="groupStyle" label="Style">
            <HeadingStyles headingStyleAsDefault="h2" />
            <CommonStylesSpacingFields />
        </FieldGroup>
        <HeadingContent />

        <RepeatedFieldGroup name="add_testimonial" label="Add Testimonial">
            <RichTextField label='Testimonail Quote' name='content' />
            <ImageField
                label="Testimonial Image"
                name="testimonial_image"
                resizable={true}
                responsive={true}
                showLoading={true}
            />
            <ImageField
                label="Rating Image"
                name="rating_image"
                resizable={true}
                responsive={true}
                showLoading={true}
            />
            <TextField
                label="Testimonial Name"
                name="testimonial_name" />

            <TextField
                label="Testimonial Designation"
                name="testimonial_designation" />

        </RepeatedFieldGroup>
    </ModuleFields>
);
