import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MyNavbar} from './components/navbar'
import { PostList } from "./components/postlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";



export const App: React.FC = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component= {PostList}/>
        </Switch>
      </Router>
    </div>
  );
}

export const API_HOST: string = "http://localhost:4000";
