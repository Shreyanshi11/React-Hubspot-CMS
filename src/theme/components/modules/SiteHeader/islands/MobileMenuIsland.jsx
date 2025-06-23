import React, { useEffect, useRef, useState } from 'react';
import MenuComponent from '../../../components/MenuComponent/index.jsx';
import { useSharedIslandState } from '@hubspot/cms-components';
import { Button } from '../../../components/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref } from '../../../utils/content-fields.jsx';
import {styled} from 'styled-components';



const baseZindex = 1000;
const MenuContainer = styled.div`
  position: absolute;
  background-color: var(--header_bg_color);
  background-color: white; // Change to actual BG color
  top: 100%;
  left: ${({ $isMenuSliding }) => ($isMenuSliding ? '0' : '100%')};
  margin-top: 0;
  width: 100%;
  height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
  height: ${({ $headerHeight }) => `calc(100dvh - ${$headerHeight}px)`};
  z-index: ${baseZindex};
  transition: all 0.3s ease;
  display: ${({ $showMenu }) => ($showMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  > nav {
    overflow: auto;
    background-color: ${({ $menuBackgroundColor }) => $menuBackgroundColor};
  }

  ul {
    height: ${({ $headerHeight, $mobileButtonContainerHeight, $headerMobileLanguageSwitcherHeight }) =>`calc(100vh - ${$headerHeight}px - ${$mobileButtonContainerHeight}px - ${$headerMobileLanguageSwitcherHeight}px)`};
    width: 100%;
    background-color: ${({ $menuBackgroundColor }) => $menuBackgroundColor};
        list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu--mobile,
  .menu__flyout-submenu--mobile {
    padding: 10px 32px;
  }

  .menu {
    gap: 0;
    flex: 0 0 100%;
    margin-bottom: 0;
    align-items: flex-start;
    justify-content: flex-start;

    &:after {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--header_border);
    }

    li {
      position: initial;
      width: 100%;

      a {
          font-family: var(--header_primary_nav_font);
          font-weight: var(--header_primary_nav_font_weight);
          color: var(--header_primary_nav_font_color);
          font-size: var(--header_primary_nav_font_size);
          text-transform: var(--header_primary_nav_text_transform);

        &:hover {
          font-family: var(--header_primary_nav_font_hover);
          font-weight: var(--header_primary_nav_font_hover_weight);
          color: var(--header_primary_nav_font_hover_color);
          text-decoration: none;
        }
        &:active{
          font-family: var(--header_primary_nav_font_active);
          font-weight: var(--header_primary_nav_font_active_weight);
          color: var(--header_primary_nav_font_active_color);
        }
      }

      .menu__arrow-path {
        fill: currentColor;
      }
    }

    .menu__menu-item-link-container:hover {
      background-color: ${({ $menuAccentColor }) => $menuAccentColor};
    }

    li[data-menuitem-depth='1'] ul {
      position: absolute;
      left: 100%;
      top: 0;
      transition: left 0.3s ease;
      width: 100%;
      margin-bottom: 0;
      background-color: ${({ $menuBackgroundColor }) => $menuBackgroundColor};
      z-index: ${baseZindex + 10};
    }

    .menu--has-children.menu__menu-item--triggered > ul {
      left: 0;
    }
  }
`;

const MobileSlideoutButtonContainer = styled.div`
  @media (min-width: 460px) {
    display: none;
  }

  margin-bottom: ${({ $headerMobileLanguageSwitcherHeight }) => $headerMobileLanguageSwitcherHeight}px;
  display: block;
  padding: 24px;
  width: 100%;
  margin-top: 0;
  z-index: ${baseZindex + 20};
  background-color: ${({ $menuBackgroundColor }) => $menuBackgroundColor};

  .site-header__mobile-button {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;

  div {
    width: 100%;
    height: 4px;
    background-color: ${({ $menuTextColor }) => $menuTextColor};
    transition: all 0.3s ease;
  }

  &.active div:nth-child(1) {
    transform: rotate(45deg) translate(7px, 5px);
  }

  &.active div:nth-child(2) {
    opacity: 0;
  }

  &.active div:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -5px);
  }
`;


