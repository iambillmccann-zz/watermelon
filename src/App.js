// React imports
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// Material Design
import { MuiThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// My stuff
import appearance from "./services/appearance";
import AppHeader from "./components/layout/AppHeader";
import Cards from "./components/Cards";

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

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader />
          <Container maxWidth="xl">
            <Box m={3}>
              <Cards />
            </Box>
          </Container>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
