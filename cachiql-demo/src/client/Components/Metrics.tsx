import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TitleGraph } from './TitleGraph';
import Sparkle from 'react-sparkle';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  sparkle: {
    position: 'relative'
  },
  trendIcon: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: 50
  }
});
interface Props {
  recentQueries: any[];
  setRecentQueries: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Metrics: React.FC<Props> = ({
  recentQueries,
  setRecentQueries
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TitleGraph>CachiQL Metrics</TitleGraph>
      <span className={classes.sparkle}>
        <Typography component="p" variant="h4">
          {recentQueries[0]?.CachiQL ?? 'Make A Query'}
          <Sparkle color="#3751e0" />
        </Typography>
      </span>
      <Typography color="textSecondary" className={classes.depositContext}>
        With CachiQL
      </Typography>
      <TrendingDownIcon className={classes.trendIcon} />
      <Typography component="p" variant="h4">
        {recentQueries[0]?.GraphQL ?? 'Make A Query'}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Standard GraphQL Queries
      </Typography>
    </React.Fragment>
  );
};
