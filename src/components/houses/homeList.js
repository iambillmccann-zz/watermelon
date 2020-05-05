// React import
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Material UI import
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

// My components
import HomeSummary from "./HomeSummary";
import { HouseContext, useHouses } from "../../contexts/HouseContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

// GetURL uses uuid to obtain a unique identifier for a new home. The identifier is only a temporary placeholder,
// the permanent id is computed in the HouseReducer when the data is stored.
const GetURL = () => {
  return "/homes/" + uuidv4();
};

const HomeList = () => {
  const classes = useStyles();
  const { houses } = useHouses(HouseContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {houses.map(house => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={house.id}>
              <HomeSummary house={house} />
            </Grid>
          );
        })}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        component={Link}
        to={GetURL}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default HomeList;
