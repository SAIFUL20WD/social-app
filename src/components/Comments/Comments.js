import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const {name, body, email} = props.comment;
    return (
        <div className="comment-container">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Comment: {body}</p>
        </div>
    );
};

export default Comments;