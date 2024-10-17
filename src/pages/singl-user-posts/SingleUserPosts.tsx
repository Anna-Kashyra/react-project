import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import {getPostsOfUser} from '../../services/api.service';
import {IPost} from '../../models/IPost';
import styles from "../../components/posts/Posts.module.css";


const SingleUserPosts = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (id) {
            getPostsOfUser(Number(id))
                .then((response) => {
                    setPosts(response);
                });
        }
    }, [id]);

    const navigate = useNavigate();

    const onClickNavigate = (postId: number) => {
        navigate(`${postId}/comments`)
    }

    return (
        <div className={styles.posts_container}>
            <h2>Posts</h2>
            <div  className={styles.post_container}>
                {
                    posts.map((post: IPost) => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <div className={styles.reactions}>
                                <p>Views: {post.views}</p>
                                <p>Likes: {post.reactions.likes}</p>
                            </div>
                            <button onClick={() => onClickNavigate(post.id)}>
                                View comments
                            </button>
                        </div>
                    ))
                }
                <Outlet/>
            </div>
        </div>
    );
};

export default SingleUserPosts;
