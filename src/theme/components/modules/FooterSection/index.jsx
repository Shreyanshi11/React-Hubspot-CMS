
import { Icon, logInfo, RichText } from '@hubspot/cms-components';
import Styles from './footer.module.css';
import RenderImage from '../../components/ImageComponent/imageRenderer.jsx';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
export function Component(props) {


    const {
        column_one: { favicon_logo, logo_link, content, bottom_image },
        column_two: { headingAndTextHeadingLevel, headingStyleColor, headingAndTextHeading, headingStyleVariant, footer_menu = [] },
        column_three: { headingAndTextHeadingLevel: col_three_headinglevel, headingStyleColor: col_three_headingStyleColor, headingAndTextHeading: col_three_heading, headingStyleVariant: col_three_headingVariant, address, number_link, phone_number },
        column_four: { add_social_icon = [] },
        copyright_text

    } = props;

    const renderMenu = (items) => {
        return (
            <ul className={Styles.menu_list}>
                {items.map((item, index) => (
                    <li key={index} className={Styles.list_items}>
                        {item.linkUrl ? (
                            <a
                                href={item.linkUrl}
                                target={item.linkTarget || '_self'}
                                rel="noopener noreferrer"
                                dangerouslySetInnerHTML={{ __html: item.linkLabel }}
                            />
                        ) : (
                            <span dangerouslySetInnerHTML={{ __html: item.linkLabel }} />
                        )}
                        {item.children && item.children.length > 0 && renderMenu(item.children)}
                    </li>
                ))}
            </ul>
        );
    };


    logInfo("Footer Section Props", props);


    return (
        <>

            <footer className={`${Styles.footer_section} footer__site_page`}>
                <div className='footer__container'>
                    <div className={Styles.flex_container}>
                        <div className={Styles.logo_block}>

                            <div className={Styles.footer_logo}>
                                <a
                                    href={logo_link?.url?.href_with_scheme || "#"}
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

                                    <RenderImage imageField={favicon_logo} /> 
                                </a>
                            </div>
                            <div>
                                <RichText fieldPath='column_one.content'></RichText>
                            </div>
                            <div className={Styles.bottom_logo}>
                                <RenderImage imageField={bottom_image} />
                            </div>
                        </div>

                        <div className={Styles.menu_block}>
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
                            <div className={Styles.menu_list}>
                                <div className={Styles.menu_container}>
                                    {footer_menu.length > 0 ? (
                                        <div className={Styles.menu_group}>
                                            {renderMenu(footer_menu)}
                                        </div>
                                    ) : (
                                        <p>No menu items added.</p>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className={Styles.contact_block}>
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
                            <div>
                                <a
                                    href={number_link?.url?.href_with_scheme || "#"}
                                    target={number_link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={
                                        [
                                            number_link?.no_follow ? "nofollow" : "",
                                            number_link?.sponsored ? "sponsored" : "",
                                            number_link?.user_generated_content ? "ugc" : "",
                                            number_link?.rel || ""
                                        ]
                                            .filter(Boolean)
                                            .join(" ") || undefined
                                    }
                                >

                                    {phone_number}
                                </a>
                            </div>


                        </div>
                        <div className={Styles.social_icon_block}>
                            <div className={Styles.icon_list}>
                                <ul>
                                    {add_social_icon.map((item, index) => (

                                        <li>
                                            <a
                                                href={item.social_link?.url?.href_with_scheme || "#"}
                                                target={item.social_link?.open_in_new_tab ? "_blank" : "_self"}
                                                rel={
                                                    [
                                                        item.social_link?.no_follow ? "nofollow" : "",
                                                        item.social_link?.sponsored ? "sponsored" : "",
                                                        item.social_link?.user_generated_content ? "ugc" : "",
                                                        item.social_link?.rel || ""
                                                    ]
                                                        .filter(Boolean)
                                                        .join(" ") || undefined
                                                }
                                            >
                                                <Icon purpose="DECORATIVE" fieldPath={`column_four.add_social_icon[${index}].social_icon`} />
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.bottom_footer}>
                        <RichText fieldPath='copyright_text'></RichText>
                    </div>
                </div>
            </footer >

        </>
    );
}

export { fields } from './fields.jsx';
export const meta = {
    label: 'Footer Module',
};
