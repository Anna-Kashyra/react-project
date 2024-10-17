import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './User.module.css';

type UserProps = {
    item: IUser;
}

const User: FC<UserProps> = ({item}) => {
    return (
        <div className={styles.user_container}>
            <h4>{item.firstName} {item.lastName}</h4>
            <button onClick={() => {}}>
                View posts
            </button>

        </div>
    );
};

export default User;