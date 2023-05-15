import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ReactPlayer from 'react-player';
import { Url } from '../../services/base-url';
import sliderStyle from "./slider.module.css"

export const Slider: React.FC<any> = (props: any) => {
    const { datas,width,height } = props
    return (
        <div>
            {datas ? <Swiper style={{ width: `${width}%`, height: `${height}px`, zIndex: "0" }}
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
                {datas?.map((item: any) => {
                    console.log(item.path.slice(-3))
                    return (
                        <SwiperSlide>
                            {item.path.slice(-3) == "mp4" ?
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                    <ReactPlayer
                                        muted={true}
                                        playing
                                        url={Url + `/${item?.path}`}
                                        width="90%"
                                        height="360"
                                        controls={false}
                                    />
                                </div>
                                : <img className={sliderStyle.image} src={Url + `/${item?.path}`} />
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