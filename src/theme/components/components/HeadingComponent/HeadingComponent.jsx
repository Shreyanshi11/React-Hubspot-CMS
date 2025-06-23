import { logInfo } from "@hubspot/cms-components";
import SanitizedContent from "../SanitizeHTML";


// Maps the heading class based on the headingStyle option
const headingClasses = {
  display_1: 'display_1',
  display_2: 'display_2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

// Sets inline styles used for the heading


// Component
function HeadingComponent(props) {
  // logInfo(props);
  const { headingLevel: HeadingLevel, heading, headingStyleVariant, headingStyleColor } = props;

  const headingClass = headingStyleVariant ? headingClasses[headingStyleVariant] : '';

  return (
   <>
     <HeadingLevel className={`${headingClass}`} style={{color: headingStyleColor?.rgba}}>
      <SanitizedContent content={heading} />
    </HeadingLevel>
   </>
  );
}

export default HeadingComponent;
