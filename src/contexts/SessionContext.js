// React imports
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Firebase imports
import firebase from "../firebase";

// My imports
import { SessionReducer } from "../reducers/SessionReducer";

// initial state values
const initialState = {
  name: null,
  email: null,
  photourl: null,
  emailVerified: false,
  uid: null
};

// create the context
export const SessionContext = createContext();

// create the context provider
const SessionContextProvider = props => {
  const [session, dispatch] = useReducer(SessionReducer, initialState);
  return (
    <SessionContext.Provider value={{ session, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  );
};

// create the custom hook
export const useSession = () => {
  const contextState = useContext(SessionContext);
  const { dispatch } = contextState;
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      var currentUser = {};
      if (user) {
        currentUser = {
          name: user.displayName,
          email: user.email,
          photourl: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid
        };
      } else {
        currentUser = initialState;
      }
      dispatch({
        type: "UPDATE",
        session: currentUser
      });
    });
  }, [dispatch]);
  return contextState;
};

export default SessionContextProvider;
