import { styled } from 'styled-components';
import { useSharedIslandState } from '@hubspot/cms-components';
import ArrowComponent from '../../../components/MenuComponent/ArrowComponent';

const LogoImage = styled.img`
  max-width: 250px;
  max-height: 75px;
  height: auto;
  width: 100%;
  display: block;
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};

  @media (max-width:991px){
  max-width: 170px;
  }
`;

const CompanyNameFallback = styled.span`
  display: block;
  font-size: 1.3rem;
  max-width: min(250px, 45vw);
  white-space: break-spaces;
  overflow-wrap: anywhere;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StyledBackButton = styled.button`
  appearance: none;
  cursor: pointer;
  z-index: 50;
  border: none;
  background-color: transparent;
  color: var(--header_primary_nav_font_color);
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
      background: transparent;
    border: none;
    padding: 0;

  &:hover {
        background: transparent;
    border: none;
    padding: 0;
    color: var(--header_primary_nav_font_hover_color);

    svg path {
      fill: currentColor;
    }
  }

  svg {
    margin-inline-end: 8px;
    transform: rotate(180deg);

    path {
      fill: currentColor;
    }
  }
`;

const LogoLink = styled.a`
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'initial')};
`;

const LogoLinkScreenReader = styled.span`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default function MobileLogoBackButton(props) {
  const {
    companyName,
    logoField: { src: logoSrc, alt: logoAlt, width: logoWidth, height: logoHeight, suppress_company_name },
    logoLink,
    logoLinkAriaText,
  } = props;

  const [triggeredMenuItems, setTriggeredMenuItems] = useSharedIslandState();
  const showBackButton = triggeredMenuItems.length > 0;

  const goBackOneLevel = () => {
    setTriggeredMenuItems(triggeredMenuItems.slice(0, -1));
  };

  return (
    <div>
      {showBackButton && (
        <StyledBackButton onClick={goBackOneLevel}>
          <ArrowComponent />
          Back
        </StyledBackButton>
      )}
      {logoSrc && (
        <LogoLink href={logoLink || '#'} $isHidden={showBackButton}>
          <LogoImage $isHidden={showBackButton} src={logoSrc} alt={logoAlt} loading="eager" width={logoWidth} height={logoHeight} />
          <LogoLinkScreenReader $isHidden={showBackButton}>{logoLinkAriaText}</LogoLinkScreenReader>
        </LogoLink>
      )}
      {!logoSrc && !suppress_company_name && <CompanyNameFallback className="header__company-name">{companyName}</CompanyNameFallback>}
    </div>
  );
}
