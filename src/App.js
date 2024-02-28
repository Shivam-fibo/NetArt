// App.js
import React from 'react';
import Footer from './Componets/Footer';
import HeroSection from './Componets/HeroSection';
import HeroSection2 from './Componets/HeroSection2';
import NavBar from './Componets/NavBar';
import './index.css'

const App = () => {
  return (
    <div>
     <NavBar/>
     <HeroSection/>
     <HeroSection2/>
     <Footer/>
    </div>
  );
};

export default App;
