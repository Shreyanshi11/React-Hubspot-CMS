
import { Form, Menu, RichText } from '@hubspot/cms-components';
import FooterStyles from './footer.module.css';


export function Component({ logoImage }) {
    // logInfo(formOne);
    // const formId = formOne?.formId;
    // const portalId = formOne?.portalId;
    // const targetId = `hs_form_target_${formId}`;


    return (
        <>
            <footer className='footer__site_page'>
                <div className='footer__container'>
                    <div className={FooterStyles.footer_container_inner}>
                        <div className={FooterStyles.logo_block}>
                            <img src={logoImage?.src || 'https://i0.wp.com/zfcthk.com/wp-content/uploads/2022/07/dummy-logo-4b.png?ssl=1'} width={logoImage?.width} height={logoImage?.height} alt={logoImage?.alt || 'Footer Logo'} loading={logoImage?.loading || 'lazy'} />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export { fields } from './fields.jsx';
export const meta = {
    label: 'Footer Module',
};
