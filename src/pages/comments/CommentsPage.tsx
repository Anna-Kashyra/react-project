import React from 'react';
import styles from './CommentsPage.module.css'
import Comments from "../../components/comments/Comments";

const CommentsPage = () => {
    return (
        <div className={styles.comments_page_container}>
            <h1>All Comments</h1>
            <Comments/>
        </div>
    );
};

export default CommentsPage;