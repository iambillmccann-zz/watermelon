// React imports
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Material UI import
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const SignedInLinks = () => {
  return (
    <Box component="span" display="flex">
      <Button color="inherit" component={RouterLink} to="/">
        Sign Out
      </Button>
      <Avatar>WM</Avatar>
    </Box>
  );
};

export default SignedInLinks;
