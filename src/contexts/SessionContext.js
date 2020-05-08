// React imports
import React, { createContext, useReducer, useContext } from "react";

// My imports
import { SessionReducer } from "../reducers/SessionReducer";

const initialState = {
  email: "",
  password: "",
  isAuthenticated: false
};

export const SessionContext = createContext();

const SessionContextProvider = props => {
  const [session, dispatch] = useReducer(SessionReducer, initialState);

  return (
    <SessionContext.Provider value={{ session, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const contextValue = useContext(SessionContext);
  return contextValue;
};

export default SessionContextProvider;
