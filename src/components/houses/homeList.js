import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

const HomeList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <IndexCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default homeList;
