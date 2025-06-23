import React from 'react';
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

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3, // or 1, depending on design
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {groupContent?.map((item, index) => (
                    <div key={index} className={Styles.logo_card}>
                    <div className={`${Styles.logo_card_inner} active-border`}>
                        <div className={Styles.image_block}>
                        <RenderImage imageField={item.image} />
                        </div>
                        <div className={Styles.content_block}>
                        <HeadingComponent headingLevel={item.headingAndTextHeadingLevel} headingStyleVariant={item.headingStyleVariant} heading={item.headingAndTextHeading} />
                            <div className='description_container'>
                            <RichText fieldPath="item.description"></RichText>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}
