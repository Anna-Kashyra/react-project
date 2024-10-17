import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import styles from './Comments.module.css'
import {getComments} from "../../services/api.service";
import Comment from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()
            .then((response: IComment[]) => {
                setComments(response);
            })
    }, []);

    return (
        <div>
            <div className={styles.comments_container}>
                {
                    comments.map((comment: IComment) => (<Comment item={comment} key={comment.id}/>))
                }
            </div>
        </div>
    );
};

export default Comments;