import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import CQDemo from '../../client/assets/cachiqlDemo.png';
import Sparkle from 'react-sparkle';
import { useStyles } from './styles'

const Demologo = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} id="demo" />
      <Sparkle />

      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Experience Magical CachiQL
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Take a look at all that CachiQL has to offer by using GraphiQL to
              make a query.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Demologo;
