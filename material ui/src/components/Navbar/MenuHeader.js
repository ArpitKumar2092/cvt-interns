import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(3, 2),
    color: "#858892",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
