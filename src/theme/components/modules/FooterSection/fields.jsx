import { SimpleMenu } from '@hubspot/cms-components';
import {
    ModuleFields,
    ImageField,
    RichTextField,
    FieldGroup,
    TextField,
    LinkField,
    IconField,
    RepeatedFieldGroup,
    SimpleMenuField
} from '@hubspot/cms-components/fields';
import HeadingContent from '../../components/HeadingComponent/HeadingContent';
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle';


export const fields = (
    <ModuleFields>
        <FieldGroup label='Column 1'
            name='column_one'
        >
            <ImageField
                label='Logo Image'
                name='logoImage'
                resizable={true}
                responsive={false}
                showLoading={true}
            />
             <LinkField name="logo_link"
                label="Logo Link" supportedTypes={[
                    'EXTERNAL',
                    'CONTENT',
                    'FILE',
                    'EMAIL_ADDRESS',
                    'BLOG',
                    'CALL_TO_ACTION',
                    'PHONE_NUMBER',
                    'WHATSAPP_NUMBER',
                    'PAYMENT',
                ]}
                showAdvancedRelOptions={true}
                default=''>

            </LinkField>
            <RichTextField
                label="Content"
                name="content"
            />
            <ImageField
                label='Bottom Image'
                name='bottom_image'
                resizable={true}
                responsive={false}
                showLoading={true}
            />
        </FieldGroup>
        <FieldGroup label='Column 2'
            name='column_two'>
            <HeadingContent />
            <HeadingStyles headingStyleAsDefault='h3' />
            <SimpleMenuField
                name="footer_menu"
                label="Footer menu"
                required={false}
                default={[]}
            />
        </FieldGroup>
        <FieldGroup label='Column 3'
            name='column_three'>
            <HeadingContent />
            <HeadingStyles headingStyleAsDefault='h3' />
            <RichTextField label='Address' name='address' />

            <LinkField name="number_link"
                label="Phone Number Link" supportedTypes={[
                    'EXTERNAL',
                    'CONTENT',
                    'FILE',
                    'EMAIL_ADDRESS',
                    'BLOG',
                    'CALL_TO_ACTION',
                    'PHONE_NUMBER',
                    'WHATSAPP_NUMBER',
                    'PAYMENT',
                ]}
                showAdvancedRelOptions={true}
                default={{
                    url: {
                        content_id: null,
                        type: 'EXTERNAL',
                        href: '',
                    },
                    open_in_new_tab: false,
                    no_follow: false,
                }}>

            </LinkField>

            <TextField name="phone_number"
                label="Phone Number">

            </TextField>

        </FieldGroup>

        <FieldGroup label='Column 4'
            name='column_four'>
            <RepeatedFieldGroup label='Add Social Icon' name='add_social_icon'>
                <IconField label='Social Icon' name='social_icon'/>

            </RepeatedFieldGroup>

        </FieldGroup>
        <RichTextField label='Copyright Text' name='copyright_text'
        default='© 2023 Copyright by IK Developers. All rights reserved.'>

        </RichTextField>
    </ModuleFields>
);