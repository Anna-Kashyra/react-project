import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../../components/menu/Menu";
import styles from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={styles.main_container}>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;