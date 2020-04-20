// React imports
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

// My imports
import Dashboard from "./components/dashboard/Dashboard";
import AppHeader from "./components/layout/AppHeader";
import HomeDetail from "./components/houses/HomeDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <CssBaseline />
          <AppHeader />
          <Container maxWidth="xl">
            <Box m={3}>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/homes/:id" component={HomeDetail} />
              </Switch>
            </Box>
          </Container>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
