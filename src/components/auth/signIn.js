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
import { signin } from "../../services/firebaseAuth";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const { session } = useSession(SessionContext);
  const handleSubmit = e => {
    e.preventDefault();
    authenticate();
  };
  const classes = useStyles();
  // firebase signin function
  const authenticate = () => {
    const results = validate(
      {
        email: email,
        password: password
      },
      {
        email: constraints.email,
        password: constraints.password
      }
    );

    if (results) {
      setErrors(results);
    } else {
      setErrors(null);
      signin(email, password);
    }
  };

  return (
    <Container maxWidth="sm">
      {session.email ? <Redirect to="/dashboard" n /> : null}
      <form onSubmit={handleSubmit}>
        <h1 className={classes.margin}>Sign In</h1>
        <TextField
          id="userid"
          className={classes.margin}
          autoComplete="email"
          //disabled={performingAction}
          error={!!(errors && errors.emailAddress)}
          fullWidth
          helperText={
            errors && errors.emailAddress ? errors.emailAddress[0] : ""
          }
          label="E-mail address"
          placeholder="john@doe.com"
          required
          type="email"
          value={email}
          variant="outlined"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          className={classes.margin}
          autoComplete="current-password"
          //disabled={performingAction}
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
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
