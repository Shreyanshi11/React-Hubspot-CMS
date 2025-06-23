import MenuComponent from '../../components/MenuComponent/index.jsx?island';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import { styled } from 'styled-components';
import MobileMenuIsland from './islands/MobileMenuIsland.jsx?island';
import MobileLogoBackButton from './islands/MobileLogoBackButton.jsx?island';
import StyledIsland from '../../components/StyledComponentsRegistry/StyledIsland.jsx';
import { logInfo, SharedIslandState, useLanguageVariants } from '@hubspot/cms-components';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';
import "./SiteHeader.css";

const MOBILE_BREAKPOINT_NO_LANG_SWITCHER = '1100px';
const MOBILE_BREAKPOINT_WITH_LANG_SWITCHER = '1215px';

const SiteHeader = styled.div`
   width: 100%;
  height: auto;
  background-color: var(--header_bg_color);
  position: relative;
  z-index: 10;
  padding-block: 24px;
  border-bottom: var(--header_border);

  
`;

const SiteHeaderContainer = styled.div`
  max-width: var(--container_width);
      padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const MainNav = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .menu {
    display: flex; 
    align-items: center; 
    margin: 0px;    
    list-style: none;
    padding: 0;
    margin: 0;

    .menu__submenu {
      list-style: none;
      padding: 0;
      margin: 0;
      min-width: 210px;
    }
      .menu--has-children {
          position: relative;
      }
      gap: 12px;

      @media (min-width: 800px) {
        gap: 16px;
      }

      @media (min-width: 900px) {
        gap: 32px;
      }
    }

  li {
    border-color: ${({ $navBarBackgroundColor }) => $navBarBackgroundColor};
    

    a {
      font-family: var(--header_primary_nav_font);
      font-weight: var(--header_primary_nav_font_weight);
      color: var(--header_primary_nav_font_color);
      font-size: var(--header_primary_nav_font_size);
      text-transform: var(--header_primary_nav_text_transform);
      padding: 8px 24px 8px 12px;
      text-decoration: none;
    }

    a:hover {
      font-family: var(--header_primary_nav_font_hover);
      font-weight: var(--header_primary_nav_font_hover_weight);
      color: var(--header_primary_nav_font_hover_color);
      text-decoration: none;
    }
    a:focus {
      font-family: var(--header_primary_nav_font_active);
      font-weight: var(--header_primary_nav_font_active_weight);
      color: var(--header_primary_nav_font_active_color);
    }

    &[data-menuitem-depth='2'] {
      .menu__arrow {
        right: 8px;
        display: inline-flex;
        align-items: center;
      }
    }

    .menu__arrow {
          pointer-events: none;
        position: relative;
        right: 12px;
        margin: 0;
        display: inline-flex;
        transform: translateY(0%) rotate(90deg);

      .menu__arrow-path {
        fill: ${({ $menuTextColor }) => $menuTextColor};
      }
    }
  }

  ul {
    background-color: ${({ $navBarBackgroundColor }) => $navBarBackgroundColor};
    border-color: ${({ $menuAccentColor }) => $menuAccentColor};
  }

  // All submenus and hover element
  .menu__menu-item-link-container {
    background-color: ${({ $navBarBackgroundColor }) => $navBarBackgroundColor};
  }

  [data-menuitem-depth='1'] {
    > .menu__menu-item-link-container:hover {
      background-color: ${({ $navBarBackgroundColor }) => $navBarBackgroundColor};
    }

    li .menu__menu-item-link-container:hover {
      background-color: ${({ $menuAccentColor }) => $menuAccentColor};
    }

    > ul {
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05));
    }

    > .menu__menu-item-link-container {
      > .menu__arrow {
        
      }
    }

    // Adjust the behavior of the right most flyouts
    @media (max-width: 1100px) {
      &:last-of-type {
        > ul {
          right: 0;
          left: initial;

          ul {
            left: initial;
            right: calc(100% + 12px);
          }
        }
      }
    }
  }

  @media (max-width: ${props => props.$mobileBreakpoint}) {
    display: none;
  }


  
`;

const ButtonContainer = styled.div`
  display: none;

  @media (min-width: 460px) {
    margin-left: auto;
    flex: 0 0 auto;
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
display: none;
  @media (max-width: ${props => props.$mobileBreakpoint}) {
    display: block;
  }
`;

const LogoButtonContainer = styled.div`
  flex: 0 0 auto;
  margin-right: auto;
`;

