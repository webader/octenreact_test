import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts',
    header: {'Content-type': 'application/json; charset=UTF-8'},
});

const savePost = (data) => (
    axiosInstance.post('',{data}));

export {savePost}