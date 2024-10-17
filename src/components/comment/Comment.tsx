import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import styles from './Comment.module.css'

type CommentProps = {
    item: IComment;
}

const Comment: FC<CommentProps> = ({item}) => {
    return (
        <div className={styles.comment_container}>
            <p className={styles.text}>{item.body}</p>
            <div className={styles.desc}>
                <p>{item.user.fullName}</p>
                <p><i>Likes:</i> {item.likes}</p>
            </div>
        </div>
    );
};

export default Comment;