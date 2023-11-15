import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { t } from "i18next";
import { useAppDispatch } from "../../hooks";

import { IState } from "../../models/common/common";
import { Slider } from "../../components/slider/slider";
import aboutStyle from "../about/about-style.module.css"
import { sliderThunk } from "../../services/store/slices/media/slider";
import Animania_text_name from "../../assets/images/Animania_production.png";
import animania from "../../assets/images/Animania_pic.png"
import { aboutThunk } from "../../services/store/slices/about";

export const About: React.FC = () => {
    const { data } = useSelector((state: IState) => state.about);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutThunk())
    }, []);

    console.log(data?.data)

    return (
        <div className={aboutStyle.about_container} id="about">
            <div className={aboutStyle.left_side}>
                <div className={aboutStyle.logo}>
                    <img className={aboutStyle.text_name} src={Animania_text_name} />
                </div>
                <div>
                    <p className={aboutStyle.first_Text}>
                        {t("COMMON.TEXT")}

                    </p>
                </div>
            </div>
            <div className={aboutStyle.right_side}>
                <Slider data={data?.data} width={90} height={500} />
            
                <div>
                </div>
            </div>
        </div>
    )
}