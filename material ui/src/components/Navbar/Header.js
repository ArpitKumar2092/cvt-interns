import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Content from "./Content";
import SubContent from "./SubContent";
import MenuHeader from "./MenuHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PolymerIcon from "@material-ui/icons/Polymer";

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

  links: {
    background: "white",
    color: "#A3A5AA",
  },

  
}));

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
                  <MenuHeader />
                </Toolbar>
              </Typography>
             <Button href="#" className={classes.links}>
                Apply for 2019
              </Button>
            </Toolbar>
          </AppBar>
          {/* Hero unit */}
          <Content />

          {/* End hero unit */}
          <SubContent />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
