import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const ContentTitle: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent1}>
              <Typography variant="h2">
                SOLVING THE N+1 ISSUE OF GRAPHQL
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentTitle;
