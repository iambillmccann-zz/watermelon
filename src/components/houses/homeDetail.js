// React imports
import React from "react";

// Material-ui imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// My imports
import HousePanel from "./HousePanel";
import GeneralInfo from "./forms/GeneralInfo";
import HouseContextProvider from "../../contexts/HouseContext";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const HomeDetails = props => {
  const classes = useStyles();
  const id = props.match.params.id;

  return (
    <div className={classes.root}>
      <HousePanel id={id} title="Address and Location">
        <HouseContextProvider>
          <GeneralInfo />
        </HouseContextProvider>
      </HousePanel>
      <HousePanel id={id} title="Location">
        <Typography>This is where location information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Bathrooms">
        <Typography>This is where bathroom information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Renovations">
        <Typography>This is where renovation information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Living Area">
        <Typography>This is where living area information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Basement">
        <Typography>This is where basement information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Heating and Cooling">
        <Typography>This is where HVAC information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Garage">
        <Typography>This is where garage information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Patios">
        <Typography>This is where patio and porch information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Other Items">
        <Typography>This is where other information goes.</Typography>
      </HousePanel>
      <HousePanel id={id} title="Comparable">
        <Typography>This is where comparable properties go.</Typography>
      </HousePanel>
    </div>
  );
};

export default HomeDetails;
