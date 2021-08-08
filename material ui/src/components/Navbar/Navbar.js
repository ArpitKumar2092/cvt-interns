import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from "@material-ui/core/Avatar";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PolymerIcon from "@material-ui/icons/Polymer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  return (
    <Grid container style={{ margin: "120px auto", width: "1250px" }}>
      <Grid item xs={12}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: "center" }}>
            <Toolbar>
              <PolymerIcon />

              <Typography>Innvote Ventures</Typography>
            </Toolbar>

            <Grid item xs={8}>
              <Tabs>
                <Tab label="About Us" />
                <Tab label="Programmers" />
                <Tab label="Startup" />
                <Tab label="Events" />
              </Tabs>
            </Grid>

            <Button style={{ background: "white", color: "#5d6066" }}>
              Apply for 2019
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid item>
        <Grid item xs>
          <Typography>
            <h1>Superchanging Somali Startups</h1>

            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur
            </p>
          </Typography>
          <div className={classes.root}>
            <ButtonGroup
              orientation="horizantal"
              color="primary"
              aria-label="horizantal contained primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Avatar
              alt="image"
              width="600px"
              height="600px"
              src="/static/images/avatar/Background.png"
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
