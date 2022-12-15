import React from 'react';
// import { Link } from "react-router-dom";
import { PostItem } from '../ts-utils/interfaces';

const TodoCard = ({post, index} : {post: PostItem, index: React.Key | null | undefined}) => (
    <li key={index}>
        <h3 className="todo__title">{post.title}</h3>
        <p className="todo__body">{post.description}</p>
        {/* <Link to={`/posts/${post.postId}`} className="todo_link">Post details</Link> */}
    </li>
);

export default TodoCard;
