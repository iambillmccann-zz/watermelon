// React imports
import React from "react";

// Material UI imports
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const HousePanel = props => {
  const classes = useStyles();
  const sectionTitle = props.title;
  // const id = props.id;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{sectionTitle}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default HousePanel;
