import React from 'react';
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";
import styles from './FormComponent.module.css';
import {IFormProps} from "../../models/IFormProps";
import sendDataToServer from "../../services/api.service";

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver (userValidator)
    });

    const customHandler = async (formDataProps: IFormProps) => {
        await sendDataToServer(formDataProps);
    };

    return (
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit(customHandler)}>
                <div className={styles.input_container}>
                    <label>Please enter two words separated by a space, using only Latin letters
                        <input type="text" placeholder={'Name'} {...register('name')}/>
                        {errors.name && <div>{errors.name.message}</div>}
                    </label>

                    <label>Please enter a word with 1 to 21 Latin letters
                        <input type="text" placeholder={'Username'} {...register('username')}/>
                        {errors.username && <div>{errors.username.message}</div>}
                    </label>
                </div>

                <div className={styles.input_container}>
                    <label>Please enter a valid email address
                        <input type="email" placeholder={'Email'} {...register('email')}/>
                        {errors.email && <div>{errors.email.message}</div>}
                    </label>
                </div>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;