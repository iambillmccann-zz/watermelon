// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material UI
// import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// My imports
import { HouseContext, useHouses } from "../../../contexts/HouseContext";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const GeneralInfo = () => {
  // use state hooks
  const classes = useStyles();
  const { dispatch } = useHouses(HouseContext);
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateUS, setStateUS] = useState("");
  const [zipCode, setZipCode] = useState("");
  // event functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      house: { name, streetAddress, addressLine2, city, stateUS, zipCode }
    });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          className={classes.margin}
          autoComplete="name"
          fullWidth
          label="name"
          placeholder="My latest listing"
          required
          type="text"
          value={name}
          variant="outlined"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="streetAddress"
          className={classes.margin}
          autoComplete="street-address"
          fullWidth
          label="street address"
          placeholder="66 Main St."
          required
          type="text"
          value={streetAddress}
          variant="outlined"
          onChange={e => setStreetAddress(e.target.value)}
        />
        <TextField
          id="addressLine2"
          className={classes.margin}
          autoComplete="street-address-line-2"
          fullWidth
          label="apartment, suite, or number"
          type="text"
          value={addressLine2}
          variant="outlined"
          onChange={e => setAddressLine2(e.target.value)}
        />
        <TextField
          id="city"
          className={classes.margin}
          autoComplete="city"
          fullWidth
          label="city"
          placeholder="Pleasantville"
          required
          type="text"
          value={city}
          variant="outlined"
          onChange={e => setCity(e.target.value)}
        />
        <TextField
          id="stateUS"
          className={classes.margin}
          autoComplete="state"
          fullWidth
          label="state"
          placeholder="VT"
          required
          type="text"
          value={stateUS}
          variant="outlined"
          onChange={e => setStateUS(e.target.value)}
        />
        <TextField
          id="zipCode"
          className={classes.margin}
          autoComplete="zip-code"
          fullWidth
          label="zip"
          placeholder="98352"
          required
          type="text"
          value={zipCode}
          variant="outlined"
          onChange={e => setZipCode(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
          type="submit"
        >
          OK
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.margin}
          type="reset"
          component={Link}
          to="/dashboard"
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default GeneralInfo;
