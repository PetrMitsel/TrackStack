import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MyNavbar} from './components/navbar'
import { PostList } from "./components/postlist";
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <MyNavbar />
      <PostList/>
    </div>
  );
}

export default App;