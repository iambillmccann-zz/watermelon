// React and JavaScript imports
import { v4 as uuidv4 } from "uuid";

export const HouseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          id: uuidv4(),
          name: action.house.name,
          streetAddress: action.house.streetAddress,
          addressLine2: action.house.addressLine2,
          city: action.house.city,
          stateUS: action.house.stateUS,
          zipCode: action.house.zipCode
        },
        ...state
      ];
    case "REMOVE":
      return state.filter(house => house.id !== action.id);
    default:
      return state;
  }
};
