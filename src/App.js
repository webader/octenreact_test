import React from 'react';
import {useRoutes} from "react-router-dom";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";

const App = () => {
let routes = [
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                element: <Users/>,
                path: 'users',
                children:[
                    {
                        element:<UserDetails/>,
                        path:':id'

                    }
                ]
            },
            {element: <Posts/>,path: 'posts'}
        ]
    }
]
    let element = useRoutes(routes);
  return (
      <div>
          {/*app*/}
          {/*    layout*/}
          {/*        users*/}
          {/*        posts*/}
          {element}

      </div>
  );
};

export default App;
