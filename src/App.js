// React imports
import React, { Component } from "react";

// Material Design
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// My stuff
import appearance from "./services/appearance";
import AppHeader from "./components/AppHeader";
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
    const greeting = "Good morning, ";
    const me = "Bill";

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Container maxWidth="md">
          <div>
            {greeting}
            {me}
          </div>
          <Cards />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
