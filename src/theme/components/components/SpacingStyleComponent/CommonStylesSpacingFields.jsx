import {
    ChoiceField,
    BackgroundImageField,
    BooleanField,
    ColorField,
    GradientField,
    FieldGroup,
    ImageField,
    SpacingField
} from '@hubspot/cms-components/fields';

const CommonStylesSpacingFields = () => (
    <>

        {/* <TextField name="custom_class" // Ensure this matches
            label="Custom Class"
            placeholder="Enter custom class name"
            helpText="Add a custom class name to the module for additional styling."
            default="" // Optional default value
            required={false} // Optional, set to true if required
        /> */}

        <FieldGroup
            label='Spacing and Background Section'
            name='groupSpacingandBackground'
            display='inline'
        >
            {/* Background Fields */}


            <ChoiceField name="background_option" label="Background Option" multiple={false} choices={[
                ['image', 'Image'],
                ['color', 'Color'],
                ['gradient_color', 'Gradient Color'],
                ['video_bg', 'Video'],
            ]} default='color' />

            <BackgroundImageField
                name="bg_image"
                label="Background image"

                required={false}
                visibility={{
                    controlling_field_path: 'groupStyle.groupSpacingandBackground.background_option',
                    operator: 'EQUAL',
                    controlling_value_regex: 'image',
                }}
            />

            < ColorField
                name="bg_color"
                label="Background color"
                showOpacity={true}
                required={false}
                locked={false}
                default={{
                    color: '#fff',
                    opacity: 0,
                }}
                limitedOptions={['#000000', '#ffffff']}
                visibility={{
                    controlling_field_path: 'groupStyle.groupSpacingandBackground.background_option',
                    operator: 'EQUAL',
                    controlling_value_regex: 'color',
                }}

            />
            <GradientField
                name="bg_gradient"
                label="Background gradient"
                helpText="Sets a gradient behind the content"
                required={false}
                default={{
                    colors: [
                        {
                            color: { r: 0, g: 0, b: 0, a: 1, },
                        },
                        {
                            color: { r: 255, g: 255, b: 255, a: 1, },
                        },
                    ],
                    side_or_corner: {
                        verticalSide: 'BOTTOM',
                        horizontalSide: null,
                    },
                }}
                visibility={{
                    controlling_field_path: 'groupStyle.groupSpacingandBackground.background_option',
                    operator: 'EQUAL',
                    controlling_value_regex: 'gradient_color',
                }}

            />

            <ImageField
                name="videoPosterUrl"
                label="Video poster Image"
                required={false}
                locked={false}
                responsive={true}
                resizable={true}
                showLoading={false}
                default={{
                    size_type: 'exact',
                    src: '',
                    alt: 'image-alt-text',
                    loading: 'lazy',
                    width: 128,
                    height: 128,
                    max_width: 128,
                    max_height: 128,
                }}
                visibility={{
                    controlling_field_path: 'groupStyle.groupSpacingandBackground.background_option',
                    operator: 'EQUAL',
                    controlling_value_regex: 'video_bg',
                }}
            />


            <BooleanField
                name="enable_overlay_color"
                label="Enable Overlay Color"
                required={false}
                locked={false}
                display="toggle"
                inlineHelpText="Sets a color overlay on the background"
                helpText="Sets a color overlay on the background."
                default={false}
            />

            <ColorField
                name="overlay_color"
                label="Overlay color"
                required={false}
                locked={false}
                showOpacity={true}
                default={{
                    color: '#365c7d',
                    opacity: 0.9,
                }}
                visibility={{
                    controlling_field_path: 'groupStyle.groupSpacingandBackground.enable_overlay_color',
                    operator: 'EQUAL',
                    controlling_value_regex: 'true',
                }}
            />
            <FieldGroup label="Spacing" name="spacing" helpText="Set the spacing for the module" >
                <SpacingField name="desktopSpacing" label="Desktop Spacing" helpText='This Spacing will apply before the 1199px screen size.' />
                <SpacingField name="laptopSpacing" label="Laptop Spacing" helpText='This Spacing will apply after 1199px screen size' />
                <SpacingField name="tabletSpacing" label="Tablet Spacing" helpText='This Spacing will apply after 991px screen size' />
                <SpacingField name="mobileSpacing" label="Mobile Spacing" helpText='This Spacing will apply after 767px screen size' />
            </FieldGroup>
        </FieldGroup>
    </>

);

export default CommonStylesSpacingFields;
