import partnersStyle from "../partners/partners-style.module.css";
import { t } from "i18next";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { IPartnert, IState } from "../../models/common/common";
import { useEffect } from "react";

import { Url } from "../../helper/url/base-url";
import { partnersThunk } from "../../store";

export const Partners:React.FC = () => {
    const { data } = useSelector((state: IState) => state.partners);
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