export const Component = (props) => {
  const {
    hublData: {
      navigation: { children: navDataArray = [] },
      companyName,
      defaultLogo,
      logoLink,
    },
    groupLogo: { logo: logoField },
    defaultContent: { logoLinkAriaText, languageSwitcherSelectText },
    groupButton,
    styles,
  } = props;
// logInfo(props)
  const {
    showButton,
    buttonContentText: buttonText,
    buttonContentLink: buttonLink,
    buttonContentShowIcon: showIcon,
    buttonContentIconPosition: iconPosition,
    buttonContentType
  } = groupButton;

  defaultLogo.suppress_company_name = logoField.suppress_company_name;
  const logoToUse = logoField.override_inherited_src ? logoField : defaultLogo;

  const {
    groupMenu: {
      menuAlignment,
      menuBackgroundColor: { color: menuBackgroundColor } = { color: '#ffffff' },
      menuAccentColor: { color: menuAccentColor } = { color: '#D3DAE4' },
      menuTextColor: { color: menuTextColor } = { color: '#09152B' },
      menuTextHoverColor: { color: menuTextHoverColor } = { color: '#F7F9FC' },
    },
    groupButton: { buttonStyleVariant, buttonStyleSize },
  } = styles;

  const translations = useLanguageVariants();
  const showLanguageSwitcher = translations?.length > 1;
  const langSwitcherIconFieldPath = 'globe_icon';

  const mobileBreakpoint = showLanguageSwitcher ? MOBILE_BREAKPOINT_WITH_LANG_SWITCHER : MOBILE_BREAKPOINT_NO_LANG_SWITCHER;


  // logInfo(props)
  return (
    <StyledComponentsRegistry>
      <SiteHeader className="site-header" $navBarBackgroundColor={menuBackgroundColor} $mobileBreakpoint={mobileBreakpoint}>
        <SharedIslandState value={[]}>
          <SiteHeaderContainer>
            <LogoButtonContainer>
              <StyledIsland
                module={MobileLogoBackButton}
                logoField={logoToUse}
                companyName={companyName}
                logoLinkAriaText={logoLinkAriaText}
                logoLink={logoLink}
              />
            </LogoButtonContainer>
            <MainNav
              $navBarBackgroundColor={menuBackgroundColor}
              $menuAccentColor={menuAccentColor}
              $menuTextColor={menuTextColor}
              $menuTextHoverColor={menuTextHoverColor}
              $mobileBreakpoint={mobileBreakpoint}
              className="header__main-nav"
            >
              <StyledIsland
                module={MenuComponent}
                menuDataArray={navDataArray}
                flow="horizontal"
                menuAlignment={menuAlignment}
                maxDepth={3}
                navigationAriaLabel="Main navigation"
                flyouts={true}
                wrapperStyle={{ flex: '1 0 100%' }}
                additionalClassArray={['header__main-nav-menu']}

              />
            </MainNav>

            {/* showLanguageSwitcher */}
            
            {buttonContentType && (
              <ButtonContainer className="header__button-container">
                <Button
                  href={getLinkFieldHref(buttonLink)}
                  buttonStyle={buttonStyleVariant}
                  buttonSize={buttonStyleSize}
                  target={getLinkFieldTarget(buttonLink)}
                  rel={getLinkFieldRel(buttonLink)}
                  showIcon={showIcon}
                  iconFieldPath="groupButton.buttonContentIcon"
                  iconPosition={iconPosition}
                  ctaFieldpath={`groupButton.ctaField`}
                  buttonType={buttonContentType}
                  additionalClassArray={['header__button']}
                >
                  {buttonText}
                </Button>
              </ButtonContainer>
            )}

            <MobileMenuContainer className="header__mobile-menu-container" $mobileBreakpoint={mobileBreakpoint}>
              <StyledIsland
                module={MobileMenuIsland}
                menuDataArray={navDataArray}
                flow="horizontal"
                maxDepth={3}
                menuAlignment={menuAlignment}
                navigationAriaLabel="Main mobile navigation"
                flyouts={true}
                menuBackgroundColor={menuBackgroundColor}
                menuAccentColor={menuAccentColor}
                menuTextColor={menuTextColor}
                menuTextHoverColor={menuTextHoverColor}
                buttonStyleVariant={buttonStyleVariant}
                buttonStyleSize={buttonStyleSize}
                groupButton={groupButton}
                hublData={props.hublData}
                myAvailableTranslations={translations}
                languageSwitcherSelectText={languageSwitcherSelectText}
                langSwitcherIconFieldPath={langSwitcherIconFieldPath}
              />
            </MobileMenuContainer>
          </SiteHeaderContainer>
        </SharedIslandState>
      </SiteHeader>
    </StyledComponentsRegistry>
  );
};

export { fields } from './fields.jsx';

export const hublDataTemplate = `
  {% set hublData = {
      "navigation": menu(module.groupNavigation.menu, "site_root"),
      "companyName": branding_company_name,
      "logoLink": brand_settings.primaryLogo.link,
      "defaultLogo": {
        "src": brand_settings.primaryLogo.src,
        "alt": brand_settings.primaryLogo.alt,
        "width": brand_settings.primaryLogo.width,
        "height": brand_settings.primaryLogo.height
      }
    }
  %}
`;

export const meta = {
  label: 'Site header',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};
