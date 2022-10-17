import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CodeIcon from '@material-ui/icons/Code';
import { useStyles }from './styles'

const WhyCachiQL = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent1}>
                <Typography variant="h2">
                  SOLVING THE N+1 ISSUE OF GRAPHQL
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={5}>
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <AutorenewIcon className={classes.playIcon} />
                <Typography gutterBottom variant="h5" component="h2">
                  The Magic of CachiQL
                </Typography>
                <Typography>
                  Store, access and maintain deeply-nested GraphQL queries with
                  CachiQL.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <QueryBuilderIcon className={classes.playIcon} />
                <Typography gutterBottom variant="h5" component="h2">
                  Saving Time
                </Typography>
                <Typography>
                  Reduce the amount of database round trips for nested GraphQL
                  queries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={3} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <CodeIcon className={classes.playIcon} />
                <Typography gutterBottom variant="h5" component="h2">
                  Documentation
                </Typography>
                <Typography>
                  CachiQL is a well-documented, light-weight, open source
                  library, built for performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhyCachiQL;
