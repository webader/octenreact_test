import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

const App = () => {
  return (
      <div>
          <div>
              <h2>menu</h2>
                  <ul>
                      <li><Link to={'/'}>home</Link></li>
                      <li><Link to={'/layout'}>layout</Link></li>
                      <li><Link to={'/about'}>about</Link></li>
                  </ul>
          </div>

          <div>
              <h2>content</h2>
              <Routes>
                  <Route index path={'/'} element={<Home/>}/>
                  <Route path={'/layout'} element={<Layout/>}>
                      <Route path={'users'} element={<Users/>}/>
                      <Route path={'posts'} element={<Posts/>}/>
                      <Route path={'comments'} element={<Comments/>}/>
                  </Route>


                  <Route path={'/about'} element={<About/>}/>
              </Routes>
          </div>
      </div>
  );
};

export default App;
