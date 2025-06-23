import React from 'react';
import {
FieldGroup,
ModuleFields,
ImageField,
RichTextField,
RepeatedFieldGroup
} from '@hubspot/cms-components/fields';
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';
import RichTextContent from '../../components/fieldLibrary/RichTextField/index.jsx';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';



export const fields = (
<ModuleFields>

    <RepeatedFieldGroup
        label="Card Group"
        name="groupContent"
        occurrence={{
            min: 1,
            max: 20,
            default: 3,
        }}
    >
            <ImageField
    label="Image"
    name="image"
    resizable={true}
    responsive={true}
    showLoading={true}
></ImageField>
        <HeadingContent />
         <HeadingStyles headingStyleAsDefault='h3' />
        <RichTextField name='description' label='Description'></RichTextField>

    </RepeatedFieldGroup>


    <FieldGroup
        label='Styles'
        name='groupStyle'
        tab='STYLE'
    >
        <CommonStylesSpacingFields />

    </FieldGroup>
</ModuleFields>
);