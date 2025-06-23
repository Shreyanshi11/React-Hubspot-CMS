import { useState } from 'react';
import { styled } from 'styled-components';
import ArrowComponent from './ArrowComponent';
import { logInfo } from '@hubspot/cms-components';
// import ArrowComponent from './ArrowComponent.jsx';

const baseZindex = 100;

const StyledMenuItemLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-radius: 8px;
    background-color: #f5f5f5;
  }
`;

const StyledMenuItemLink = styled.a`
  flex-grow: 1;
  padding: 10px;
  display: block;
`;

const StyledMenuArrow = styled.span`
  cursor: pointer;
  font-size: var(--body--large__fontSize);
  display: block;
  margin-inline-start: 8px;
  line-height: 1;
  height: 100%;

  @media (max-width: 768px) {
    padding-inline-end: 16px;
  }
`;

const StyledSubmenu = styled.ul`
  ${(props) =>
    props.$flyouts &&
    `
      position: absolute;
      right: auto;
      bottom: auto;
  `}

  ${(props) =>
    props.$flyouts &&
    props.$menuDepth === 1 &&
    `
      top:  100%;
      left: 0;
  `}
  ${(props) =>
    props.$flyouts &&
    props.$menuDepth > 1 &&
    `
      top: calc(-1 * 12px);
      left: calc(100% + 12px);
  `}

  z-index: ${baseZindex + 10};
`;

const StyledMenuItem = styled.li`
  ${(props) =>
    props.$flyouts &&
    props.$menuDepth > 1 &&
    `
      border-style: solid;
      border-color: white; /* hook up to module settings */
      border-left-width: 10px;
      border-right-width: 10px;
      border-bottom-width: 10px;
      padding: 0;

      &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top-width: 10px;
      }
      &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
  `}
`;

export default function MenuItemComponent(props) {
  const {
    menuData,
    a11yController,
    maxDepth,
    idString,
    flyouts,
    topLevelMenuItemClasses,
    topLevelMenuItemStyles,
    subMenuItemClasses,
    subMenuItemStyles,
    visibleMenuItemsController,
    triggeredMenuItems,
    setTriggeredMenuItems,
    isMobileMenu,
    linkStyleVariant
  } = props;

  // logInfo(props)
  const { visibleMenuItems, setVisibleMenuItems } = visibleMenuItemsController;
  const {
    handleFocus,
    handleBlur,
    menuItemRefs,
    linkRefs,
    keyboardEventCallback,
  } = a11yController;
  const idStringArray = idString.split('-');
  const currentLevel = idStringArray.length;

  const handleMouseEnter = () => {
    if (!visibleMenuItems.includes(idString)) {
      setVisibleMenuItems((currentMenuIdArray) =>
        [...currentMenuIdArray, idString].filter((item) =>
          idString.startsWith(item)
        )
      );
    }
  };

  const handleMouseLeave = () => {
    setVisibleMenuItems((currentMenuIdArray) =>
      currentMenuIdArray.filter((item) => item !== idString)
    );
  };

  function isUnderMaxDepth() {
    return currentLevel < maxDepth;
  }

  const showChildrenUnorderList = (children) => {
    return isUnderMaxDepth() && children.length > 0;
  };

  function getSubmenuClasses() {
    const baseClass = 'menu__submenu';
    const flyoutClass = flyouts ? 'menu__flyout-submenu' : '';
    const mobileClass = isMobileMenu
      ? 'menu__flyout-submenu--mobile'
      : '';

    return `${baseClass} ${flyoutClass} ${mobileClass}`;
  }

  function addFlyoutVisiblity(visibleMenuItems) {
    const displayValue = visibleMenuItems.includes(idString) ? 'block' : 'none';

    return { display: displayValue };
  }

  function addMenuItemClasses(linkStyleVariant) {
    const linkClassName = linkStyleVariant === 'secondary_links' ? 'link--secondary' : 'link--primary';

    return currentLevel === 1 ? `${linkClassName} ${topLevelMenuItemClasses}` : `${linkClassName} ${subMenuItemClasses}`;
  }
  function addSubMenuItemStyles() {
    return currentLevel === 1 ? topLevelMenuItemStyles : subMenuItemStyles;
  }

  function handleTriggeredMenuItem(idString) {
    setTriggeredMenuItems([...triggeredMenuItems, idString]);
  }

  function getMenuItemClass() {
    if (menuData.children.length) {
      const menuItemClass = 'menu--has-children';

      if (isMobileMenu && triggeredMenuItems.includes(idString)) {
        return `${menuItemClass} menu__menu-item--triggered`;
      }

      return menuItemClass;
    }

    return '';
  }

  const showNestedMenuIcon =
    (flyouts || isMobileMenu) &&
    menuData.children.length > 0 &&
    currentLevel != maxDepth;

  return (
    <StyledMenuItem
      $menuDepth={currentLevel}
      $flyouts={flyouts}
      className={getMenuItemClass()}
      data-menuitem-depth={currentLevel}
      onFocus={(event) => handleFocus(event, idString)}
      onBlur={handleBlur}
      onKeyDown={(event) => keyboardEventCallback(event, idString)}
      tabIndex={-1}
      ref={(el) => (menuItemRefs.current[idString] = el)}
      role="menuitem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledMenuItemLinkContainer className="menu__menu-item-link-container">
        <StyledMenuItemLink
          style={addSubMenuItemStyles()}
          className={addMenuItemClasses(linkStyleVariant)}
          href={menuData.url}
          ref={(el) => (linkRefs.current[idString] = el)}
          tabIndex={-1}
          aria-expanded={
            menuData.children.length > 0
              ? visibleMenuItems.includes(idString)
              : undefined
          }
        >
          {menuData.label}
        </StyledMenuItemLink>
        {showNestedMenuIcon && (
          <StyledMenuArrow
            className="menu__arrow"
            onClick={() => handleTriggeredMenuItem(idString)}
          >
            <ArrowComponent />
          </StyledMenuArrow>
        )}
      </StyledMenuItemLinkContainer>
      {showChildrenUnorderList(menuData.children) && (
        <StyledSubmenu
          $menuDepth={currentLevel}
          $flyouts={flyouts}
          className={getSubmenuClasses()}
          style={flyouts ? addFlyoutVisiblity(visibleMenuItems) : undefined}
        >
          {menuData.children.map((child, childIndex) => {
            const joinedIdString = `${idString}-${childIndex}`;
            return (
              <MenuItemComponent
                key={joinedIdString}
                menuData={child}
                idString={joinedIdString}
                a11yController={a11yController}
                maxDepth={maxDepth}
                flyouts={flyouts}
                subMenuItemClasses={subMenuItemClasses}
                subMenuItemStyles={subMenuItemStyles}
                topLevelMenuItemClasses={topLevelMenuItemClasses}
                topLevelMenuItemStyles={topLevelMenuItemStyles}
                keyboardEventCallback={keyboardEventCallback}
                visibleMenuItemsController={visibleMenuItemsController}
                triggeredMenuItems={triggeredMenuItems}
                setTriggeredMenuItems={setTriggeredMenuItems}
                isMobileMenu={isMobileMenu}
                linkStyleVariant={linkStyleVariant}
              />
            );
          })}
        </StyledSubmenu>
      )}
    </StyledMenuItem>
  );
}
