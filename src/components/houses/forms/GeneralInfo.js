// React imports
import React, { useState } from "react";

// Material UI
// import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const GeneralInfo = () => {
  // use state hooks
  const classes = useStyles();
  const [streetAddress, setStreetAddress] = useState();
  const [addressLine2, setAddressLine2] = useState();
  const [city, setCity] = useState();
  const [stateUS, setStateUS] = useState();
  const [zipCode, setZipCode] = useState();
  // event functions
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    if (e.event.id === "streetAddress") setStreetAddress(e.event.value);
    else if (e.event.id === "addressLine2") setAddressLine2(e.event.value);
    else if (e.event.id === "city") setCity(e.event.value);
    else if (e.event.id === "stateUS") setStateUS(e.event.value);
    else setZipCode(e.event.value);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
        >
          OK
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.margin}
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default GeneralInfo;
