import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type PostProps = {
    item: IPost;
}
const Post: FC<PostProps> = ({item}) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
};

export default Post;