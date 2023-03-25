import { Outlet, useNavigate } from "react-router-dom";
import animania_logo from "../../assets/images/animania_logo.png";
import { Menu } from 'antd';
import layoutStyle from "../layout/layout.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import fb from "../../assets/images/fb.png";
import instagram from "../../assets/images/instagram.png";
import lang from "../../assets/images/lang.png";
import telegram from "../../assets/images/telegram.png";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

export const Layout:React.FC = () => {

    const navigate = useNavigate();
    const [color, setcolor] = useState(false);
    const changeColor = () => {

        if (window.scrollY >= 90) {
            setcolor(true)
        }
        else {
            setcolor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    const items = [
        {
            key: '1',
            label: 'Arm',
        },
        {
            key: '2',
            label: 'Eng',
        },
        {
            key: '3',
            label: 'Rus',
        },
    ];

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
                            <Link to="#project" smooth className={layoutStyle.nav_links_font_size}>Projects</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#team" smooth className={layoutStyle.nav_links_font_size}>Team</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#partners" smooth className={layoutStyle.nav_links_font_size}>Partners</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#contact" smooth className={layoutStyle.nav_links_font_size}>Contact</Link>
                        </Menu.Item>
                    </div>
                </div>
                <div className={layoutStyle.nav_links_font_size}>

                    <div>
                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ['3'],
                            }}>
                            <Typography.Link>
                                <Space>
                                    <img src={lang} />
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                    </div>
                </div>
            </Menu >
            <div className={layoutStyle.outlet_container}>
                <Outlet />
            </div>
            <footer className={layoutStyle.footer}>
                <div className={layoutStyle.footer_container}>
                    <div className={layoutStyle.logo}>
                        <img src={animania_logo} style={{
                            display: "flex", width: "392px;",
                            height: "100px", justifyContent: "center", alignItems: "center",
                        }} />
                    </div>

                    <div className={layoutStyle.categories}>
                        <h4>Categories</h4>
                        <ul>
                            <li>Game</li>
                            <li>Film</li>
                            <li>Animation</li>
                            <li>Modeling</li>
                        </ul>
                    </div>

                    <div className={layoutStyle.social_pages}>
                        <h4>Social Pages</h4>
                        <div className={layoutStyle.social_page_links} >
                            <a href="https://www.facebook.com/AnimaniaStudioss" target={"_blank"}><img src={fb} style={{ width: "20px" }} /></a>
                            <a href="https://www.instagram.com/animania__studio/" target={"_blank"}><img src={instagram} style={{ width: "20px" }} /></a>
                            <img src={telegram} style={{ width: "20px", height: "20px" }} />
                        </div>
                    </div>
                </div>

                <div className={layoutStyle.by_PADC}>
                    <p>All Rights reserved by PADC LLC</p>
                </div>

            </footer>
        </div >
    )
}