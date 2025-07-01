import React,{ useState } from 'react';
import Styles from "../modules/HorizontalTimeline/HorizontalTimeline.module.css";

import HeadingComponent from '../components/HeadingComponent/HeadingComponent';
import { RichText } from '@hubspot/cms-components';
import {
  BeautifulTimeline as Timeline,
  BeautifulTimelineItem as TimelineItem,
} from 'react-beautiful-timeline';
import 'react-beautiful-timeline/dist/style.css';





export default function HorizontalTimeline({ groupContent }) {



return (
<>
   <Timeline responsiveWidth={991}
        type="horizontal"
        animation={true}
        passiveLineStyle={{
          background:
            'linear-gradient(90deg, rgba(226, 226, 226, 0.04) -12.5%, #DADADA 49.02%,  rgba(226, 226, 226, 0.04) 105.63%)',
        }}
        activeLineStyle={{
          background:
            'linear-gradient(90deg, rgba(131, 164, 249, 0.04) -12.5%, #A07FFD 49.02%, rgba(131, 164, 249, 0.04) 105.63%)',
        }}>
  {groupContent.map((item, idx) => (
    <TimelineItem
      key={idx}
      place={idx % 2 === 0 ? 'opposite' : 'normal'}
      dotColor="#0f62fe"
      
    >
      <div className={Styles.card_inner}>
        <HeadingComponent headingLevel={item.headingAndTextHeadingLevel} headingStyleVariant={item.headingStyleVariant} heading={item.headingAndTextHeading} />
        <RichText fieldPath={`groupContent[${idx}].description`}></RichText>
      </div>
    </TimelineItem>
  ))}
</Timeline>
 
</>
);
}
