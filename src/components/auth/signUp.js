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
    margin: theme.spacing(3)
  }
}));

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [confirmedPwd, setConfirmedPwd] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    if (e.event.id === "userid") setEmail(e.event.value);
    else if (e.event.id === "firstname") setFirstName(e.event.value);
    else if (e.event.id === "lastname") setLastName(e.event.value);
    else if (e.event.id === "confirmedpwd") setConfirmedPwd(e.event.value);
    else setPassword(e.event.value);
  };
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <h1 className={classes.margin}>Sign Up</h1>
        <TextField
          id="firstname"
          className={classes.margin}
          autoComplete="first-name"
          //disabled={performingAction}
          //error={!!(errors && errors.emailAddress)}
          fullWidth
          //helperText={
          //  errors && errors.emailAddress ? errors.emailAddress[0] : ""
          //}
          label="First Name"
          required
          value={firstName}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="lastname"
          className={classes.margin}
          autoComplete="last-name"
          //disabled={performingAction}
          //error={!!(errors && errors.emailAddress)}
          fullWidth
          //helperText={
          //  errors && errors.emailAddress ? errors.emailAddress[0] : ""
          //}
          label="Last Name"
          required
          value={lastName}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="userid"
          className={classes.margin}
          autoComplete="email"
          //disabled={performingAction}
          //error={!!(errors && errors.emailAddress)}
          fullWidth
          //helperText={
          //  errors && errors.emailAddress ? errors.emailAddress[0] : ""
          //}
          label="E-mail address"
          placeholder="john@doe.com"
          required
          value={email}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="password"
          className={classes.margin}
          autoComplete="current-password"
          //disabled={performingAction}
          //error={!!(errors && errors.password)}
          fullWidth
          //helperText={errors && errors.password ? errors.password[0] : ""}
          label="Password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          required
          type="password"
          value={password}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="confirmedpwd"
          className={classes.margin}
          autoComplete="confirm-password"
          //disabled={performingAction}
          //error={!!(errors && errors.password)}
          fullWidth
          //helperText={errors && errors.password ? errors.password[0] : ""}
          label="Retype Password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          required
          type="password"
          value={confirmedPwd}
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
