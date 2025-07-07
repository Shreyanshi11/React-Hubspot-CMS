import React, { useState } from 'react';
import Styles from '../modules/TestimonialSlider/testimonial_slider.module.css';
import $ from 'jquery';
import 'jquery-match-height';
import RenderImage from '../components/ImageComponent/imageRenderer.jsx';
import { logInfo, RichText } from '@hubspot/cms-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function TestimonialBlock({ add_testimonial }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '60px',
        afterChange: index => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1,
                    // centerMode: true,
                    // centerPadding: '40px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1,
                    // centerMode: true,
                    // centerPadding: '40px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 1,
                    // centerMode: true,
                    // centerPadding: '40px',
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {add_testimonial.map((item, index) => (
                    <div key={index} className={Styles.logo_card}>
                        <div className={`${Styles.logo_card_inner} active-border`}>

                            <div className={Styles.content_block}>
                                <div className='description_container'>
                                    <RichText fieldPath={`add_testimonial[${index}].content`}></RichText>
                                </div>
                            </div>
                            <div className={Styles.image_block}>
                                <RenderImage imageField={item.testimonial_image} />
                            </div>
                            <div className={Styles.rating_image}>
                                <RenderImage imageField={item.rating_image} />
                            </div>
                            <div className={Styles.testimonial_name}>
                                <p>{item.testimonial_name}</p>
                            </div>
                            <div className={Styles.testimonial_designation}>
                                <p>{item.testimonial_designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}
