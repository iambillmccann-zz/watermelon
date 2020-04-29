// React imports
import React from "react";

// Material-ui imports
import { makeStyles } from "@material-ui/core/styles";

// My imports
import HousePanel from "./HousePanel";
import GeneralInfo from "./forms/GeneralInfo";

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
        <GeneralInfo />
      </HousePanel>
      <HousePanel id={id} title="Location">
        <p>This is where location information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Bathrooms">
        <p>This is where bathroom information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Renovations">
        <p>This is where renovation information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Living Area">
        <p>This is where living area information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Basement">
        <p>This is where basement information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Heating and Cooling">
        <p>This is where HVAC information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Garage">
        <p>This is where garage information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Patios">
        <p>This is where patio and porch information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Other Items">
        <p>This is where other information goes.</p>
      </HousePanel>
      <HousePanel id={id} title="Comparable">
        <p>This is where comparable properties go.</p>
      </HousePanel>
    </div>
  );
};

export default HomeDetails;
