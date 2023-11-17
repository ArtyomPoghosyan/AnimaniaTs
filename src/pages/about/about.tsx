import { useEffect } from "react";
import { useSelector } from "react-redux";

import { t } from "i18next";
import { useAppDispatch } from "../../hooks";

import { aboutComponyThunk } from "../../store";
import { Slider } from "../../components/slider/slider";
import { IState } from "../../models/common/common";
import { aboutSliderHeight, aboutSliderWidth } from "../../helpers/constant-variables/common";
import Animania_text_name from "../../assets/images/Animania_production.png";
import aboutStyle from "../about/about-style.module.css"

export const About: React.FC = () => {
    const { data } = useSelector((state: IState) => state.about);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutComponyThunk())
    }, []);

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
                <Slider data={data?.data} width={aboutSliderWidth} height={aboutSliderHeight} />
                <div>
                </div>
            </div>
        </div>
    )
}