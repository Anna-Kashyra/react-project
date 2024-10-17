import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './User.module.css';
import {Link} from "react-router-dom";


type UserProps = {
    item: IUser;
}

const User: FC<UserProps> = ({item}) => {

    return (
        <div className={styles.user_container}>
            <Link state={item} to={item.id.toString()}><h4>{item.firstName} {item.lastName}</h4></Link>
        </div>
    );
};

export default User;