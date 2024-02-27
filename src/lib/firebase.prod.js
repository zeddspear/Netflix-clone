import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { seedDatabase } from '../seed';

// we need seeds somehow

// we need config
const config = {
  apiKey: process.env.REACT_APP_API_FIREBASE_KEY,
  authDomain: 'netflix-clone-a6ded.firebaseapp.com',
  projectId: 'netflix-clone-a6ded',
  storageBucket: 'netflix-clone-a6ded.appspot.com',
  messagingSenderId: '828819142181',
  appId: '1:828819142181:web:58b481d4ba0b0dadb5f1cc'
};

const firebase = Firebase.initializeApp(config);

// this is seed file only need to put data on firebase database
//seedDatabase(firebase);

export { firebase };
