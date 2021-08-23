import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MenuHeader from "./MenuHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Style";

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
                  <i
                    className="fa fa-foursquare"
                    aria-hidden="true"
                    style={{ marginTop: "20px" }}
                  >
                    {" "}
                    Innovate
                    <span style={{ marginLeft: "20px" }}>
                      <br /> ventures
                    </span>
                  </i>
                  <MenuHeader />
                </Toolbar>
              </Typography>
              <Button href="#" className={classes.links}>
                Apply for 2019
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
