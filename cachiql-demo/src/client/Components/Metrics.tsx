import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TitleGraph } from './TitleGraph';

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
});
interface Props {
  recentQueries: any[];
  setRecentQueries: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Metrics: React.FC<Props> = ({ recentQueries, setRecentQueries }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TitleGraph>CachiQL Metrics</TitleGraph>
      <Typography component="p" variant="h4">
        0.00 ms
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Cache and Fetch Time
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Added to Cache: No
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Cache Cleared: No
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Uncached Runtime: 0.00ms
      </Typography>
    </React.Fragment>
  );
}