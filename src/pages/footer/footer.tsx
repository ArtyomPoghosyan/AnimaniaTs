import { t } from "i18next";
import animania_logo from "../../assets/images/animania_logo.png";
import layoutStyle from "../../components/layout/layout.module.css";
import fb from "../../assets/images/fb.png";
import instagram from "../../assets/images/instagram.png";
import telegram from "../../assets/images/telegram.png";

export const Footer:React.FC = () => {

    return (
        <footer className={layoutStyle.footer}>
            <div className={layoutStyle.footer_container}>
                <div className={layoutStyle.logo}>
                    <img className={layoutStyle.footer_logo} src={animania_logo} />
                </div>
                <div className={layoutStyle.categories}>
                    <h4>{t("COMMON.CATEGORIES")}</h4>
                    <ul>
                        <li>{t("COMMON.GAME")}</li>
                        <li>{t("COMMON.FILM")}</li>
                        <li>{t("COMMON.ANIMATION")}</li>
                        <li>{t("COMMON.MODELING")}</li>
                    </ul>
                </div>

                <div className={layoutStyle.social_pages}>
                    <h4>{t("COMMON.SOCIAL_PAGES")}</h4>
                    <div className={layoutStyle.social_page_links} >
                        <a href="https://www.facebook.com/AnimaniaStudioss" target={"_blank"}><img src={fb} style={{ width: "20px" }} /></a>
                        <a href="https://www.instagram.com/animania__studio/" target={"_blank"}><img src={instagram} style={{ width: "20px" }} /></a>
                        <img src={telegram} style={{ width: "20px", height: "20px" }} />
                    </div>
                </div>
            </div>

            <div className={layoutStyle.by_PADC}>
                <p>{t("COMMON.CREATED_BY")}</p>
            </div>
        </footer>
    )

}