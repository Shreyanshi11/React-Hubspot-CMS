import { TextField } from '@hubspot/cms-components/fields';


export default function CustomClass(props) {

  return (
    <>
      
      <TextField
      name="customClass"
      label="Custom Class"
      required={false}
      locked={false}
      default=""
      inlineHelpText="Add a custom class to this module for additional styling."
    />

    </>
  );
}
