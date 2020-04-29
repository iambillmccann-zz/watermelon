// React imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

// My imports
import Dashboard from "./components/dashboard/Dashboard";
import AppHeader from "./components/layout/AppHeader";
import HomeDetail from "./components/houses/HomeDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App = () => {
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <Container maxWidth="xl">
        <Box m={3}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/homes/:id" component={HomeDetail} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
