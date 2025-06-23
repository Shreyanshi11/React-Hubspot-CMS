// shared/ResponsiveSpacingWrapper.jsx
import React, { useMemo } from 'react';
import { logInfo } from '@hubspot/cms-components';
import LinkFields from '../LinkComponent/index.jsx';
import HeadingComponent from '../HeadingComponent/HeadingComponent.jsx';
import CardStyles from './CardComp.module.css';

const ResponsiveSpacingWrapper = ({ card, moduleId }) => {

    // const buttonHref = getLinkFieldHref(link);
    // const buttonRel = getLinkFieldRel(link);
    // const buttonTarget = getLinkFieldTarget(link);
    const cardItem = card.groupContent.item || [];
    const cardStyle = card.groupContent.card_style || 'variant_one';

    const headingStyleVariant = card.groupStyle.headingStyleVariant;
    const headingStyleColor = card.groupStyle.headingStyleColor;


    // Generate a unique class name per module
    const fallbackId = Math.random().toString(36).substr(2, 5);
    const uniqueClass = useMemo(() => `section-${moduleId || fallbackId}`, [moduleId]);

    const CardTitleOverlayColor = card.groupStyle.card_background_color?.rgba;
    const CardTitleOverlayGradientColor = card.groupStyle.card_title_background_gradient_color?.css;

    logInfo('headingStyleVariant', headingStyleVariant);
    logInfo('headingStyleColor', headingStyleColor);

    const conditionalStyles = cardStyle === 'variant_one'
        ? `
      .${uniqueClass} .CardItems::after {
        background-color: ${CardTitleOverlayColor};
      }
    `
        : `
      .${uniqueClass} .CardItemInners::after {
        background-image: ${CardTitleOverlayGradientColor};
      }
    `;


    return (
        <>
            <style>
                {conditionalStyles}
            </style>
            <div className={`${cardStyle === 'variant_one' ? CardStyles.variant_one : CardStyles.variant_two} ${uniqueClass} cardOverlayStyles`}  >
                {cardItem.map((item, index) => (
                    <div key={index} className={`${CardStyles.CardItem}` + ` CardItems`} style={{ backgroundImage: `url(${item?.bg_image?.src})` }}>
                        <div className={`${CardStyles.CardItemInner} ` + ` CardItemInners`}  >
                            <div className={CardStyles.CardContent}>
                                <div className={CardStyles.title}>
                                    <HeadingComponent
                                        heading={item.headingAndTextHeading}
                                        headingLevel={item.headingAndTextHeadingLevel}
                                        headingStyleVariant={headingStyleVariant}
                                        headingStyleColor={headingStyleColor}
                                    />
                                </div>
                                <div className={CardStyles.CardLink}>
                                    <LinkFields linkField={item.link} IconUrl={item.link_icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ResponsiveSpacingWrapper;
