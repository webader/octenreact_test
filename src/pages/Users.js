import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
import UserComponent from "../components/UserComponent";
import {Outlet, Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function Users() {
    let apiService = new ApiService('users');
    let [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setUsers(value));

    },[]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
            <hr/>
            <div>
                <h3>details about user</h3>
                <Outlet/>
            </div>

        </div>
    );
};
