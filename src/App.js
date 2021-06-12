import React from 'react';
import './App.css'
import Navbar from './Navbar/Navbar.js';
import Menu from './subNavBar/Menu.js';
import Footer from './Footer/Footer';
import Image from './Image/Image';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <Image/>
      <Footer/>
    </div>
  );
}

export default App;
