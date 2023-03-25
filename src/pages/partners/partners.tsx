import partnersStyle from "../partners/partners-style.module.css";
import logo1 from "../../assets/images/logo1.jpg";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
export const Partners:React.FC = () => {
    return (
        <div className={partnersStyle.partners_container} id="partners">
            <h2 style={{color:"#FFD400"}}>Our Partners</h2>
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