import React from 'react';
import axios from "axios";
import Post from "../Post/Post";

const Posts = () => {
    const posts = axios('https://jsonplaceholder.typicode.com/posts').then(post=><Post key={post} post={post}/>)
    return (
        <div>
            <Post />
        </div>
    );
};

export default Posts;