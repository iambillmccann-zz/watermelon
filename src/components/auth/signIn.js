// React imports
import React from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3)
    }
  }
}));

const SignIn = () => {
  const handleSubmit = e => console.log(e);
  const handleChange = e => console.log(e);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit} className={classes.root}>
          <h2>Sign In</h2>
          <TextField
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
            type="email"
            //value={emailAddress}
            //variant="outlined"
            onChange={handleChange}
          />
          <TextField
            autoComplete="current-password"
            //disabled={performingAction}
            //error={!!(errors && errors.password)}
            fullWidth
            //helperText={errors && errors.password ? errors.password[0] : ""}
            label="Password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            required
            type="password"
            //value={password}
            //variant="outlined"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" disableElevation>
            Sign In
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default SignIn;
