// React imports
import React, { Component } from "react";

// Material-UI components
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class appHeader extends Component {
  render() {
    return (
      <AppBar color="primary" position="static">
        <Box display="flex" flexGrow={1}>
          <Toolbar>
            <Typography color="inherit" variant="h6">
              WATERMELON
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    );
  }
}

export default appHeader;
