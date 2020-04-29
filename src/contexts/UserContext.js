import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    isAuthenticated: false
  });

  return (
    <UserContext.Provider value={{ ...auth, setAuth: setAuth }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
