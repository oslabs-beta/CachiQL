import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
// import { Avatars } from './Avatars';
import Kaden from '../../assets/kadenFinal.svg';
import Vanessa from '../../assets/vanessaFinal.svg';
import Eddie from '../../assets/eddieFinal.svg';
import Fahad from '../../assets/fahadFinal.svg';

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
  svgIcon: {
    transform: 'scale(1.0)',
    
  }
}));

export const Linkage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Card>
          <Kaden className={classes.svgIcon} />
          <Vanessa className={classes.svgIcon} />
          <Eddie className={classes.svgIcon} />
          <Fahad className={classes.svgIcon} />
        </Card>
        <Card>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/kaden-johnson/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/vanessa-lutz/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('http://www.linkedin.com/in/eddy-zapata-510805203')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('http://www.linkedin.com/in/fahadmshaikh')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Card>
        <Card>
          <IconButton
            aria-label="github.com"
            onClick={() => window.open('https://github.com/Kadenj117')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="github.com"
            onClick={() => window.open('https://github.com/vanessalutz')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="github.com"
            onClick={() => window.open('http://github.com/zapata124')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="github.com"
            onClick={() => window.open('https://github.com/fahdie')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Card>
      </Container>
    </React.Fragment>
  );
};
