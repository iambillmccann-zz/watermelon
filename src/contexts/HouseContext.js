// React imports
import React, { createContext, useReducer, useContext } from "react";

// My imports
import { HouseReducer } from "../reducers/HouseReducer";

// initial state values
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

// create context
export const HouseContext = createContext();

// create context provider
const HouseContextProvider = props => {
  const [houses, dispatch] = useReducer(HouseReducer, initialState);
  return (
    <HouseContext.Provider value={{ houses, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

// create the custom hook
export const useHouses = () => {
  const contextValue = useContext(HouseContext);
  return contextValue;
};

export default HouseContextProvider;
