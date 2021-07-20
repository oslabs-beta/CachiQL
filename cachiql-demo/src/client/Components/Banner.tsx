import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CachiQLLogo from '../../assets/cachiql_(1)-svg_(2).svg';
import { keyframes } from 'styled-components';
import Paper from '@material-ui/core/Paper';
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(#111425,#3751e0)',
    padding: theme.spacing(8, 0, 6),
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    boxSizing: 'border-box'
  },
  svg_icons: {
    transform: 'scale(0.5)'
  },
  i: {
      position: 'absolute',
      background: '#fff',
      borderRadius: '50%',
      animation: "$animate linear infinite",
  },
  "@keyframes animate": {
    "0%": {
      opacity: 0,
      transform: 'translateY(0)'
    },
    "10%, 90%": {
      opacity: 1
    },
    "100%": {
      opacity: 0,
      transform: 'translateY(-100px)'
    },
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
      animationDelay: `${1 + duration}s`,
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
      starArr[i] = <Star {...{ x, y, duration, size }} />;
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
          <Grid container>
         <Grid item xs={2}>
            {makeStars()}
            <CachiQLLogo className={classes.svg_icons} />
            </Grid>
            </Grid>
            </Paper>
      </main>
    </React.Fragment>
  );
};
