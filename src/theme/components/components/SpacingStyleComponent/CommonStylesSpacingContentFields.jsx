import {
    BooleanField,
    TextField
} from '@hubspot/cms-components/fields';

const CommonStylesSpacingContentFields = (props) => {

    const { bgVideoFieldVisibility = null } = props;


    return (
        <>
            <TextField
                name="videoUrl"
                label="Video URL"
                required={false}
                locked={false}
                default=""
                visibilityRules="ADVANCED"
                advancedVisibility={bgVideoFieldVisibility}
            />
             <BooleanField
                name="hide_video_mobile"
                label="Hide Video Mobile"
                required={false}
                locked={false}
                display="toggle"
                default={false}
                visibilityRules="ADVANCED"
                advancedVisibility={bgVideoFieldVisibility}
             />
        </>
    );
}


export default CommonStylesSpacingContentFields;
