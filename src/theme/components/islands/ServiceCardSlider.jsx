import React,{ useState } from 'react';
import Styles from '../modules/ServiceCardSlider/ServiceCard.module.css';
import $ from 'jquery';
import 'jquery-match-height';
import HeadingComponent from '../components/HeadingComponent/HeadingComponent';
import RenderImage from '../components/ImageComponent/imageRenderer.jsx';
import { logInfo, RichText } from '@hubspot/cms-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ServiceCard({ groupContent }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    afterChange: index => setCurrentSlide(index),
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        }
    }
    ]
};

return (
    <>
        <Slider {...settings}>
            {groupContent.map((item, index) => (
                <div key={index} className={Styles.logo_card}>
                <div className={`${Styles.logo_card_inner} active-border`}>
                    <div className={Styles.image_block}>
                      <RenderImage imageField={item.image} />
                    </div>
                    <div className={Styles.content_block}>
                        <div className={Styles.heading_block}>
                           <HeadingComponent headingLevel={item.headingAndTextHeadingLevel} headingStyleVariant={item.headingStyleVariant} heading={item.headingAndTextHeading} />
                        </div>
                        <div className='description_container'>
                        <RichText fieldPath={`groupContent[${index}].description`}></RichText>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </Slider>
        
        <div className={Styles.slider_progress_wrapper}>
    <span className={Styles.slide_index}>
      {String(currentSlide + 1).padStart(2, '0')}
    </span>
    <div className={Styles.progress_bar}>
      <div
        className={Styles.progress_fill}
        style={{
          width: `${((currentSlide + 1) / groupContent.length) * 100}%`
        }}
      ></div>
    </div>
    <span className={Styles.slide_total}>
      {String(groupContent.length).padStart(2, '0')}
    </span>
        </div>
    </>
);
}
