// React imports
import React from "react";
import { Link } from "react-router-dom";

// Material UI import
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const SignedOutLinks = () => {
  return (
    <Box component="span" display="flex">
      <Button color="inherit" component={Link} to="/SignIn">
        Sign In
      </Button>
      <Button color="inherit" component={Link} to="/SignUp">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignedOutLinks;
