import partnersStyle from "../partners/partners-style.module.css";
import logo1 from "../../assets/images/logo1.jpg";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import { t } from "i18next";
export const Partners:React.FC = ({language}:any) => {
    return (
        <div className={partnersStyle.partners_container} id="partners">
            <h2 style={{color:"#FFD400"}}>{t("COMMON.OUR_PARTNER")}</h2>
            <div className={partnersStyle.image_container}>
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo3} />
                <img src={logo4} />
            </div>


        </div>
    )
}