// React imports
import React from "react";
import { Redirect } from "react-router-dom";

// Material UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// My imports
import { SessionContext, useSession } from "../../contexts/SessionContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(100),
      height: theme.spacing(50)
    }
  },
  content: {
    textAlign: "center",
    margin: theme.spacing(3)
  }
}));

const LaunchPage = () => {
  const { session } = useSession(SessionContext);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      {session.isAuthenticated ? <Redirect to="/" n /> : null}
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.content}>
            <img
              src="/static/images/house-placeholder-2.jpg"
              alt="The easiest way to price a listing"
            />
            <Typography variant="h5">
              The eastiest way to price a listing.
            </Typography>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default LaunchPage;
