import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <ul className={styles.header_container}>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={'/users'}>All Users</NavLink></li>
                <li><NavLink to={'/posts'}>All Posts</NavLink></li>
                <li><NavLink to={'/comments'}>All Comments</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;