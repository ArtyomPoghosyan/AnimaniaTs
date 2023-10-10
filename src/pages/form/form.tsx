
import { useForm } from 'react-hook-form';
import formStyle from "./form.module.css"
import { t } from 'i18next';
import { supportFormValidation } from '../../components/validation/form-validation';

export interface IFormData {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }


 export const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();
    const onSubmit = (data: IFormData): void => {
        try {
            if (data?.phone && !data.phone.startsWith('+')) {
                data.phone = '+' + data.phone;
            }
            // postData(data satisfies IFormData)
            reset()

        }
        catch (error: unknown) {
            if (error instanceof Error) {
                // <p className='error_message'>{t("COMMON.ERROR_MESSAGE")}Somethhing went wrong</p>
            }
        }
    }
    return (
        <>
            <div id="support"></div>
            <div className={formStyle.basic_container_support}>
                <div className={formStyle.main_container}>
                    <div className={formStyle.support_container}>
                        <section className={formStyle.support_right_side_container}>
                            <h2 className={formStyle.support_title}>{t("COMMON.SEND_US_EMAIL")}</h2>


                                <form className={formStyle.support_form_container} onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" placeholder={t("COMMON.YOUR_NAME")} {...register('name', supportFormValidation.name)} />
                                    {errors.name && errors.name.type == "required" &&
                                        <p className="error_Message">{supportFormValidation.name.text}</p>}
                                    {errors.name && errors.name.type === "minLength" && (
                                        <p className="error_Message">{supportFormValidation.name.minLenText}</p>)}
                                    <input type="text" id="email" placeholder={t("COMMON.YOUR_EMAIL")} {...register('email', supportFormValidation.email)} />
                                    {errors.email && errors.email.type === "required" && (
                                        <p className="error_Message">{supportFormValidation.email.text}</p>)}
                                    {errors.email && errors.email.type === "pattern" && (
                                        <p className="error_Message">{supportFormValidation.email.patternText}</p>)}
                                    <input type="text" id="phone" placeholder={t("COMMON.YOUR_PHONE")} {...register('phone', supportFormValidation.phone)} />
                                    {errors.phone && errors.phone.type == "required" &&
                                        <p className="error_Message">{supportFormValidation.phone.text}</p>}
                                    {errors.phone && errors.phone.type == "pattern" &&
                                        <p className="error_Message">{supportFormValidation.phone.patternText}</p>}
                                    <textarea id="message" placeholder={t("COMMON.YOUR_MESSAGE")} {...register('message', supportFormValidation.message)}></textarea>
                                    {errors.message && errors.message.type == "required" &&
                                        <p className="error_Message">{supportFormValidation.message.text}</p>}
                                    <button className={formStyle.btn_request} type="submit">{t("COMMON.SEND_REQ")}</button>
                                </form>

                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

