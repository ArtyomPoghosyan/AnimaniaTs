import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import projectStyle from "../projects/project-style.module.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import pic1 from "../../assets/images/RIVER.jpg";
import pic2 from "../../assets/images/staff.jpg";
import pic3 from "../../assets/images/mountain.jpg";
import pic4 from "../../assets/images/forest.jpg";

const initialProjectPictures = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2 },
    { id: 3, image: pic3 },
    { id: 4, image: pic4 }

]

export const Projects:React.FC = () => {
    return (
        <div id="project">
            <h1 className="heading" style={{ color: "#FFD400" }}>Our Projects</h1>
            <Swiper style={{ width: "100%", height: "800px", zIndex: "0" }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {initialProjectPictures.map((item, index) => {
                    return (
                        <SwiperSlide  >
                            <img className={projectStyle.image} key={index} src={item.image} />
                        </SwiperSlide>
                    )
                })}

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                    </div>
                    <div className="swiper-button-next slider-arrow">
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}