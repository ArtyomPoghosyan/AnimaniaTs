import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { t } from 'i18next';
import { Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks';
import SuccessMessage from '../../helpers/alert/alert-message';
import { supportFormValidation } from '../../helpers/validation/form-validation';
import { handleContactState, sendMessageThunk } from '../../store';

import { FormEnum } from '../../constant/enums/index';
import { IFormData } from '../../models/common/common';
import formStyle from "./form.module.css"

export const FormComponent = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isSuccess } = useAppSelector(state => state.contact);

    const onFinish = (data: IFormData): void => {
        dispatch(sendMessageThunk(data))
        reset()
    }

    useEffect(() => {
        dispatch(handleContactState.resetSuccess())
    }, [isSuccess])

    return (
        <>
            <div id="support"></div>
            {isSuccess && <SuccessMessage content={t('SUCCESSMESSAGE.TEXT')} />}
            <div className={formStyle.basic_container_support}>
                <div className={formStyle.main_container}>
                    <div className={formStyle.support_container}>
                        <section className={formStyle.support_right_side_container}>
                            <h2 className={formStyle.support_title}>{t("COMMON.SEND_US_EMAIL")}</h2>
                            <form className={formStyle.support_form_container} onSubmit={handleSubmit(onFinish)}>
                                <input type="text" placeholder={t("COMMON.YOUR_NAME")} {...register('name', supportFormValidation.name)} />
                                <div className={formStyle.error_message}>
                                    {errors.name && errors.name.type == FormEnum.REQUIRED &&
                                        <p className={formStyle.error_message}>{supportFormValidation.name.text}</p>}
                                    {errors.name && errors.name.type === FormEnum.MINLENGTH && (
                                        <p className={formStyle.error_message}>{supportFormValidation.name.minLenText}</p>)}
                                </div>
                                <input type="text" id="email" placeholder={t("COMMON.YOUR_EMAIL")} {...register('email', supportFormValidation.email)} />
                                <div className={formStyle.error_message}>
                                    {errors.email && errors.email.type === FormEnum.REQUIRED && (
                                        <p className={formStyle.error_message}>{supportFormValidation.email.text}</p>)}
                                    {errors.email && errors.email.type === FormEnum.PATTERN && (
                                        <p className={formStyle.error_message}>{supportFormValidation.email.patternText}</p>)}
                                </div>
                                <input type="text" id="phone" placeholder={t("COMMON.YOUR_PHONE")} {...register('phone', supportFormValidation.phone)} />
                                <div className={formStyle.error_message}>
                                    {errors.phone && errors.phone.type == FormEnum.REQUIRED &&
                                        <p className={formStyle.error_message}>{supportFormValidation.phone.text}</p>}
                                    {errors.phone && errors.phone.type == FormEnum.PATTERN &&
                                        <p className={formStyle.error_message}>{supportFormValidation.phone.patternText}</p>}
                                </div>
                                <textarea id="message" placeholder={t("COMMON.YOUR_MESSAGE")} {...register('message', supportFormValidation.message)}></textarea>
                                <div className={formStyle.textatea_error_message}>
                                    {errors.message && errors.message.type == FormEnum.REQUIRED &&
                                        <p >{supportFormValidation.message.text}</p>}
                                </div>
                                <Button onFocusCapture={() => { }} className={formStyle.btn_request} htmlType={FormEnum.SUBMIT}>
                                    <p >{t("COMMON.SEND_REQ")}</p>
                                </Button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

