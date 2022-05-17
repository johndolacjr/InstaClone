import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, fieldValue } from './lib/firebase';
import'./styles/app.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<firebaseContext.Provider value={{ firebase, FieldValue }}>
  <App />
  </firebaseContext.Provider>, 
  document.getElementById('root')
  );
