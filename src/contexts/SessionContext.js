// React imports
import React, { createContext, useReducer, useContext } from "react";

// My imports
import { SessionReducer } from "../reducers/SessionReducer";

// initial state values
const initialState = {
  email: "",
  password: "",
  isAuthenticated: false
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
  const contextValue = useContext(SessionContext);
  return contextValue;
};

export default SessionContextProvider;
