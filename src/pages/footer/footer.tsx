import { t } from "i18next";
import animania_logo from "../../assets/images/animania_logo.png";
import footerStyle from "./footer.module.css"
import fb from "../../assets/images/fb.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tik-tok.png"
import linkdIn from "../../assets/images/linkedin.png"

export const Footer:React.FC = () => {

    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.footer_container}>
                <div className={footerStyle.logo}>
                    <img  src={animania_logo} />
                </div>
                <div className={footerStyle.categories}>
                    <h4>{t("COMMON.CATEGORIES")}</h4>
                    <ul>
                        <li className={footerStyle.categories_item}>{t("COMMON.GAME")}</li>
                        <li className={footerStyle.categories_item}>{t("COMMON.FILM")}</li>
                        <li className={footerStyle.categories_item}>{t("COMMON.ANIMATION")}</li>
                        <li className={footerStyle.categories_item}>{t("COMMON.MODELING")}</li>
                    </ul>
                </div>

                <div className={footerStyle.social_pages}>
                    <h4>{t("COMMON.SOCIAL_PAGES")}</h4>
                    <div className={footerStyle.social_page_links} >
                        <a href="https://www.facebook.com/AnimaniaStudioss" target={"_blank"}><img src={fb} className={footerStyle.social_icon}  /></a>
                        <a href="https://www.instagram.com/animania__studio" target={"_blank"}><img src={instagram} className={footerStyle.social_icon}/></a>
                        <a href="https://www.tiktok.com/@animaniastudio?_t=8hPRsGSpz86&_r=1" target={"_blank"}><img src={tiktok} className={footerStyle.social_icon}/></a>
                        <a href="https://www.linkedin.com/company/animania-studio" target={"_blank"}><img src={linkdIn} className={footerStyle.social_icon}/></a>
                    </div>
                </div>
            </div>

            <div className={footerStyle.created_by_PADC}>
                <p>{t("COMMON.CREATED_BY")}</p>
            </div>
        </footer>
    )

}