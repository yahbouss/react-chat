import './App.scss';
import {useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';

import Navbar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';
import Chat from './components/Chat/Chat.component';
import Join from './components/Join/Join.component'

let username

const App = () => {
  useEffect(() => {
    document.title = "Chat"
 }, []);
  return (
    <Router>
      <Navbar noNav="False"/>
      <Route exact path='/' component={Join}/>

      <Route path='/chatroom'><Chat username={username}/></Route>

      <Footer/>
    </Router>
  );
}

export default App;
