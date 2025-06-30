import React from 'react';
import {ModuleFields, FieldGroup, RichTextField} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx'
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx'
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx'

export const fields = (
 <ModuleFields>
   <FieldGroup tab="STYLE" name="groupStyle" label="Style">
     <HeadingStyles headingStyleAsDefault="h1" />
     <CommonStylesSpacingFields />
   </FieldGroup>

   <FieldGroup label="Text Content" name="textcontent" display="inline">
     <HeadingContent />

     <RichTextField label='Paragraph Text' name='paragraphText' />

     <FieldGroup label="Bottom Group" name="bottom_group">
        <ButtonContent />
        <ButtonStyle buttonStyleDefault="primary" buttonSizeDefault="medium" />
     </FieldGroup>

   </FieldGroup>

 </ModuleFields>
);
