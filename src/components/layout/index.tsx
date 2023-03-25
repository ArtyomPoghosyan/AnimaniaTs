import { Outlet, useNavigate } from "react-router-dom";
import animania_logo from "../../shared/images/animania_logo.png";
import { Menu } from 'antd';
import LayoutStyle from '../../components/layout/layout.module.css';
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import lang from "../../shared/images/lang.png";
import telegram from "../../shared/images/telegram.png";
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
        <div style={{ zIndex: "999999999999" }}>
            <Menu  mode="horizontal" theme="light" style={{
                display: "flex", alignItems: "center", marginTop: "-4px", width: "100%", height: "90px",
                justifyContent: "space-between", position: "fixed", zIndex: "1"
            }}>
                <div style={{ display: "flex", width: "90%", alignItems: "center", justifyContent: "space-between" }}>
                    <Link smooth to="#main_video" className={LayoutStyle.nav_links_font_size}>
                        <img src={animania_logo} style={{ display: "flex", width: "200px" }} onClick={() => { navigate("/") }} alt="logo" />
                    </Link>
                    <div style={{ display: "flex", marginLeft: "150px", width: "78%" }}>
                        <Menu.Item>
                            <Link smooth to="#about" className={LayoutStyle.nav_links_font_size}>AP</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="#project" smooth className={LayoutStyle.nav_links_font_size}>Projects</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#team" smooth className={LayoutStyle.nav_links_font_size}>Team</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#partners" smooth className={LayoutStyle.nav_links_font_size}>Partners</Link>
                        </Menu.Item>

                        <Menu.Item >
                            <Link to="#contact" smooth className={LayoutStyle.nav_links_font_size}>Contact</Link>
                        </Menu.Item>
                    </div>
                </div>
                <div className={LayoutStyle.nav_links_font_size}>

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
            <div className={LayoutStyle.outlet_container}>
                <Outlet />
            </div>
            <footer className={LayoutStyle.footer}>
                <div className={LayoutStyle.footer_container}>
                    <div className={LayoutStyle.logo}>
                        <img src={animania_logo} style={{
                            display: "flex", width: "392px;",
                            height: "100px", justifyContent: "center", alignItems: "center",
                        }} />
                    </div>

                    <div className={LayoutStyle.categories}>
                        <h4>Categories</h4>
                        <ul>
                            <li>Game</li>
                            <li>Film</li>
                            <li>Animation</li>
                            <li>Modeling</li>
                        </ul>
                    </div>

                    <div className={LayoutStyle.social_pages}>
                        <h4>Social Pages</h4>
                        <div className={LayoutStyle.social_page_links} >
                            {/* <a href="https://www.facebook.com/AnimaniaStudioss" target={"_blank"}><img src={fb} style={{ width: "20px" }} /></a>
                            <a href="https://www.instagram.com/animania__studio/" target={"_blank"}><img src={instagram} style={{ width: "20px" }} /></a> */}
                            <img src={telegram} style={{ width: "20px", height: "20px" }} />
                        </div>
                    </div>
                </div>

                <div className={LayoutStyle.by_PADC}>
                    <p>All Rights reserved by PADC LLC</p>
                </div>

            </footer>
        </div >
    )
}