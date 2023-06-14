import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
    <div>
      {error ? (
        <h1>Error: {error}</h1>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
};

export default App;
