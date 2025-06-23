import { LinkField, TextField, ImageField } from '@hubspot/cms-components/fields';

const LinkFields = () => (
    <>
        <ImageField
            name="link_icon"
            label="Link Icon"
            resizable={true}
            responsive={true}
            showLoading={true}
        />

        <LinkField
            label='Link'
            name='link'
            visibilityRules='ADVANCED'
            supportedTypes={[
                'EXTERNAL',
                'CONTENT',
                'FILE',
                'EMAIL_ADDRESS',
                'CALL_TO_ACTION',
                'BLOG',
                'PAYMENT',
            ]}
            type='EXTERNAL'
            default={{
                url: {
                    content_id: null,
                    type: "EXTERNAL",
                    href: ""
                },
                open_in_new_tab: false,
                no_follow: false
            }}
        />
    </>
);

export default LinkFields;