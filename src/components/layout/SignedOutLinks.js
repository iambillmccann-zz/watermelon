// React imports
import React from "react";

// Material UI import
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const SignedOutLinks = () => {
  return (
    <Box component="span" display="flex">
      <Button color="inherit">Sign In</Button>
      <Button color="inherit">Sign Up</Button>
    </Box>
  );
};

export default SignedOutLinks;