export default function MobileMenuIsland(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuSliding, setIsMenuSliding] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [triggeredMenuItems, setTriggeredMenuItems] = useSharedIslandState();
  const [headerHeight, setHeaderHeight] = useState(0);
    const [headerMobileLanguageSwitcherHeight, setHeaderMobileLanguageSwitcherHeight] = useState(0);
  const [mobileButtonContainerHeight, setMobileButtonContainerHeight] = useState(0);
  const targetAnchorRef = useRef(null);

  const {
    flow,
    flyouts,
    menuBackgroundColor,
    menuAccentColor,
    menuTextColor,
    menuTextHoverColor,
    buttonStyleVariant,
    buttonStyleSize,
    groupButton,
    languageSwitcherSelectText,
    langSwitcherIconFieldPath,
    ...rest
  } = props;

  const {
    showButton,
    buttonContentText: buttonText,
    buttonContentLink: buttonLink,
    buttonContentShowIcon: showIcon,
    buttonContentIconPosition: iconPosition,
    buttonContentType,

  } = groupButton || {};

  useEffect(() => {
    if (isAnimating) {
      setShowMenu(true);
      // This is to prevent scrolling when the menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else if (!isAnimating && showMenu) {
      setIsClosing(true);
      setIsMenuSliding(false);
      // Restore scrolling and position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isAnimating]);

  // Handles smooth scrolling to an anchor link when mobile menu is closed
  useEffect(() => {
    if (!isAnimating && targetAnchorRef.current) {
      // Menu is closed, now we can safely scroll
      const element = document.querySelector(targetAnchorRef.current);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      targetAnchorRef.current = null; // Reset the ref after scrolling
    }
  }, [isAnimating]);

  useEffect(() => {
    if (showMenu && !isClosing) {
      setTimeout(() => {
        setIsMenuSliding(true);
      }, 100); // This delay just gives display change time to take effeect so animation works
    } else if (isClosing) {
      setTimeout(() => {
        setShowMenu(false);
        setIsClosing(false);
      }, 300); // Adjust this delay to match the transition duration
    }
  }, [showMenu, isClosing]);

  useEffect(() => {
    const header = document.querySelector('.site-header');

    if (!header) return;

    const updateHeight = () => {
      setHeaderHeight(header.offsetHeight);
    };

    const observer = new MutationObserver(updateHeight);
    observer.observe(header, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // Initial height set
    updateHeight();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const headerMobileLanguageSwitcherButton = document.querySelector('.header__language-switcher-button');

    if (!headerMobileLanguageSwitcherButton) return;

    const updateHeight = () => {
      const height = headerMobileLanguageSwitcherButton.offsetHeight;
      setHeaderMobileLanguageSwitcherHeight(height);
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerMobileLanguageSwitcherButton);

    updateHeight();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const buttonContainer = document.querySelector('.header__mobile-button-container');

    // If the button container doesn't exist, set the height to 0
    if (!buttonContainer) {
      setMobileButtonContainerHeight(0);
      return;
    }

    const updateHeight = (height) => {
      setMobileButtonContainerHeight(height);
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const targetElement = entry.target;
        updateHeight(targetElement.offsetHeight);
      }
    });

    resizeObserver.observe(buttonContainer);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleOpenCloseMenu = () => {
    setTriggeredMenuItems([]);
    setIsAnimating(!isAnimating);
  };

  const topLevelMenuItemStyles = {
    '--menu--topLevel__gap': '0',
  };

  const handleMobileAnchorClick = (clickedMenuItemAnchor) => {
    // Store the anchor reference for later use
    targetAnchorRef.current = clickedMenuItemAnchor;
    // Close the menu
    handleOpenCloseMenu();
  };

  return (
    <div className="site-header__mobile-menu">
       <HamburgerMenu
        className={`site-header__hamburger-menu ${showMenu ? 'active' : ''}`}
        tab-index="1"
        onClick={handleOpenCloseMenu}
        $menuTextColor={menuTextColor}
      >
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      <MenuContainer
        $showMenu={showMenu}
        $isMenuSliding={isMenuSliding}
        $headerHeight={headerHeight}
        $mobileButtonContainerHeight={mobileButtonContainerHeight}
        $headerMobileLanguageSwitcherHeight={headerMobileLanguageSwitcherHeight}
        $menuAccentColor={menuAccentColor}
        $menuBackgroundColor={menuBackgroundColor}
        $menuTextColor={menuTextColor}
        className="site-header__menu-container"
      >
        <MenuComponent
          {...rest}
          flow="vertical"
          flyouts={false}
          isMobileMenu={true}
          triggeredMenuItems={triggeredMenuItems}
          setTriggeredMenuItems={setTriggeredMenuItems}
          topLevelMenuItemStyles={topLevelMenuItemStyles}
          mobileAnchorClickCallback={handleMobileAnchorClick}
          additionalClassArray={['site-header__menu']}
        />
        {buttonContentType && (
          <MobileSlideoutButtonContainer
            className="header__mobile-button-container"
            $menuBackgroundColor={menuBackgroundColor}
            $headerMobileLanguageSwitcherHeight={headerMobileLanguageSwitcherHeight}
          >
            <Button
              href={getLinkFieldHref(buttonLink)}
              buttonStyle={buttonStyleVariant}
              buttonSize={buttonStyleSize}
              additionalClassArray={['mobile-slideout__button']}
              openInNewTab={buttonLink.open_in_new_tab}
              showIcon={showIcon}
              iconFieldPath="groupButton.buttonContentIcon"
              iconPosition={iconPosition}
              ctaFieldpath={`groupButton.ctaField`}
              buttonType={buttonContentType}
            >
              {buttonText}
            </Button>
          </MobileSlideoutButtonContainer>
        )}
        {/* language module place */}
         
      </MenuContainer>
    </div>
  );
}
