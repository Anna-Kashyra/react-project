import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCommentsOfPost} from '../../services/api.service';
import {IComment} from '../../models/IComment';
import styles from './PostCommentsPage.module.css';

const PostCommentsPage = () => {
    const {postId} = useParams(); // отримуємо postId з URL
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        if (postId) {
            getCommentsOfPost(Number(postId))
                .then((response) => {
                    setComments(response);
                });
        }
    }, [postId]);

    return (
        <div className={styles.comments_container}>
            <h2>Comments</h2>
            <div>
                {
                    comments.map(comment => (
                        <div key={comment.id}>
                            <p><strong>{comment.user.username}</strong>: {comment.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostCommentsPage;
