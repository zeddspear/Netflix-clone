import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Context/firebaseContext';

export default function UseAuthListner() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listner();
  }, [firebase]);

  return { user };
}
