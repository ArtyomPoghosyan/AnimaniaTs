import aboutStyle from "../about/about-style.module.css"
import Animania_text_name from "../../assets/images/ANIMANIA PRODUCTION.png";
import Armenian_map from "../../assets/images/Armenia.png";
import staffPic from "../../assets/images/staff.jpg";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ReactPlayer from "react-player";
import { Url } from '../../services/base-url';
import { Slider } from "../../components/slider/slider";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { sliderThunk } from "../../slices/media/slider";
import { useEffect, useState } from "react";
import { IState } from "../../models/common/common";

export const About: React.FC = () => {
    const { videoData } = useSelector((state: IState) => state.slider);
    const dispatch = useAppDispatch();
    const [datas, setData] = useState<any>(null);
    useEffect(() => {
        dispatch(sliderThunk())
    }, []);

    useEffect(() => {
        if (videoData?.data) {
            console.log(videoData?.data, "456")
            setData(videoData?.data)
        }
    }, [videoData.length])
    
    return (
        <div className={aboutStyle.about_container} id="about">
            <div className={aboutStyle.left_side}>
                <div className={aboutStyle.logo}>
                    <img src={Animania_text_name} />
                </div>
                <div>
                    <p className={aboutStyle.first_Text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>

                <div>
                    <p className={aboutStyle.first_Text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            {/* <Slider/> */}
            <div className={aboutStyle.right_side}>
                {/* <div>
                    <img style={{marginTop: "100px",width:"715px"}} src = {staffPic}/>
                </div> */}

                <Slider datas={datas} width={90} height={500}/>
                
                <div>
                    <img src={Armenian_map} />
                </div>
            </div>
        </div>
    )
}