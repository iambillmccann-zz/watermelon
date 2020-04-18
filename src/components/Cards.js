// React imports
import React, { Component } from "react";

// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// My stuff
import IndexCard from "./IndexCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

class Cards extends Component {
  render() {
    const classes = useStyles();
    const home = {
      url: "/static/images/lizard.jpg",
      price: "$450,000.01",
      addressLine1: "9 Appletree Dr",
      addressLine2: "Matawan, NJ 07747"
    };

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <IndexCard cardInfo={home} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cards;
