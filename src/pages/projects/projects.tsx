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
import {  sliderThunk } from '../../slices/media/slider';
import ReactPlayer from 'react-player';
import { IVideo } from '../../models/media/media';
import { Url } from '../../services/base-url';
import { Slider } from '../../components/slider/slider';
import { t } from 'i18next';


export const Projects: React.FC = ({language}:any) => {

    const { videoData } = useSelector((state: IState) => state.slider);
    const dispatch = useAppDispatch();
    const [datas, setData] = useState<any>(null);

    useEffect(() => {
        dispatch(sliderThunk())
    }, [])

    useEffect(() => {
        if (videoData?.data) {
            setData(videoData?.data)
        }
    }, [videoData.length])
    return (
        <div id="project">
            <h1 className="heading" style={{ color: "#FFD400" }}>{t("COMMON.PROJECTS")}</h1>
            {datas ? <Slider datas={datas} width={100} height={700}/> : null}
        </div>
    )
}