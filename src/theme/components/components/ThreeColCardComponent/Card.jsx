import {
    ChoiceField,
    TextField,
    ImageField,
    RepeatedFieldGroup
} from '@hubspot/cms-components/fields';
import LinkFields from '../../shared/LinkComponent/fields.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';


const CardField = () => {

    return (
        <>
            <ChoiceField
                name="card_style"
                label="Card Style"
                multiple={false}
                choices={[
                    ['variant_one', 'Variant One'],
                    ['variant_two', 'Variant Two']
                ]}
                default="variant_one"
            />

            <RepeatedFieldGroup name="item" label="List Item" required={false} default={[]} repeaterTitleFieldName="card_title">
                <ImageField
                    name="bg_image"
                    label="Background image"
                    resizable={true}
                    responsive={true}
                    showLoading={true}
                />
                <HeadingContent />

                <LinkFields />

            </RepeatedFieldGroup>
        </>

    )

};

export default CardField;
