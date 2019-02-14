import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 250
  }
};

class CatalogItem extends Component {
  static splitText(string, size) {
    if (string.length > size) {
      return `${string.slice(0, size - 3)}...`;
    }

    return string;
  }

  render() {
    const { classes, data } = this.props;
    const TITLE_MAX_SIZE = 27;
    const DESCRIPTION_MAX_SIZE = 140;

    return (
      <Card className={classes.card}>
        {this.props.isUserLogged && (
          <Typography color="textSecondary" component="p">
            Код: {data.code}
          </Typography>
        )}
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`data:image/png;base64,${data.img}`}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {CatalogItem.splitText(data.name, TITLE_MAX_SIZE)}
            </Typography>
            <Typography component="p">
              {CatalogItem.splitText(data.description, DESCRIPTION_MAX_SIZE)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Tooltip title="Add to cart" enterDelay={500} leaveDelay={200}>
            <Button size="large" color="primary">
              <i className="fa fa-lg fa-cart-arrow-down" />
            </Button>
          </Tooltip>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h6" component="h2">
              {data.price} rub
            </Typography>
            <Button variant="contained" size="medium" color="secondary">
              Купить
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

CatalogItem.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isUserLogged: PropTypes.bool
};

export default withStyles(styles)(CatalogItem);
