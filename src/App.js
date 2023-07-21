import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import "./App.css";
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
import Rating from './components/UserRating/user-ratingg';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import { auth, createUserProfileDocument } from './components/login_signup/sign_in_and_sign_up';
import { AutoModeTwoTone } from '@mui/icons-material';


const App = () => { 
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { isLoading, erreur } = useAuth0();
  const [currantUser, setcurrantUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setcurrantUser(state =>( {
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        });
      }

      setcurrantUser(state => state =  userAuth );
    });
  }, [])
  console.log(currantUser)

  
  /* useEffect(() => {
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
 */
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
          <div style={{backgroundColor:'black'}}>
            <Navbar currantUser={currantUser}/>
          </div>
        <Routes>
            <Route exact path='/' element={  <div className='App'><Menu /> </div>} />
            <Route exact path='/Rides' element={<Rides />} />
            <Route exact path='/Spots' element={<Spots />} />
            <Route exact path='/Profile' element={<Profile />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            {/* <Route exact path='/Rating' element={} /> */}
       </Routes> 
       {/* <div className='divo'>
       {text.map((ele, i) => <Rating text={ele} name={name[i]}/>
        )}        </div> */}

        
     
     
     <Footer />
   
       </>
       )}
     </BrowserRouter>
  );
};

export default App;
