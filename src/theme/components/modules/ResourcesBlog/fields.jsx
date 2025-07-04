import React from 'react';
import {
    ModuleFields,
    BlogField,
    FieldGroup
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';


export const fields = (
    <ModuleFields>
        <FieldGroup
            label='Heading Group'
            name='heading_group'
        >
            <HeadingContent />
            <HeadingStyles headingStyleAsDefault='h2' />
        </FieldGroup>

        <BlogField name="blog" label="Select Blog" />

        <FieldGroup
            label='Styles'
            name='groupStyle'
            tab='STYLE'
        >
            <CommonStylesSpacingFields />

        </FieldGroup>
    </ModuleFields>
);
