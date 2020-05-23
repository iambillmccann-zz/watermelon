// React imports
import React from "react";
import { Link } from "react-router-dom";

// Material UI import
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// My imports
// import { SessionContext, useSession } from "../../contexts/SessionContext";
import { signout } from "../../services/firebaseAuth";

const SignedInLinks = () => {
  // const { session, dispatch } = useSession(SessionContext);
  // const handleSignOut = e => {};
  return (
    <Box component="span" display="flex">
      <Button color="inherit" component={Link} to="/" onClick={signout}>
        Sign Out
      </Button>
      <Avatar>WM</Avatar>
    </Box>
  );
};

export default SignedInLinks;
