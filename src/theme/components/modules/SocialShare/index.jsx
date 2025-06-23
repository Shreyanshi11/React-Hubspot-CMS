import { Icon, logInfo, usePageUrl } from '@hubspot/cms-components';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import { styled } from 'styled-components';
// import { getAlignmentFieldCss } from '../../utils/style-fields.jsx';


// Utility Functions

function generateIconSizeAndPaddingCssVars(iconSizeField) {
    const iconSizing = {
        small: {
            padding: '10px',
            iconSize: '16px',
        },
        medium: {
            padding: '14px',
            iconSize: '24px',
        },
        large: {
            padding: '18px',
            iconSize: '32px',
        },
    };

    const safeSize = iconSizing[iconSizeField] || iconSizing['medium'];

    return {
        '--socialShareIcon__padding': safeSize.padding,
        '--socialShareIcon__size': safeSize.iconSize,
    };
}

function generateIconShapeCssVars(iconShapeField) {
    const iconShapeMap = {
        square: '0px',
    rounded: '6px',
    circle: '50%',
    };

    return {
        '--socialShareIcon__shape': iconShapeMap[iconShapeField],
    };
}

function generateIconGapCssVars(iconGapField) {
    const iconGapMap = {
        small: '12px',
        medium: '24px',
        large: '48px',
    };

    return {
        '--socialShareIcon__gap': iconGapMap[iconGapField],
    };
}

function generateButtonStyles(buttonStyleVariant) {
    const iconStyles = {
        primary: {
            backgroundColor: 'var(--button_primary_bg_color)',
            textColor: 'var(--button_primary_font_color)',
            borderStyle: 'var(--button_primary_border)',
            hoverBackgroundColor: 'var(--button_primary_bg_color_hover)',
            hoverTextColor: 'var(--button_primary_font_hover_color)',
            hoverBorderStyle: 'var(--button_primary_border_hover)',
            activeBackgroundColor: 'var(--button_primary_bg_color_active)',
            activeTextColor: 'var(--button_primary_border_hover)',
            activeBorderStyle: 'var(--button_primary_border_active)',
        },
        secondary: {
            backgroundColor: 'var(--button_secondary_bg_color)',
            textColor: 'var(--button_secondary_font_color)',
            borderStyle: 'var(--button_secondary_border)',
            hoverBackgroundColor: 'var(--button_secondary_bg_color_hover)',
            hoverTextColor: 'var(--button_secondary_font_hover_color)',
            hoverBorderStyle: 'var(--button_secondary_border_hover)',
            activeBackgroundColor: 'var(--button_secondary_bg_color_active)',
            activeTextColor: 'var(--button_secondary_border_hover)',
            activeBorderStyle: 'var(--button_secondary_border_active)',
            
        },
        tertiary: {
            backgroundColor: 'var(--button_tertiary_bg_color)',
            textColor: 'var(--button_tertiary_font_color)',
            borderStyle: 'var(--button_tertiary_border)',
            hoverBackgroundColor: 'var(--button_tertiary_bg_color_hover)',
            hoverTextColor: 'var(--button_tertiary_font_hover_color)',
            hoverBorderStyle: 'var(--button_tertiary_border_hover)',
            activeBackgroundColor: 'var(--button_tertiary_bg_color_active)',
            activeTextColor: 'var(--button_tertiary_border_hover)',
            activeBorderStyle: 'var(--button_tertiary_border_active)',
        },
        accent: {
            backgroundColor: 'var(--button_tertiary_bg_color)',
            textColor: 'var(--button_tertiary_font_color)',
            borderStyle: 'var(--button_tertiary_border)',
            hoverBackgroundColor: 'var(--button_tertiary_bg_color_hover)',
            hoverTextColor: 'var(--button_tertiary_font_hover_color)',
            hoverBorderStyle: 'var(--button_tertiary_border_hover)',
            activeBackgroundColor: 'var(--button_tertiary_bg_color_active)',
            activeTextColor: 'var(--button_tertiary_border_hover)',
            activeBorderStyle: 'var(--button_tertiary_border_active)',
        },
    };
    const safeStyle = iconStyles[buttonStyleVariant] || iconStyles['primary'];

    return {
        '--socialShareIcon__backgroundColor': safeStyle.backgroundColor,
        '--socialShareIcon__color': safeStyle.textColor,
        '--socialShareIcon__borderStyle': safeStyle.borderColor,
        '--socialShareIcon__hover--backgroundColor': safeStyle.hoverBackgroundColor,
        '--socialShareIcon__hover--color': safeStyle.hoverTextColor,
        '--socialShareIcon__hover--borderStyle': safeStyle.hoverBorderColor,
        '--socialShareIcon__active--backgroundColor': safeStyle.activeBackgroundColor,
        '--socialShareIcon__active--color': safeStyle.activeTextColor,
        '--socialShareIcon__active--borderStyle': safeStyle.activeBorderColor,
    };
}



