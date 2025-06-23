import React from 'react';
import MenuComponent from '../../components/MenuComponent/index.jsx?island';
import { Island, logInfo } from '@hubspot/cms-components';


// import MenuSvg from './assets/menu.svg';

function generateSpacingCssVars(spacingField) {
  const spacingMap = {
    none: '0',
    small: 'var(--spacing--16, 16px)',
    medium: 'var(--spacing--32, 32px)',
    large: 'var(--spacing--56, 56px)',
  };

  return { '--menu--topLevel__gap': spacingMap[spacingField] };
}

function generatePaddingCssVars(spacingField) {
  const verticalSpacingMap = {
    none: '0',
    small: 'var(--spacing--4, 4px)',
    medium: 'var(--spacing--12, 12px)',
    large: 'var(--spacing--16, 16px)',
  };
  const horizontalSpacingMap = {
    none: '0',
    small: 'var(--spacing--4, 4px)',
    medium: 'var(--spacing--8, 8px)',
    large: 'var(--spacing--16, 16px)',
  };

  return {
    '--menuItem__paddingVertical': verticalSpacingMap[spacingField],
    '--menuItem__paddingHorizontal':
      horizontalSpacingMap[spacingField],
  };
}

function generateMenuItemVerticalGapCssVars(menuItemVerticalGap) {
  const verticalSpacingMap = {
    none: '0',
    small: 'var(--spacing--8, 8px)',
    medium: 'var(--spacing--16, 16px)',
    large: 'var(--spacing--24, 24px)',
  };

  return {
    '--menuItem__gap': verticalSpacingMap[menuItemVerticalGap],
  };
}

export const Component = (props) => {
  const {
    hublData,
    menuName = '',
    maxDepth,
    styles,
  } = props;

  const navDataArray = hublData?.navigation?.children ?? [];


  const {
    groupMenu: {
      menuColumnGap,
      menuAlignment,
    },
    groupMenuItems: {
      menuItemPadding,
      menuItemVerticalGap,
    },
    // groupLink: {
    //   linkStyleVariant
    // }
  } = styles;

  const cssVarsMap = {
    ...generatePaddingCssVars(menuItemPadding),
    ...generateSpacingCssVars(menuColumnGap),
    ...generateMenuItemVerticalGapCssVars(menuItemVerticalGap),
  };
  // logInfo(props)
  return (
    <div style={cssVarsMap} className="horizontal-menu">
      <Island
        module={MenuComponent}
        menuDataArray={navDataArray}
        flow='horizontal'
        maxDepth={maxDepth}
        menuAlignment={menuAlignment}
        navigationAriaLabel={menuName}
        hydrateOn="load"
        // linkStyleVariant={linkStyleVariant}
        additionalClassArray={['horizontal-menu__menu']}
      />
    </div>
  );
};

export { fields } from './fields.jsx';

export const hublDataTemplate = `
  {% set hublData = {
      "navigation" : menu(module.menu, "site_root")
    }
  %}
`;

export const meta = {
  label: 'Horizontal menu',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE']
};

