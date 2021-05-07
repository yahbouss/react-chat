import './App.scss';
import {useEffect} from 'react'

import Navbar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';
import Chat from './components/Chat/Chat.component';




const App = () => {
  useEffect(() => {
    document.title = "Chat"
 }, []);
  return (
    <>
      <Navbar/>
      <Chat/>
      <Footer/>
    </>
  );
}

export default App;
