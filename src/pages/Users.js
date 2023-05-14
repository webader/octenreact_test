import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
//import UserComponent from "../components/UserComponent";
import {Outlet, Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import User from "./User";

export default function Users() {
    let apiService = new ApiService('users');
    let [users, setUsers] = useState([]);


    useEffect(()=>{
        // apiService.getAllData().then(value => setUsers(value));
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
        // apiService.getSingleData(id).then(value=>setPost(value));
        return  () => {
            console.log('done');
        }
    },[]);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)

            }
            <h4>user details</h4>
            <Outlet/>

        </div>
    );
};
