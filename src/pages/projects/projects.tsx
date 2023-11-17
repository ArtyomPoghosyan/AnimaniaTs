import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { t } from 'i18next';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useAppDispatch } from '../../hooks';

import {  IState } from '../../models/common/common';

import { Slider } from '../../components/slider/slider';

import projectStyle from "./project-style.module.css"
import { projectSliderThunk } from '../../store';
import { projectSliderHeigth, projectSliderWidth } from '../../helpers/constant-variables/common';

export const Projects: React.FC = () => {
    const { data } = useSelector((state: IState) => state.project) ;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(projectSliderThunk())
    }, []);

    return (
        <div className={projectStyle.project_container} id="project">
            <h1 className={projectStyle.title}>{t("COMMON.PROJECTS")}</h1>
            <Slider data={data?.data} width={projectSliderWidth} height={projectSliderHeigth} />
        </div>
    )
}