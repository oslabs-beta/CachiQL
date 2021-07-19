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
import { Metrics } from './Components/Metrics'
import clsx from 'clsx';

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
    height: 240
  }
}));

const App = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <CssBaseline />
      <h1>Welcome to CachiQL</h1>
      <FloatNavigationMenuStyle />
      <Graphiql />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
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
        </Grid>
      </Container>
    </div>
  );
};

export default App;
