import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu_container}>
                <li className={styles.menu_item}><Link to={'/'}>Home</Link></li>
                <li  className={styles.menu_item}><Link to={'recipes'}>Recipes</Link></li>
            </ul>
        </div>
    );
};

export default Menu;