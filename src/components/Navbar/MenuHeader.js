import React from "react";
import Link from "@material-ui/core/Link";
import { useStyles } from "./Style";

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
