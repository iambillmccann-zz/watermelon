// React imports
import React, { createContext, useReducer } from "react";

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
  // alert("The number of houses is " + houses.length);
  return (
    <HouseContext.Provider value={{ houses, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
