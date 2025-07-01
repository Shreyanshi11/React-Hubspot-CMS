import { ChoiceField, ColorField } from '@hubspot/cms-components/fields';


export default function HeadingStyles(props) {
  const { headingStyleAsDefault = 'h1', headingStyleAsVisibility = null, headingStyleAsLabel = 'Heading style' } = props;

  return (
    <>
      <ChoiceField
        label={headingStyleAsLabel}
        name="headingStyleVariant"
        visibilityRules="ADVANCED"
        advancedVisibility={headingStyleAsVisibility}
        choices={[
          ['display_1', 'Display 1'],
          ['display_2', 'Display 2'],
          ['h1', 'Heading 1'],
          ['h2', 'Heading 2'],
          ['h3', 'Heading 3'],
          ['h4', 'Heading 4'],
          ['h5', 'Heading 5'],
          ['h6', 'Heading 6'],
        ]}
        required={true}
        default={headingStyleAsDefault}
      />
      <ColorField
        name="headingStyleColor"
        label="Heading Color"
        showOpacity={true}
        required={false}
        locked={false}
        default={{
          color: '#1A202C',
          opacity: 100,
        }}

      />

    </>
  );
}
