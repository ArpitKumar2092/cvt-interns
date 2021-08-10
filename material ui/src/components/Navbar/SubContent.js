import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  foot: {
    padding: theme.spacing(5, 9, 6),
    background: " #f0f5fc ",
  },
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
    </React.Fragment>
  );
}
