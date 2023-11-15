import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { t } from 'i18next';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useAppDispatch } from '../../hooks';

import { IState } from '../../models/common/common';
import { sliderThunk } from '../../services/store/slices/media/slider';
import { Slider } from '../../components/slider/slider';

import projectStyle from "./project-style.module.css"

export const Projects: React.FC = () => {
    const { data } = useSelector((state: IState) => state.slider);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sliderThunk())
    }, []);

    return (
        <div id="project">
            <h1 className={projectStyle.title}>{t("COMMON.PROJECTS")}</h1>
            <Slider data={data?.data} width={100} height={700} />
        </div>
    )
}