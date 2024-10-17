import React, {FC} from 'react';
import styles from "./Post.module.css";
import {IPost} from "../../models/IPost";

type PostProps = {
    item: IPost;
}

const Post: FC<PostProps> = ({item}) => {
    return (
        <div className={styles.post_container}>
            <h4>{item.title}</h4>
            <p className={styles.text}>{item.body}</p>
            <button onClick={() => {}}>
                View comments
            </button>

        </div>
    );
};

export default Post;