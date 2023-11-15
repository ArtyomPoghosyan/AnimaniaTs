import contactStyle from "../contact/contact-style.module.css";
import LocationVector from "../../assets/images/Location_vector.png";
import EmailVector from "../../assets/images/Email.png";
import PhoneVector from "../../assets/images/phone.png";
import { t } from "i18next";

export const Contact:React.FC = () => {

    return (
        <div className={contactStyle.contact_container}  id="contact" >
            <h2 className={contactStyle.contact_main_title}>{t("COMMON.CONTACT_WITH_US")}</h2>
            <div className={contactStyle.contact_block}>
                <div className={contactStyle.contact_address}>
                    <div className={contactStyle.location_icon}>
                        <img className={contactStyle.address_icon} src={LocationVector} />
                    </div>
                    <div className={contactStyle.address_text}>
                        <h3 className={contactStyle.contact_title}>{t("COMMON.ADDRESS")}</h3>
                        <p className={contactStyle.contact_description}>{t("CONTACT.ADDRESS")}</p>
                    </div>
                </div>

                <div className={contactStyle.email_block}>
                    <div className={contactStyle.location_icon}>
                        <img className={contactStyle.email_pic} src={EmailVector} />
                    </div>
                    <div className={contactStyle.email_text}>
                        <h3 className={contactStyle.contact_title}>{t("COMMON.SEND")}</h3>
                         <p className={contactStyle.contact_description}>{t("CONTACT.EMAIL")}</p>
                    </div>
                </div>

                <div className={contactStyle.phone_container}>
                    <div className={contactStyle.location_icon}>
                        <img className={contactStyle.phone_pic} src={PhoneVector} />
                    </div>
                    <div className={contactStyle.phone_text}>
                        <h3 className={contactStyle.contact_title}>{t("COMMON.CALL_US")}</h3>
                         <p className={contactStyle.contact_description}>{t("CONTACT.PHONE")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}