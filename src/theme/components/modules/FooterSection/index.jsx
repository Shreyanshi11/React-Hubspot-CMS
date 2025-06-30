
import { Icon, logInfo, RichText } from '@hubspot/cms-components';
import FooterStyles from './footer.module.css';
import renderImage from '../../components/ImageComponent/imageRenderer.jsx';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
export function Component({ props }) {


    const {
        column_one: { logoImage, logo_link, content, bottom_image },
        column_two: { headingAndTextHeadingLevel, headingStyleColor, headingAndTextHeading, headingStyleVariant, footer_menu },
        column_three: { headingAndTextHeadingLevel: col_three_headinglevel, headingStyleColor: col_three_headingStyleColor, headingAndTextHeading: col_three_heading, headingStyleVariant: col_three_headingVariant, address, number_link, phone_number },
        column_four: { add_social_icon = [] },
        copyright_text

    } = props;
    logInfo("Footer Section Props", props);
    return (
        <>
            <footer className='footer__site_page'>
                <div className='footer__container'>
                    <div className={FooterStyles.flex_container}>
                        <div className={FooterStyles.footer_logo}>

                            <div className={FooterStyles.logo_block}>
                                <a
                                    key={index}
                                    href={logo_link?.url || "#"}
                                    target={logo_link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={
                                        [
                                            logo_link?.no_follow ? "nofollow" : "",
                                            logo_link?.sponsored ? "sponsored" : "",
                                            logo_link?.user_generated_content ? "ugc" : "",
                                            logo_link?.rel || ""
                                        ]
                                            .filter(Boolean)
                                            .join(" ") || undefined
                                    }
                                >

                                    <renderImage imageField='column_one.logoImage' />
                                </a>
                            </div>
                            <div>
                                <RichText fieldPath='column_one.content'></RichText>
                            </div>
                            <div className={FooterStyles.logo_block}>
                                <renderImage imageField='column_one.bottom_image' />
                            </div>
                        </div>

                        <div className={FooterStyles.menu_block}>
                            {headingAndTextHeading && (
                                <div className={Styles.heading_content}>
                                    <HeadingComponent
                                        headingLevel={headingAndTextHeadingLevel}
                                        headingStyleVariant={headingStyleVariant}
                                        heading={headingAndTextHeading}
                                        headingStyleColor={headingStyleColor}
                                    />
                                </div>
                            )}
                            <div>
                                <ul>
                                    {footer_menu.map((item, i) => (
                                        <li key={i}>
                                            {item.link_url ? (
                                                <a href={item.link_url}>{item.link_label}</a>
                                            ) : (
                                                <span>{item.link_label}</span>
                                            )}
                                            {item.children && item.children.length > 0 && (
                                                <ul>
                                                    {item.children.map((child, j) => (
                                                        <li key={j}>
                                                            <a href={child.link_url}>{child.link_label}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                        <div className={FooterStyles.contact_block}>
                            {col_three_heading && (
                                <div className={Styles.heading_content}>
                                    <HeadingComponent
                                        headingLevel={col_three_headinglevel}
                                        headingStyleVariant={col_three_headingVariant}
                                        heading={col_three_heading}
                                        headingStyleColor={col_three_headingStyleColor}
                                    />
                                </div>
                            )}
                            <div>
                                <RichText fieldPath='column_three.address'></RichText>
                            </div>

                        </div>
                        <div className={FooterStyles.social_icon_block}>
                            <div>
                                <ul>
                                    {add_social_icon.map((item, index) => (

                                        <li>
                                            <Icon purpose="DECORATIVE" fieldPath={`column_four.add_social_icon[${index}].social_icon`} />
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={FooterStyles.bottom_footer}>
                        <RichText fieldPath='copyright_text'></RichText>
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
