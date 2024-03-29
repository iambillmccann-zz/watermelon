// React imports
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import validate from "validate.js";

// Material UI
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import SimpleSnackBar from "../SimpleSnackBar";

// My imports
import { SessionContext, useSession } from "../../contexts/SessionContext";
import constraints from "../../constraints";
import { signup } from "../../services/firebaseAuth";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignUp = props => {
  // form properties
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmedPwd, setConfirmedPwd] = useState("");
  const [errors, setErrors] = useState();
  const { session } = useSession(SessionContext);

  // form actions
  const handleSubmit = e => {
    e.preventDefault();
    enroll();
  };

  // firebase signup function
  const enroll = () => {
    const results = validate(
      {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        confirmedPwd: confirmedPwd
      },
      {
        email: constraints.email,
        password: constraints.password,
        firstName: constraints.firstName,
        lastName: constraints.lastName,
        confirmedPwd: constraints.confirmedPwd
      }
    );

    if (results) {
      setErrors(results);
    } else {
      setErrors(null);
      signup(email, password);
    }
  };

  // Custom hooks
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      {session.email ? <Redirect to="/dashboard" n /> : null}
      <form onSubmit={handleSubmit}>
        <h1 className={classes.margin}>Sign Up</h1>
        <TextField
          id="firstname"
          className={classes.margin}
          autoComplete="first-name"
          error={!!(errors && errors.emailAddress)}
          fullWidth
          helperText={
            errors && errors.emailAddress ? errors.emailAddress[0] : ""
          }
          label="First Name"
          required
          value={firstName}
          variant="outlined"
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          id="lastname"
          className={classes.margin}
          autoComplete="last-name"
          error={!!(errors && errors.emailAddress)}
          fullWidth
          helperText={
            errors && errors.emailAddress ? errors.emailAddress[0] : ""
          }
          label="Last Name"
          required
          value={lastName}
          variant="outlined"
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          id="userid"
          className={classes.margin}
          autoComplete="email"
          error={!!(errors && errors.emailAddress)}
          fullWidth
          helperText={
            errors && errors.emailAddress ? errors.emailAddress[0] : ""
          }
          label="E-mail address"
          placeholder="john@doe.com"
          required
          value={email}
          variant="outlined"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          className={classes.margin}
          autoComplete="current-password"
          error={!!(errors && errors.password)}
          fullWidth
          helperText={errors && errors.password ? errors.password[0] : ""}
          label="Password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          required
          type="password"
          value={password}
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          id="confirmedpwd"
          className={classes.margin}
          autoComplete="confirm-password"
          error={!!(errors && errors.password)}
          fullWidth
          helperText={errors && errors.password ? errors.password[0] : ""}
          label="Retype Password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          required
          type="password"
          value={confirmedPwd}
          variant="outlined"
          onChange={e => setConfirmedPwd(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
