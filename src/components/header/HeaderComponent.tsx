import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <ul className={styles.header_container}>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink></li>
                <li><NavLink to={'/posts'}>Posts</NavLink></li>
                <li><NavLink to={'/comments'}>Comments</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;