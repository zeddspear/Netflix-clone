import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Context/firebaseContext';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => {
          return { docID: contentObj.id, ...contentObj.data() };
        });
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
}
