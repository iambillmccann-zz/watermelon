// React imports
import React, { useState, useEffect, createContext } from "react";

// Firebase imports
import Firebase from "../../firebase";

const useFirebaseAuthentication = firebase => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  });

  return authUser;
};

export default useFirebaseAuthentication;

const FirebaseContext = createContext();
export const FirebaseProvider = props => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
