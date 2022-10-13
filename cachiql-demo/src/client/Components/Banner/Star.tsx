import React from 'react';
import { useStyles } from './style';

const Star = ({ x, y, duration, size }: any) => {
  const classes = useStyles();
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

export default Star;
