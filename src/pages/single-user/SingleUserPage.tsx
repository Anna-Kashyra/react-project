import React from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './SingleUser.module.css';


const SingleUserPage = () => {

    let {state} = useLocation();
    console.log(state);

    return (
        <div className={styles.user_container}>
            <h2>{state.firstName} {state.lastName}</h2>
            <div className={styles.desk}>
                <div>
                    <p>Age: {state.age}</p>
                    <p>Gender: {state.gender}</p>
                </div>
                <div>
                    <p>Email: {state.email}</p>
                    <p>Phone: {state.phone}</p>
                </div>
            </div>
            <Link to={`/users/${state.id}/posts`}><h4>All posts of {state.firstName}</h4></Link>
        </div>
    );
};

export default SingleUserPage;