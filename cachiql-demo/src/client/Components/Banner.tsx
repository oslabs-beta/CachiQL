import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CachiQLLogo from '../../assets/white1024.svg';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    width: '100%',
    background: 'linear-gradient(#111425,#3751e0)',
    padding: theme.spacing(8, 0, 6),
    color: theme.palette.common.white,
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    boxSizing: 'border-box'
  },
  svg_icons: {
    width: '100%',
    height: '100%',
    padding: '40px'
  },
  i: {
    position: 'absolute',
    background: '#fff',
    borderRadius: '50%',
    animation: '$animate linear infinite'
  },
  '@keyframes animate': {
    '0%': {
      opacity: 0,
      transform: 'translateY(0)'
    },
    '10%, 90%': {
      opacity: 1
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-100px)'
    }
  },
  npmframe: {
    padding: '200px'
  }
}));

export const Banner = () => {
  const classes = useStyles();
  const Star = ({ x, y, duration, size }) => {
    const style = {
      left: `${x}px`,
      top: `${y}px`,
      width: `${1 + size}px`,
      height: `${1 + size}px`,
      animationDuration: `${5 + duration}s`,
      animationDelay: `${1 + duration}s`
    };
    return <i style={style} className={classes.i}></i>;
  };
  const makeStars = () => {
    let i = 0;
    const starArr = new Array(500);
    while (i < starArr.length) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      const duration = Math.random() * 10;
      const size = Math.random() * 2;
      starArr[i] = <Star {...{ x, y, duration, size }} key={`star-${i}`} />;
      i += 1;
    }
    return starArr;
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Paper className={classes.heroContent}>
          {makeStars()}
          <Grid container>
            <Grid item xs={6} sm={6}>
              <CachiQLLogo className={classes.svg_icons} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.npmframe}>
              {' '}
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Experience the Magic
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Try an ultra light-weight NPM Package to batch and cache nested
                GraphQL queries.
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                href="https://www.npmjs.com/package/cachiql"
                startIcon={<CloudDownloadIcon />}
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};
