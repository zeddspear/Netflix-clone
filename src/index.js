import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { GlobalStyle } from './Global.style';
import { FirebaseContext } from './Context/firebaseContext';
import { firebase } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FirebaseContext.Provider value={firebase}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>
);
