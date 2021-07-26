import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  link: {
    paddingTop: '20%'
  }
}));

export const Linkage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Typography>
          <Link href="https://www.linkedin.com/in/kaden-johnson/">
            <LinkedInIcon></LinkedInIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/vanessa-lutz/">
            <LinkedInIcon></LinkedInIcon>
          </Link>
          <Link href="http://www.linkedin.com/in/eddy-zapata-510805203">
            <LinkedInIcon></LinkedInIcon>
          </Link>
          <Link href="http://www.linkedin.com/in/fahadmshaikh">
            <LinkedInIcon></LinkedInIcon>
          </Link>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
