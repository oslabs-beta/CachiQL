import React from 'react';
import { FloatNavigationMenuStyle } from './Components/Navigation';
import { Graphiql } from './Components/GraphiQL';
import { BuildBarChart } from './Components/BarChart';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import CachiQLLogo from '../../dist/assets/cachiql_(1).svg';
import { makeStyles } from '@material-ui/core/styles';
import { Metrics } from './Components/Metrics';
import { Queries } from './Components/Queries';
import clsx from 'clsx';
import { Banner } from './Components/Banner';
import { WhyCachiQL } from './Components/Cards';
import { Demo } from './Components/Demologo';
import Stepper from './Components/Stepper';
import { Linkage } from './Components/PersonalLinks';
import { Avatars } from './Components/Avatars'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 380
  }
}));

const App = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <CssBaseline />
      <FloatNavigationMenuStyle />
      <Banner />
      <WhyCachiQL />
      <Demo />
      <Graphiql />
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
              <BuildBarChart />
            </Paper>
          </Grid>
          {/* Metrics */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Metrics />
            </Paper>
          </Grid>
          {/* Recent Queries */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Queries />
            </Paper>
          </Grid>
        </Grid>
        <Linkage></Linkage>
        
      </Container>
    </div>
  );
};

export default App;
