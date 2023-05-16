import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {Post} from "./components/Post/Post";

const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'todos'}/>}/>
              <Route path={'todos'} element={<TodosPage/>}/>
              <Route path={'albums'} element={<AlbumsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}>
                  <Route path={':postId'} element={<Post/>}/>
              </Route>
          </Route>
      </Routes>
  );
};

export default App;
