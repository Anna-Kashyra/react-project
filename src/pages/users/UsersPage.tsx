import React from 'react';
import styles from './UsersPage.module.css';
import Users from "../../components/users/Users";


const UsersPage = () => {
   

    return (
        <div className={styles.users_page_container}>
            <h1>All Users</h1>
            <Users/>
        </div>
    );
};

export default UsersPage;