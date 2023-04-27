import React from 'react';

const Post = ({post}) => {
    const {id,userId,title,body}= post;
    return (
        <div>
            <div>id: {post.id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;