import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CodeIcon from '@material-ui/icons/Code';
import { useStyles } from './styles';

const Cards = ({ children }: any) => {
  const classes = useStyles();
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>{children}</CardContent>
  </Card>;
};

const ContentCards: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={5}>
        <Grid item key={1} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <AutorenewIcon className={classes.playIcon} />
              <Typography gutterBottom variant="h5" component="h2">
                The Magic of CachiQL
              </Typography>
              <Typography>
                Store, access and maintain deeply-nested GraphQL queries with
                CachiQL.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item key={2} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <QueryBuilderIcon className={classes.playIcon} />
              <Typography gutterBottom variant="h5" component="h2">
                Saving Time
              </Typography>
              <Typography>
                Reduce the amount of database round trips for nested GraphQL
                queries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item key={3} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <CodeIcon className={classes.playIcon} />
              <Typography gutterBottom variant="h5" component="h2">
                Documentation
              </Typography>
              <Typography>
                CachiQL is a well-documented, light-weight, open source library,
                built for performance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentCards;
