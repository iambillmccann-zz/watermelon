import React, { createContext, useState } from "react";

export const HouseContext = createContext();
const initialState = [
  {
    id: "1",
    name: "Our house",
    streetAddress: "9 Appletree dr",
    addressLine2: "",
    city: "Matawan",
    stateUS: "NJ",
    zipCode: "07747"
  },
  {
    id: "2",
    name: "Dad's house",
    streetAddress: "14034 Golfview",
    addressLine2: "",
    city: "Livonia",
    stateUS: "MI",
    zipCode: "48145"
  }
];

const HouseContextProvider = props => {
  const [houses, setHouses] = useState(initialState);
  return (
    <HouseContext.Provider value={{ houses }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
