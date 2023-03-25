import contactStyle from "../contact/contact-style.module.css";
import LocationVector from "../../assets/images/Location_vector.png";
import EmailVector from "../../assets/images/Email.png";
import PhoneVector from "../../assets/images/phone.png";

export const Contact:React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: "100px" }} id="contact" >

            <h2 style={{color:"#FFD400"}}>Contact With Us</h2>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"80px",marginBottom: "18px"}}>
                <div style={{ display: "flex", backgroundColor: "white", width: "26%", height: "92px", justifyContent: "space-around", alignItems: "center", border: "1px solid grey" }}>
                    <div className={contactStyle.location_icon}>
                        <img style={{ width: "25px", height: "35px" }} src={LocationVector} />
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <h3>Address | Location</h3>
                        <p>Mher Mkrtchyan 47/1 Gyumri,Armenia</p>
                    </div>
                </div>

                <div style={{ display: "flex", backgroundColor: "white", width: "18%", height: "92px", justifyContent: "space-evenly", alignItems: "center", border: "1px solid grey" }}>
                    <div className={contactStyle.location_icon}>
                        <img style={{ width: "25px", height: "18px" }} src={EmailVector} />
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <h3>Send US an Email</h3>
                        <p>animania@mail.ru</p>
                    </div>
                </div>

                <div style={{ display: "flex", backgroundColor: "white", width: "26%", height: "92px", justifyContent: "space-evenly", alignItems: "center", border: "1px solid grey" }}>
                    <div className={contactStyle.location_icon}>
                        <img style={{ width: "25px", height: "35px" }} src={PhoneVector} />
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <h3>Call Us</h3>
                        <p>077889966</p>
                    </div>
                </div>
            </div>
        </div>
    )
}