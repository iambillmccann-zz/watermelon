import React, { createContext, Component } from "react";

export const HouseContext = createContext();

const initialHouses = {
  houses: [
    {
      streetAddress: "9 Appletree dr",
      addressLine2: "",
      city: "Matawan",
      stateUS: "NJ",
      zipCode: "07747"
    }
  ]
};

class HouseContextProvider extends Component {
  state = {
    streetAddress: "",
    addressLine2: "",
    city: "",
    stateUS: "",
    zipCode: ""
  };
  render() {
    return (
      <HouseContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

export default HouseContextProvider;
