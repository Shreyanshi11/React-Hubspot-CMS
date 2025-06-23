import { styled } from 'styled-components';
import { Cta, Icon, logInfo } from '@hubspot/cms-components';

// Styled components
const StyledButton = styled.a``;

const StyledIcon = styled(Icon)``;

// Helper functions
const getButtonClassName = (buttonStyle) => {
  const buttonClassMap = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    tertiary: 'button--tertiary',
    accent: 'button--simple',
  };
  return buttonClassMap[buttonStyle];
};
const getButtonSizeClassName = (buttonSize) => {
  const buttonSizeMap = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };
  return buttonSizeMap[buttonSize];
};

// Main component
export const Button = (props) => {
  // logInfo(props);

  const {
    ariaLabel,
    additionalClassArray,
    rel,
    href,
    target,
    buttonStyle,
    buttonSize,
    children,
    showIcon,
    iconFieldPath,
    iconPosition,
    ctaFieldpath,
    buttonType
  } = props;

  const buttonClassName = getButtonClassName(buttonStyle);
  const buttonSizeName = getButtonSizeClassName(buttonSize);
  const additionalClasses = additionalClassArray ? additionalClassArray.join(' ') : '';

  return (
    <>
     
      {buttonType === 'cta' ? (
        <Cta fieldPath={ctaFieldpath} />
      ) : buttonType === 'button' ? (
        <StyledButton
          $buttonSize={buttonSize}
          className={`button ${buttonClassName} ${additionalClasses} ${buttonSizeName} ${showIcon ? 'button__icon' : ''
            } button--icon-${iconPosition}`}
          target={target}
          href={href}
          rel={rel}
          aria-label={ariaLabel}
        >
          {iconFieldPath && showIcon && (
            <StyledIcon
              purpose="DECORATIVE"
              fieldPath={iconFieldPath}
              $iconPosition={iconPosition}
            />
          )}
          {children || 'Default Button'}
        </StyledButton>
      ) : null}


    </>
  );
};
