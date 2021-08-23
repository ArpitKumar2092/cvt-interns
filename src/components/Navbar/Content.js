import React from "react";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8),
  },

  btn: {
    background: "#ef5f22",
    color: "#FFFFFF",
    marginRight: "20px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,.3)",
    padding:"6px 17px 6px 17px"
  },

  btn1: {
    color: "#ef5f22",
    background: "#FFFFFF",
  },
  heroContentHead: {
    marginLeft: "131px",
    marginRight: "113px",
  },
  photo: {
    width: "417px",
    height: "385px",
    marginRight: "94px",
    borderRadius: "inherit",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="ls" className={classes.heroContent}>
        <Toolbar>
          <Typography
            variant="h2"
            color="textPrimary"
            className={classes.heroContentHead}
          >
            Supercharging Somali Startups
            <Typography variant="h5" color="textSecondary" component="p">
              we supercharge Somali startup by providing traning, mentoring and
              funding.
            </Typography>
            <Button className={classes.btn}>Learn More</Button>
            <Button className={classes.btn1}>Partner with us</Button>
          </Typography>

          <Avatar
            className={classes.photo}
            src="static/images/avatar/Background.png"
          />
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}
