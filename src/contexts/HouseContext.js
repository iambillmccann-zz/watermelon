// React imports
import React, { createContext, useReducer, useContext } from "react";

// My imports
import { HouseReducer } from "../reducers/HouseReducer";

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

export const HouseContext = createContext();
const HouseContextProvider = props => {
  const [houses, dispatch] = useReducer(HouseReducer, initialState);
  console.log(houses);
  return (
    <HouseContext.Provider value={{ houses, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export const useHouses = () => {
  const contextValue = useContext(HouseContext);
  return contextValue;
};

export default HouseContextProvider;
