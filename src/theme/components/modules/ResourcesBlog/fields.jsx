import React from 'react';
import {
    ModuleFields,
    BlogField,
    FieldGroup
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';

export const fields = (
    <ModuleFields>

        <BlogField name='blog_field' label='Select Blog'></BlogField>

        <FieldGroup
            label='Styles'
            name='groupStyle'
            tab='STYLE'
        >
            <CommonStylesSpacingFields />

        </FieldGroup>
    </ModuleFields>
);