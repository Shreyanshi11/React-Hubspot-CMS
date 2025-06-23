import { styled } from 'styled-components';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget, setAriaLabel } from '../../utils/content-fields.jsx';
import { logInfo } from '@hubspot/cms-components';
import { getAlignmentFieldCss } from '../../utils/style-fields.jsx';



// Functions to pull in corresponding CSS variables on component based on field values


function generateGapCssVars(gapField) {
  const gapMap = {
    small: 'var(--spacing--8, 8px)',
    medium: 'var(--spacing--16, 16px)',
    large: 'var(--spacing--24, 24px)',
  };

  return { '--buttons__gap': gapMap[gapField] };
}


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--buttons__gap);
  justify-content: ${props => getAlignmentFieldCss(props.$alignment).justifyContent};
  // When the container around the button gets smaller we want buttons to stack
  @container (max-width: 400px) {
    flex-direction: column;
  
  }
`;

const ButtonWrapper = styled.div`
  container-type: inline-size;
`;

export const Component = (props) => {
  const {
    groupButtons,
    groupStyle: { alignment, gap },
    groupAriaLabels,
  } = props;
  logInfo(props)
  const cssVarsMap = {
    ...generateGapCssVars(gap),
  };
// logInfo(props);
  return (
   
      <ButtonWrapper>
        <ButtonContainer className="button-container" $alignment={alignment} style={cssVarsMap}>
          {groupButtons.map((button, index) => (
            <Button
              key={index}
              buttonStyle={button.buttonStyleVariant}
              buttonSize={button.buttonStyleSize}
              href={getLinkFieldHref(button.buttonContentLink)}
              rel={getLinkFieldRel(button.buttonContentLink)}
              ariaLabel={setAriaLabel(button.buttonContentLink.url?.type)}
              target={getLinkFieldTarget(button.buttonContentLink)}
              showIcon={button.buttonContentShowIcon}
              iconFieldPath={`groupButtons[${index}].buttonContentIcon`}
              iconPosition={button.buttonContentIconPosition}
              additionalClassArray={['button-container__button']}
              ctaFieldpath={`groupButtons[${index}].ctaField`}
              buttonType={button.buttonContentType}
            >
              {button.buttonContentText}
            </Button>
          ))}
        </ButtonContainer>
      </ButtonWrapper>
   
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Button',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
  
};
