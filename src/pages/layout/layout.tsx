import { Outlet, useNavigate } from "react-router-dom";
import animania_logo from "../../assets/images/animania_logo.png";
import { Menu } from 'antd';
import layoutStyle from "../layout/layout.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import lang from "../../assets/images/lang.png";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import i18next, { t } from "i18next";
import i18n from "../../i18n";
import { Footer } from "../footer/index";
import { Main } from "../main";


export const Layout: React.FC = () => {

    const navigate = useNavigate();
    const [color, setcolor] = useState(false);
    const [currentLang, setCurrentLang] = useState<any>(localStorage.getItem("lang"));
    const [language, setLanguage] = useState<string>(localStorage.getItem('lang') || 'en');

    const handleMenuClick = (e: any) => {
        setCurrentLang(e.key);
        setLanguage(e.key);
        i18next.changeLanguage(e.key);
        i18next.reloadResources();
        localStorage.setItem('lang', e.key);
    };

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, []);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
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
            <Menu.Item key="hy">HY</Menu.Item>
            <Menu.Item key="ru">RU</Menu.Item>
            <Menu.Item key="en">ENG</Menu.Item>
        </Menu>
    );

    return (
        <div className={layoutStyle.menu_container}>
            <Menu className={color ? `${layoutStyle.navbar_color} ${layoutStyle.menu}` : `${layoutStyle.nvbar_non_color} ${layoutStyle.menu}`}>
                <div className={layoutStyle.link_container}>
                    <Link smooth to="#main_video" className={layoutStyle.nav_links_font_size}>
                        <img src={animania_logo} className={layoutStyle.logo} onClick={() => { navigate("/") }} alt="logo" />
                    </Link>
                    <div className={layoutStyle.menu_item_container}>
                        <Menu.Item>
                            <Link smooth to="#about" className={layoutStyle.nav_links_font_size}>AP</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="#project" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.PROJECTS")}</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#team" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.TEAM")}</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#partners" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.PARTNER")}</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#support" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.SUPPORT")}</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#contact" smooth className={layoutStyle.nav_links_font_size}>{t("COMMON.CONTACT")}</Link>
                        </Menu.Item>
                    </div>
                </div>
                <div className={layoutStyle.nav_links_font_size}>
                    <div>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className={layoutStyle.lang_container} onClick={(e) => handleMenuClick(e)}>
                                <img className={layoutStyle.lang_icon} src={lang} /><DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </Menu >
            <div className={layoutStyle.outlet_container}>
                <Main/>
            </div>
            <Footer />
        </div >
    )
}