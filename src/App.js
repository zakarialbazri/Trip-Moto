import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from "./App.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { InfinitySpin } from 'react-loader-spinner';
import Menu from './components/Home/home';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/navbar';
import Rides from './components/Rides/rides';
import AboutUs from './components/AboutUs/AboutUs';
import Spots from './components/Trip-Spots/spots';
import Profile from './components/UserProfile/userProfile';



 


const App = () => { 
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { isLoading, erreur } = useAuth0();


  useEffect(() => {
    axios.get('http://localhost:8080/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          setError('Unable to connect to the server. Please ensure it is running.');
        } else {
          setError('An error occurred while fetching the data.');
        }
      });
  }, []);

  return (
    <BrowserRouter>
     
      {erreur && <p>Authentication Error</p>}
      {!erreur && isLoading && 
      <div className='Loading-header' >
      <InfinitySpin 
            width='200'
            color="white"
            ariaLabel="loading"/>
            </div>}
      {!erreur && !isLoading && (
        <>
    
        <Routes>
            <Route exact path='/' element={  <div className='App'><Menu /> </div>} />
            <Route exact path='/Rides' element={<Rides />} />
            <Route exact path='/Spots' element={<Spots />} />
            <Route exact path='/Profile' element={<Profile />} />
       </Routes> 

        
     
     
     <Footer />
   
       </>
       )}
     </BrowserRouter>
  );
};

export default App;
