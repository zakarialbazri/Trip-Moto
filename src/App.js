import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Style from "./App.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/footer";
import { InfinitySpin } from 'react-loader-spinner'
import Test from './components/test';


 


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
            ariaLabel="loading"
            
                          /></div>}
      {!erreur && !isLoading && (
        <>
     <div className='Body'>
        <Routes>
            <Route exact path='/' element={<Navbar />} />
            <Route exact path='/login' element={<Footer />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/test' element={<Test />} />
       </Routes> 
     </div>
        
       
       </>
       )}
     </BrowserRouter>
  );
};

export default App;
