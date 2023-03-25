import aboutStyle from "../about/about-style.module.css"
import Animania_text_name from "../../assets/images/ANIMANIA PRODUCTION.png";
import Armenian_map from "../../assets/images/Armenia.png";
import staffPic from "../../assets/images/staff.jpg"
export const About:React.FC = () => {
    return (
        <div className={aboutStyle.about_container} id="about">
            <div className={aboutStyle.left_side}>
                <div className={aboutStyle.logo}>
                    <img src={Animania_text_name} />
                </div>
                <div>
                    <p className={aboutStyle.first_Text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>

                <div>
                    <p className={aboutStyle.first_Text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            <div className={aboutStyle.right_side}>
                <div>
                    <img style={{marginTop: "100px",width:"715px"}} src = {staffPic}/>
                </div>
                <div>
                    <img src ={Armenian_map}/>
                </div>
            </div>
        </div>
    )
}