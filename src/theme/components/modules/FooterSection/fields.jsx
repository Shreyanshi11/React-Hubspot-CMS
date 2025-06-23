import {
    ModuleFields,
    ImageField
} from '@hubspot/cms-components/fields';


export const fields = (
    <ModuleFields>
        <ImageField
            label='Logo Image'
            name='logoImage'
            resizable={true}
            responsive={false}
            showLoading={true}
        />
        {/* <RepeatedFieldGroup
            name="otherlogos"
            label="Other Logos"
            occurrence={{
                min: 1, // Minimum 1 item
                max: 10, // Maximum 10 items
                default: 1, // Default to 1 item
            }}
        >
            <ImageField
                name="logo"
                label="Logo"
                resizable={true}
                responsive={false}
                showLoading={true}
            />
        </RepeatedFieldGroup>
        <TextField
            name="my_header"
            label="Quick Links"
            default="Quick Links"
            required
        />
        <MenuField
            label='Simple Menu'
            name='menu'
            default='default'
        />
        <RichTextField
            label="Certifications"
            name="certifications"
        />
        <TextField
            name="Form_title"
            label="Form Heading"
            default="Subscribe to our Newsletter"
            required
        />
        <RichTextField
            label="Social Icons"
            name="social_icons"
        />
        <RichTextField
            label="Copyrights"
            name="copyrights"
            defaultValue={`<p>© {{ year }} Primo Coding, LLC. All Rights Reserved. <a href="https://www.primocoding.com/privacy-policy" rel="noopener" target="_blank">Privacy Policy</a></p>`}
        />
        <FormField name='newslatterForm' label='Select Form' default="" /> */}


    </ModuleFields>
);