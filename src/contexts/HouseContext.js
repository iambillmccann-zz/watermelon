import React, { createContext, useState } from "react";

export const HouseContext = createContext();

const HouseContextProvider = props => {
  const [houses, setHouses] = useState([
    {
      streetAddress: "9 Appletree dr",
      addressLine2: "",
      city: "Matawan",
      stateUS: "NJ",
      zipCode: "07747"
    },
    {
      streetAddress: "14034 Golfview",
      addressLine2: "",
      city: "Livonia",
      stateUS: "MI",
      zipCode: "48145"
    }
  ]);
  return (
    <HouseContext.Provider value={{ houses }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
