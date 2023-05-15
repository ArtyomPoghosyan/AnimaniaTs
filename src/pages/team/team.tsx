
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
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { isLoading, isSuccess, userData, userError } = useAppSelector((state: any) => state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(UserThunk())
    }, [])

    return (
        <div className="App" id="team">
            {/* <h1 className="heading" style={{ marginTop: "100px", color: "#FFD400" }}>Our Family</h1>
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
                                    <sp>{item.position}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper> */}
        </div>
    );
}