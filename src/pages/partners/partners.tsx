import { useEffect } from "react";
import { useSelector } from "react-redux";

import { t } from "i18next";
import { partnersThunk } from "../../store";
import { useAppDispatch } from "../../hooks";
import {  IPartnert, IState } from "../../models/common/common";

import { Url } from "../../helpers/url/base-url";

import partnersStyle from "../partners/partners-style.module.css";

export const Partners:React.FC = () => {
    const { data } = useSelector((state: IState) => state.partners) ;
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(partnersThunk())
    }, []);

    return (
        <div className={partnersStyle.partners_container} id="partners">
            <h2 className={partnersStyle.partner_title}>{t("COMMON.OUR_PARTNER")}</h2>
            <div className={partnersStyle.image_container}>
                {
                    data?.data?.map((item:IPartnert) =>(
                        <img src={`${Url}/${item?.path}`}/>
                    ))
                }
            </div>
        </div>
    )
}