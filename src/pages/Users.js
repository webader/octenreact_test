import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
import UserComponent from "../components/UserComponent";

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

        </div>
    );
};
