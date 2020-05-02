import React, { createContext, useState } from "react";

export const HouseContext = createContext();

const HouseContextProvider = props => {
  const [house, setHouse] = useState({
    streetAddress: "",
    addressLine2: "",
    city: "",
    stateUS: "",
    zipCode: ""
  });

  return (
    <HouseContext.Provider value={{ ...house, setHouse: setHouse }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
