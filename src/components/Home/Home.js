import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    }, [])
    return (
        <div className="home-container">
            {
                posts.map(post=> <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;