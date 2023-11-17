import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { Menu } from 'antd';
import i18n from "../../i18n";
import { Main } from "../main";
import { Dropdown } from 'antd';
import i18next, { t } from "i18next";
import { DownOutlined } from '@ant-design/icons';

import { LanguageEnum } from "../../constant";
import { scrollHeightNumber } from "../../helpers/constant-variables/common";

import arm_lang from "../../assets/images/arm_flag.png"
import rus_lang from "../../assets/images/rus_flag.png"
import eng_lang from "../../assets/images/eng_flag.png"
import animania_logo from "../../assets/images/animania_logo.png";

import layoutStyle from "./layout.module.css";

export const Layout: React.FC = () => {
    const navigate = useNavigate();
    const [color, setcolor] = useState(false);
    const [_, setLanguage] = useState<string>();

    const handleMenuClick = (event: any):void => {
        event?.key && setLanguage(event.key);
        i18next.changeLanguage(event.key);
        i18next.reloadResources(event.key);
        localStorage.setItem('lang', event.key);
    };

    const getLanguageImage = () => {
        const defaultLagn = localStorage.getItem("lang")
        switch (defaultLagn) {
            case LanguageEnum.ARMENIAN:
                return <img className={layoutStyle.lang_icon} src={arm_lang} alt="Armenian" />;
            case LanguageEnum.RUSSIAN:
                return <img className={layoutStyle.lang_icon} src={rus_lang} alt="Russian" />;
            case LanguageEnum.ENGLISH:
                return <img className={layoutStyle.lang_icon} src={eng_lang} alt="English" />;
            default:
                return null
        }
    };

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        lang && i18n.changeLanguage(lang);
    }, []);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= scrollHeightNumber) {
                setcolor(true)
            } else {
                setcolor(false)
            }
        };
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={LanguageEnum.ARMENIAN}>{LanguageEnum.ARMENIAN}</Menu.Item>
            <Menu.Item key={LanguageEnum.RUSSIAN}>{LanguageEnum.RUSSIAN}</Menu.Item>
            <Menu.Item key={LanguageEnum.ENGLISH}>{LanguageEnum.ENGLISH}</Menu.Item>
        </Menu>
    );

    return (
        <div className={layoutStyle.menu_container}>
            <Menu className={`${layoutStyle.link_container} ${color ? layoutStyle.navbar_color : layoutStyle.nvbar_non_color} ${layoutStyle.menu}`}>
                <div className={layoutStyle.main_container}>
                    <div className={layoutStyle.nav_links_font_size}>
                        <Link smooth to="#main_video">
                            <img src={animania_logo} className={layoutStyle.logo} onClick={() => { navigate("/") }} alt="logo" />
                        </Link>
                    </div>
                    <div className={layoutStyle.menu_item_container}>
                        <Menu.Item className={layoutStyle.nav_item}>
                            <Link smooth to="#about" className={layoutStyle.nav_links_font_size}>{t("COMMON.AP")}</Link>
                        </Menu.Item>

                        <Menu.Item className={layoutStyle.nav_item}>
                            <Link to="#project" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.PROJECTS")}</Link>
                        </Menu.Item>

                        <Menu.Item className={layoutStyle.nav_item}>
                            <Link to="#partners" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.PARTNER")}</Link>
                        </Menu.Item>

                        <Menu.Item className={layoutStyle.nav_item}>
                            <Link to="#support" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.SUPPORT")}</Link>
                        </Menu.Item>

                        <Menu.Item className={layoutStyle.nav_item}>
                            <Link to="#contact" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.CONTACT")}</Link>
                        </Menu.Item>
                    </div>
                </div>
                <div className={layoutStyle.nav_links_font_size}>
                    <div className={layoutStyle.language_container}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className={layoutStyle.lang_container} onClick={(e:React.MouseEvent<HTMLAnchorElement>) => handleMenuClick(e)}>
                                {getLanguageImage()}
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </Menu >
            <div className={layoutStyle.outlet_container}>
                <Main />
            </div>
        </div >
    )
}