// React imports
import React, { Component } from "react";

// Material Design
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// My stuff
import appearance from "./services/appearance";
// import appHeader from "./components/appHeader";

const initialState = {
  theme: appearance.defaultTheme
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { theme } = this.state;
    const greeting = "Good morning, ";
    const me = "Bill";

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <AppBar color="primary" position="static">
            <Box display="flex" flexGrow={1}>
              <Toolbar>
                <Typography color="inherit" variant="h6">
                  WATERMELON
                </Typography>
              </Toolbar>
            </Box>
          </AppBar>{" "}
          <div>
            {greeting}
            {me}
          </div>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