const StyledSocialShare = styled.div `
  display: flex;
  align-items: center;
  ${props => getAlignmentFieldCss(props.$alignment)};
  gap: var(--socialShareIcon__gap);
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--socialShareIcon__shape);
  background-color: var(--socialShareIcon__backgroundColor);
  border: var(--socialShareIcon__borderStyle);

  padding: var(--socialShareIcon__padding);

  svg {
    fill: var(--socialShareIcon__color);
  }

  &:hover {
    background-color: var(--socialShareIcon__hover--backgroundColor);
    border: var(--socialShareIcon__hover--borderStyle);

    svg {
      fill: var(--socialShareIcon__hover--color);
    }
  }

  &:active {
    background-color: var(--socialShareIcon__active--backgroundColor);
    border: var(--socialShareIcon__active--borderStyle);

    svg {
      fill: var(--socialShareIcon__active--color);
    }
  }

  &:focus {
    outline: 2px solid #53acff;
    outline-offset: 2px;
  }
`;

const SocialIcon = styled(Icon)`
  width: var(--socialShareIcon__size);
  height: var(--socialShareIcon__size);
`;


function getPlatformMetaData(socialLink, defaultText) {
    const platformMetaData = {
        twitter: {
            name: 'twitter',
            aria_label: defaultText.twitterLinkAriaLabel,
            base_url: 'https://twitter.com/intent/tweet?url=',
        },
        facebook: {
            name: 'facebook',
            aria_label: defaultText.facebookLinkAriaLabel,
            base_url: 'https://www.facebook.com/sharer/sharer.php?u=',
        },
        linkedin: {
            name: 'linkedin',
            aria_label: defaultText.linkedinLinkAriaLabel,
            base_url: 'https://www.linkedin.com/shareArticle?mini=true&url=',
        },
        pinterest: {
            name: 'pinterest',
            aria_label: defaultText.pinterestLinkAriaLabel,
            base_url: 'https://pinterest.com/pin/create/button/?url=',
        },
        email: {
            name: 'envelope',
            aria_label: defaultText.emailLinkAriaLabel,
            base_url: 'mailto:',
        },
    };

    return platformMetaData[socialLink] || {};
}

export function Component(props) {
    const {
        platforms,
        groupDefaultText,
        groupStyle: { shape, buttonStyleVariant, buttonStyleSize, spaceBetweenIcons, alignment },
    } = props;
    logInfo(props)
    const cssVarsMap = {
        ...generateIconSizeAndPaddingCssVars(buttonStyleSize),
        ...generateIconShapeCssVars(shape),
        ...generateIconGapCssVars(spaceBetweenIcons),
        ...generateButtonStyles(buttonStyleVariant),
    };

    const currentUrl = usePageUrl().href;

    return (
        <StyledComponentsRegistry>
            <StyledSocialShare className="social-share" $alignment={alignment} style={cssVarsMap}>

                {platforms.map(platform => {
                    if (!currentUrl) return null;

                    const platformMetaData = getPlatformMetaData(platform, groupDefaultText);

                    let iconFieldPath = `groupDefaultIcons.${platformMetaData.name}`;
                    return (
                        <SocialLink
                            className="social-share__link"
                            key={platform}
                            href={`${platformMetaData.base_url}${encodeURIComponent(currentUrl)}`}
                            aria-label={platformMetaData.aria_label}
                        >
                            <SocialIcon className="social-share__icon" purpose="DECORATIVE" fieldPath={iconFieldPath} />
                        </SocialLink>
                    );
                })}
            </StyledSocialShare>
        </StyledComponentsRegistry>
    );
};

export { fields } from './fields.jsx';

export const meta = {
    label: 'Social share',
    content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};
