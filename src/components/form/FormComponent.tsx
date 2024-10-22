import React from 'react';
import {useForm} from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";
import styles from './FormComponent.module.css'
import axios from "axios";

interface IFormProps {
    id: number,
    name: string,
    username: string,
    email: string
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver (userValidator)
    });

    const sendDataToServer = async (data: IFormProps) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const customHandler = (formDataProps: IFormProps) => {
        sendDataToServer(formDataProps);
    };

    return (
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit(customHandler)}>
                <div className={styles.input_container}>
                    <label>Please enter id
                        <input type="number" {...register('id')}/>
                        {errors.id && <div>{errors.id.message}</div>}
                    </label>

                    <label>Please enter two words separated by a space, using only Latin letters
                        <input type="text" {...register('name')}/>
                        {errors.name && <div>{errors.name.message}</div>}
                    </label>
                </div>

                <div className={styles.input_container}>
                    <label>Please enter a word with 1 to 21 Latin letters
                        <input type="text" {...register('username')}/>
                        {errors.username && <div>{errors.username.message}</div>}
                    </label>

                    <label>Please enter a valid email address
                        <input type="email" {...register('email')}/>
                        {errors.email && <div>{errors.email.message}</div>}
                    </label>
                </div>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;