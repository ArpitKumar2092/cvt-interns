import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Style";
import Container from "@material-ui/core/Container";
import { tiers } from "./TierData";

export default function Pricing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="xl" component="main" className={classes.foot}>
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
