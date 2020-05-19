// React imports
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Firebase imports
import firebase, { auth } from "../firebase";

// My imports
import { SessionReducer } from "../reducers/SessionReducer";

// initial state values
const initialState = {
  email: null,
  password: null,
  isAuthenticated: false,
  firebase: firebase
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

// create the customer
export const useSession = () => {
  const contextState = useContext(SessionContext);
  useEffect(contextState => {
    const unlisten = auth.onAuthStateChanged(contextState => {
      const { session, dispatch } = contextState; // deconstruct the context state
      const { email, password } = session; // deconstruct the session object
      const isAuthenticated = email ? true : false;
      dispatch({
        type: "UPDATE",
        session: { email, password, isAuthenticated }
      });
    });
    return () => {
      unlisten();
    };
  });
  return contextState;
};

export default SessionContextProvider;
