import { FieldGroup, ChoiceField, AlignmentField } from '@hubspot/cms-components/fields';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx'; 

export default function StyleFields() {
  return (
    <FieldGroup label="Styles" name="groupStyle" tab="STYLE">
      <ChoiceField
        label="Shape"
        name="shape"
        choices={[
          ['square', 'Square'],
          ['rounded', 'Rounded'],
          ['circle', 'Circle'],
        ]}
        display="buttons"
        preset="social_icon_background_shape"
        required={true}
        default="circle"
      />
      <ButtonStyle buttonStyleDefault="primary" buttonSizeDefault="medium" />
      <ChoiceField
        label="Gap between"
        name="spaceBetweenIcons"
        choices={[
          ['small', 'Small'],
          ['medium', 'Medium'],
          ['large', 'Large'],
        ]}
        required={true}
        default="medium"
      />
      <AlignmentField
        label="Horizontal alignment"
        name="alignment"
        alignmentDirection="HORIZONTAL"
        default={{
          horizontal_align: 'CENTER',
        }}
      />
    </FieldGroup>
  );
}
