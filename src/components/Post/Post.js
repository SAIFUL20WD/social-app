import React from 'react';
import { useHistory } from 'react-router-dom';
import './Post.css'

const Post = (props) => {
    const { title, body, id } = props.post;
    let history = useHistory()
    const handleClick = (postId) => {
        history.push(`post/${postId}`)
    }

    return (
        <div className="post-container">
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={() => handleClick(id)} className="main-btn">Detail</button>
            <button onClick={() => handleClick(id)} className="main-btn">Comments</button>
        </div>
    );
};

export default Post;