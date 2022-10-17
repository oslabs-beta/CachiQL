import React, { useEffect, useState } from 'react';
import { FloatNavigationMenuStyle } from './Components/Navigation';
import { Graphiql } from './Components/GraphiQL';
import BarChartComp from './Components/BarChart';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Metrics } from './Components/Metrics';
import clsx from 'clsx';
import Banner from './Components/Banner';
import WhyCachiQL from './Components/Cards/Cards';
import Demologo  from './Components/Demologo';
import Stepper from './Components/Stepper';
import AboutUs from './Components/AboutUs';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 380,
  },
  metrics: {
    alignItems: 'center',
  },
}));

const App: React.FC = () => {
  const [recentQueries, setRecentQueries] = useState<any[]>([]);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const metricsPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.metrics
  );
  return (
    <div>
      <CssBaseline />
      <FloatNavigationMenuStyle />
      <Banner />
      <WhyCachiQL />
      <Demologo />
      <Graphiql {...{ recentQueries, setRecentQueries }} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Stepper />
            </Paper>
          </Grid>
          {/* BuildBarChart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <BarChartComp {...{ recentQueries, setRecentQueries }} />
            </Paper>
          </Grid>
          {/* Metrics */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={metricsPaper}>
              <Metrics {...{ recentQueries, setRecentQueries }} />
            </Paper>
          </Grid>
        </Grid>
        <AboutUs />
      </Container>
    </div>
  );
};

export default App;
