import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    })
    
    return (
        <div>
            <h1>Comments: {comments.length}</h1>
            {
                comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
            }
        </div>
    );
};

export default PostDetail;