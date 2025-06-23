import { styled } from 'styled-components';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import { RichText } from '@hubspot/cms-components';
// import richTextIconSvg from './assets/rich-text.svg';
import { sectionColorsMap } from '../../utils/section-color-map.jsx';

const StyledRichText = styled(RichText)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  span,
  div {
    color: var(--richText__textColor);
  }

  a:not(.button) {
    color: var(--richText__linkColor);
    text-decoration: var(--richText__textDecoration);
    text-decoration-color: var(--richText__textDecorationColor);
  }

  a:not(.button):hover,
  a:not(.button):focus {
    color: var(--richText__linkHoverColor);
    text-decoration: var(--richText__linkHoverTextDecoration);
    text-decoration-color: var(--richText__linkHoverTextDecorationColor);
  }
`;

// Function to generate CSS variables for colors
function generateColorCssVars(sectionVariantField) {
  return {
    '--richText__textColor': sectionColorsMap[sectionVariantField].textColor,
    '--richText__accentColor': sectionColorsMap[sectionVariantField].accentColor,
    '--richText__linkColor': sectionColorsMap[sectionVariantField].linkColor,
    '--richText__textDecoration': sectionColorsMap[sectionVariantField].textDecoration,
    '--richText__textDecorationColor': sectionColorsMap[sectionVariantField].textDecorationColor,
    '--richText__linkHoverColor': sectionColorsMap[sectionVariantField].linkHoverColor,
    '--richText__linkHoverTextDecoration': sectionColorsMap[sectionVariantField].linkHoverTextDecoration,
    '--richText__linkHoverTextDecorationColor': sectionColorsMap[sectionVariantField].linkHoverTextDecorationColor,
    '--blockquote__textColor': sectionColorsMap[sectionVariantField].blockquoteTextColor,
    '--blockquote__backgroundColor': sectionColorsMap[sectionVariantField].blockquoteBackgroundColor,
    '--blockquote__accentColor': sectionColorsMap[sectionVariantField].blockquoteAccentColor,
  };
}

export const Component = (props) => {
  const {
    groupStyle: { sectionStyleVariant },
  } = props;

  const cssVarsMap = {
    ...generateColorCssVars(sectionStyleVariant),
  };

  return (
    <StyledComponentsRegistry>
      <StyledRichText className="hs-rich-text" fieldPath="richTextContentHTML" style={cssVarsMap} />
    </StyledComponentsRegistry>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Rich text',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};

