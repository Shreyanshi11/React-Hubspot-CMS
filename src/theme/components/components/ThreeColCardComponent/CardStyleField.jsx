import React from 'react';
import {
    ColorField,
    GradientField
} from '@hubspot/cms-components/fields';



const CardStyleField = (props) => {
    const { colorVisibility = null } = props;
    const { VariTwoGradionVisibility = null } = props;

    return (
        <>
            <ColorField
                name="card_background_color"
                label="Card Overlay Background Color"
                visibilityRules="ADVANCED"
                advancedVisibility={colorVisibility}
                showOpacity={true}
                required={false}
                locked={false}
                default={{
                    color: '#000000',
                    opacity: 0.4,
                }}
                limitedOptions={['#000000', '#ffffff']}
            />
            <GradientField
                name="card_title_background_gradient_color"
                label="Card Title Background Gradient Color"
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
                visibilityRules="ADVANCED"
                advancedVisibility={VariTwoGradionVisibility}

            />
        </>
    );
};

export default CardStyleField;
