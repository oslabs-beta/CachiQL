import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TitleGraph } from './TitleGraph';
import Sparkle from 'react-sparkle';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const useStyles = makeStyles({
  depositContext: {
    flex: 1
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
// if (!recentQueries[0]?.CachiQL){
//   return {'0'};
// }
  return (
    <React.Fragment>
      <TitleGraph>CachiQL Metrics</TitleGraph>
      <span className={classes.sparkle}>
        <Typography component="p" variant="h4">
          {recentQueries[0]?.CachiQL}
          <Sparkle color="#3751e0" />
        </Typography>
      </span>
      <Typography color="textSecondary" className={classes.depositContext}>
        CachiQL Queries
      </Typography>
      <TrendingDownIcon className={classes.trendIcon} />
      <Typography component="p" variant="h4">
        {recentQueries[0]?.GraphQL}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        GraphQL Queries
      </Typography>
    </React.Fragment>
  );
};
