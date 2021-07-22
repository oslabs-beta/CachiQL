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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  playIcon: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: 50
  },
}));

export const WhyCachiQL = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="h2" fontWeight="bold" emphasis="high">
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
                  Leveraging the power of Redis to rapidly return previously
                  cached GraphQL queries.
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
    </React.Fragment>
  );
};
