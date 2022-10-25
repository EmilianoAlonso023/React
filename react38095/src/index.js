import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDK4qgp_LB9O58oo_AUKpGMdAgOs-ewDC4",
  authDomain: "react38095-6e5b7.firebaseapp.com",
  projectId: "react38095-6e5b7",
  storageBucket: "react38095-6e5b7.appspot.com",
  messagingSenderId: "601567296274",
  appId: "1:601567296274:web:d6b043279bd2f872ed11cb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

