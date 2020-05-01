// React imports
import React from "react";
import { Link } from "react-router-dom";

// Material-UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Home from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

// My components
import SignedInLinks from "../../components/layout/SignedInLinks";
import SignedOutLinks from "../../components/layout/SignedOutLinks";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  links: {
    position: "absolute",
    right: 10
  }
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <IconButton
          id="home-button"
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          component={Link}
          to="/dashboard"
        >
          <Home />
        </IconButton>{" "}
        <Typography variant="h6" className={classes.title}>
          WATERMELON
        </Typography>
        <SignedOutLinks className={classes.links} />
        <SignedInLinks className={classes.links} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
