import React,{ useState } from 'react';
import Styles from "../modules/HorizontalTimeline/HorizontalTimeline.module.css";
import HeadingComponent from '../components/HeadingComponent/HeadingComponent';
import { RichText } from '@hubspot/cms-components';
import { Timeline, TimelineItem } from 'react-beautiful-timeline';
import 'react-beautiful-timeline/dist/style.css';





export default function HorizontalTimeline({ groupContent }) {



return (
<>
   <Timeline type="horizontal" animation={true}>
  {groupContent.map((item, idx) => (
    <TimelineItem
      key={idx}
      place={idx % 2 === 0 ? 'normal' : 'opposite'}
      dotColor="#0f62fe"
      
    >
      <div style={{ padding: '10px' }}>
        <HeadingComponent headingLevel={item.headingAndTextHeadingLevel} headingStyleVariant={item.headingStyleVariant} heading={item.headingAndTextHeading} />
        <RichText fieldPath={`groupContent[${idx}].description`}></RichText>
      </div>
    </TimelineItem>
  ))}
</Timeline>
 
</>
);
}
