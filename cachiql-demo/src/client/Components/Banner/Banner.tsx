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
import { useStyles } from './style';
import Star from './Star';
import { makeStars } from './makeStars';

const Banner = () => {
  const classes = useStyles();
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

export default Banner;
