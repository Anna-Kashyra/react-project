import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.service";
import styles from "./Posts.module.css";
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts()
            .then((response: IPost[]) => {
                setPosts(response);
            })
    }, []);

    return (
        <div>
            <div className={styles.posts_container}>
                {
                    posts.map((post: IPost) => (<Post item={post} key={post.id}/>))
                }
            </div>
        </div>
    );
};

export default Posts;