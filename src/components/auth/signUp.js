// React imports
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import validate from "validate.js";

// Material UI
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// My imports
import { SessionContext, useSession } from "../../contexts/SessionContext";
import constraints from "../../constraints";
import authentication from "../../services/authentication";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmedPwd, setConfirmedPwd] = useState("");
  const { session, dispatch } = useSession(SessionContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "SIGNIN", session: { email, password } });
  };
  const classes = useStyles();
  const signUp = () => {
    const {
      emailAddress,
      emailAddressConfirmation,
      password,
      passwordConfirmation
    } = this.state;

    const errors = validate(
      {
        emailAddress: emailAddress,
        emailAddressConfirmation: emailAddressConfirmation,
        password: password,
        passwordConfirmation: passwordConfirmation
      },
      {
        emailAddress: constraints.emailAddress,
        emailAddressConfirmation: constraints.emailAddressConfirmation,
        password: constraints.password,
        passwordConfirmation: constraints.passwordConfirmation
      }
    );

    if (errors) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState(
        {
          performingAction: true,
          errors: null
        },
        () => {
          authentication
            .signUpWithEmailAddressAndPassword(emailAddress, password)
            .then(value => {
              this.props.dialogProps.onClose();
            })
            .catch(reason => {
              const code = reason.code;
              const message = reason.message;

              switch (code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                case "auth/operation-not-allowed":
                case "auth/weak-password":
                  this.props.openSnackbar(message);
                  return;

                default:
                  this.props.openSnackbar(message);
                  return;
              }
            })
            .finally(() => {
              this.setState({
                performingAction: false
              });
            });
        }
      );
    }
  };

  return (
    <Container maxWidth="sm">
      {session.isAuthenticated ? <Redirect to="/signin" n /> : null}
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
          onChange={e => setFirstName(e.target.value)}
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
          onChange={e => setLastName(e.target.value)}
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
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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
