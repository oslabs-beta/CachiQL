import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CQDemoLogo from '../../assets/whitedemo1024.svg';
// import CQDemo from '../../client/assets/cachiqlDemo.png';
import Sparkle from 'react-sparkle';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    background: 'linear-gradient(#111425,#3751e0)',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'linear-gradient(#111425,#3751e0)',
  },
  svg_demo: {
    transform: 'scale(1.0)',
    position: 'relative',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export const Demo = () => {
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
