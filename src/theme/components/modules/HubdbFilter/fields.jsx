import React from 'react';
import {
    FieldGroup,
    ModuleFields,
    HubDbTableField,
    BooleanField
} from '@hubspot/cms-components/fields';
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';
import RichTextContent from '../../components/fieldLibrary/RichTextField/index.jsx';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';



export const fields = (
    <ModuleFields>

           <BooleanField
      label='Show Border'
      name='showBorder'
      display='toggle'
      default={false}
    />


        <FieldGroup
            label='Heading Group'
            name='heading_group'
        >
            <HeadingContent />
            <HeadingStyles headingStyleAsDefault='h2' />
        </FieldGroup>

        <HubDbTableField label="Hubdb Table" name="hubdb_table" default="" />

        <FieldGroup
            label='Styles'
            name='groupStyle'
            tab='STYLE'
        >
            <CommonStylesSpacingFields />

        </FieldGroup>
    </ModuleFields>
);