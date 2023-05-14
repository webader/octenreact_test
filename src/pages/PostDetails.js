import React, {useEffect, useState} from 'react';
import {json, useParams} from "react-router-dom";

const PostDetails = () => {
    let [post, setPost] = useState(null);
    let {id} = useParams();

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(value => value.json())
            .then(value => {
                setPost({...value})
                // console.log(value);
            });
    },[id]);
    return (
        <div>
            {post && JSON.stringify(post)}
        </div>
    );
};

export default PostDetails;
