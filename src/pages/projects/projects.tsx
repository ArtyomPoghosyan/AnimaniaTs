import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import projectStyle from "../projects/project-style.module.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IState } from '../../models/common/common';
import { useAppDispatch } from '../../hooks';
import { mainVideoThunk } from '../../slices/media/main-video/main-video';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css"
import { IVideo } from '../../models/media/media';
import { Url } from '../../services/base-url';


export const Projects: React.FC = () => {

    const { videoData } = useSelector((state: IState) => state.mainVideo);
    const dispatch = useAppDispatch();
    const [datas, setData] = useState<any>(null)
    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    useEffect(() => {
        if (videoData?.data) {
            setData(videoData?.data)
        }
    }, [videoData.length])

    console.log(datas)
    return (
        <div id="project">
            <h1 className="heading" style={{ color: "#FFD400" }}>Our Projects</h1>
            {datas ? <Swiper style={{ width: "100%", height: "800px", zIndex: "0" }}
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
                {datas?.map((item:any) => {
                    console.log(item.path.slice(-3))
                    return (
                        <SwiperSlide>
                           {item.path.slice(-3) == "mp4"?
                            <ReactPlayer
                                muted={true}
                                playing
                                url={Url + `/${item?.path}`}
                                width="100%"
                                height="360"
                                controls={false}
                            />:<img src={Url + `/${item?.path}`} />
                            }
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
            </Swiper> : null}
        </div>
    )
}