import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const HomeSummary = props => {
  const classes = useStyles();
  const { house } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/house-placeholder-1.jpg"
          title="Picture of the house"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {house.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {house.streetAddress}
            <br /> {house.city}, {house.stateUS} {house.zipCode}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeSummary;
