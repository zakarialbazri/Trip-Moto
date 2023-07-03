import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Footer from './components/footer';



const App = () => { 
  

  return (
   <div>
     <Navbar />
     <Menu />
     <Footer />
    </div>
  );
};

export default App;
