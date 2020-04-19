// React imports
import React from "react";

// Material UI import
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const SignedInLinks = () => {
  return (
    <Box component="span" display="flex">
      <Button color="inherit">Sign Out</Button>
      <Avatar>WM</Avatar>
    </Box>
  );
};

export default SignedInLinks;
