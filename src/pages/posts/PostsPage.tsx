import React from 'react';
import styles from "./PostsPage.module.css";
import Posts from "../../components/posts/Posts";


const PostsPage = () => {
    return (
        <div className={styles.posts_page_container}>
            <h1>All Posts</h1>
            <Posts/>
        </div>
    );
};

export default PostsPage;