import img1 from "../../assets/images/image 25.png";
import img2 from "../../assets/images/image 26.png";
import img3 from "../../assets/images/image 27.png";
import img4 from "../../assets/images/image 28.png";
import leadAnimator from "../../assets/images/Lead Animator.png";
import ArturGevorgyan from "../../assets/images/Artur Gevorgyan.png";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { UserThunk } from "../../slices/user";
import { IState } from "../../models/common/common";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export const Team: React.FC = () => {
    const baseUrl="http://116.203.128.127:6543";
    const {isLoading,isSuccess,userData,userError}= useAppSelector((state:any)=> state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(UserThunk())
    }, [])

    return (
        <div className="App" id="team">
            <h1 className="heading" style={{ marginTop: "100px", color: "#FFD400" }}>Our Family</h1>
            <Swiper
                initialSlide={1}
                loopedSlides={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: -10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                slidesPerView={6}
                centeredSlides
                style={{ height: "500px", zIndex: "0", width: "100%" }}>
                {
                    userData?.data?.map((item:any, index:number) => {
                        return (
                            <SwiperSlide  >
                                <div style={{ marginLeft: "-550px" }}>
                                    <img key={index} src={baseUrl+`/${item?.avatar}`} />
                                    <p>{item.firstName}</p>
                                    <p>{item.lastName}</p>
                                    <p>{item.position}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}