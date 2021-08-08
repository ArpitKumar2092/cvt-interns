import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PolymerIcon from "@material-ui/icons/Polymer";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    background: "linear-gradient(to right, #f0f5fc 60%, #91d2f0)",
    alignItems: "center",
  },
  toolbar: {
    flexWrap: "wrap",
    color: "#EF5F22",
    width: "1200px",
  },
  toolbarTitle: {
    flexGrow: 1,
    wordWrap: "break-word",
  },
  link: {
    margin: theme.spacing(3, 2),
    color: "#858892",
  },
  links: {
    background: "white",
    color: "#A3A5AA",
  },
  heroContent: {
    padding: theme.spacing(8),
  },
  heroContentHead: {},
  foot: {
    padding: theme.spacing(5, 9, 6),
    background: " #f0f5fc ",
  },
  ftile: {},
  furtile: {
    padding: "160px",
  },
  furtility: {
    background: "#f0f5fc",
    boxShadow: "none",
  },
  sigma: {
    color: "#73cae5",
  },
  title: {},
  btn: {
    background: "#ef5f22",
    color: "#FFFFFF",
    marginRight: "20px",
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

const tiers = [
  {
    title: "54+",
    subheader: "Startups",
    price: "0",
  },
  {
    title: "13+",
    subheader: "Mentors",
    price: "15",
  },
  {
    title: "140+",
    subheader: "Founder",
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.toolbarTitle}>
                <Toolbar>
                  <PolymerIcon style={{ color: "#EF5F22" }} />
                  Innvote Ventures
                  <nav>
                    <Link
                      variant="button"
                      color="textPrimary"
                      href="#"
                      className={classes.link}
                    >
                      About us
                    </Link>
                    <Link
                      variant="button"
                      color="textPrimary"
                      href="#"
                      className={classes.link}
                    >
                      Programmers
                    </Link>
                    <Link
                      variant="button"
                      color="textPrimary"
                      href="#"
                      className={classes.link}
                    >
                      Startup
                    </Link>
                    <Link
                      variant="button"
                      color="textPrimary"
                      href="#"
                      className={classes.link}
                    >
                      Events
                    </Link>
                  </nav>
                </Toolbar>
              </Typography>

              <Toolbar></Toolbar>

              <Button href="#" className={classes.links}>
                Apply for 2019
              </Button>
            </Toolbar>
          </AppBar>
          {/* Hero unit */}
          <Container maxWidth="ls" className={classes.heroContent}>
            <Toolbar>
              <Typography
                // component="h1"
                variant="h2"
                color="textPrimary"
                className={classes.heroContentHead}
              >
                Supercharging Somali Startups
                <Typography variant="h5" color="textSecondary" component="p">
                  we supercharge Somali startup by providing traning, mentoring
                  and funding.
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

          {/* End hero unit */}
          <Container maxWidth="ls" component="main" className={classes.foot}>
            <Grid
              container
              spacing={6}
              alignItems="flex-end"
              className={classes.ftile}
            >
              {tiers.map((tier) => (
                <Grid item key={tier.title} md={4} className={classes.furtile}>
                  <Card className={classes.furtility}>
                    <CardHeader
                      className={classes.sigma}
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{
                        align: "center",
                        variant: "h1",
                        fontWeight: "600",
                      }}
                      subheaderTypographyProps={{ align: "center" }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
