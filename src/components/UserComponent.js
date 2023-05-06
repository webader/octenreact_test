import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({item:{id,name}}) => {
    return (
        <div>
            {id} - {name} <Link to={id.toString()}>details</Link>
        </div>
    );
};

export default UserComponent;