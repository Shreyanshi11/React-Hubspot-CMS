import {
    BooleanField,
    ImageField,
    TextField
} from '@hubspot/cms-components/fields';

export default function BackgroundVideoContent() {

    const videoFieldVisibility = {
        boolean_operator: 'OR',
        criteria: [{
            controlling_field_path: 'showVideo',
            controlling_value_regex: 'true',
            operator: 'EQUAL',
        }]
    }

    return (
        <>


            <BooleanField
                label='Show Video BG'
                name='showVideo'
                display='toggle'
                default={false}
            />
            <TextField
                label="Video URL"
                name="videoUrl"
                default={''}
                visibilityRules="ADVANCED"
                advancedVisibility={videoFieldVisibility}
            />

            <ImageField
                label='Video poster Image'
                name='videoPosterUrl'
                default={''}
                visibilityRules="ADVANCED"
                advancedVisibility={videoFieldVisibility}

            />

        </>
    );
}
