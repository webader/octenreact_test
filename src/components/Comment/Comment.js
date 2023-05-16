import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id, name, email, body, postId} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <div>postId: {postId}</div>
            <button onClick={()=>navigate(`${postId}`)}>get current post</button>
        </div>
    );
};

export {Comment};