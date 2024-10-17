import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.service";
import styles from './Users.module.css'


const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then((response: IUser[]) => {
                setUsers(response);
            })
    }, []);

    return (
        <div>
            <div className={styles.users_container}>
                {
                    users.map((user: IUser) => (<User item={user} key={user.id}/>))
                }
            </div>
        </div>
    );
};

export default Users;