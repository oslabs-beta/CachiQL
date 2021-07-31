import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
// import Avatar from '@material-ui/core/Avatar';
// import { Avatars } from './Avatars';
import Typography from '@material-ui/core/Typography';
import Kaden from '../../assets/resizedKaden-svg.svg';
import Vanessa from '../../assets/resizedVanessa-svg.svg';
import Eddy from '../../assets/resizedEddie-svg.svg';
import Fahad from '../../assets/resizedFahad-svg.svg';

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
    transform: 'scale(1.0)'
  },
  cardMedia: {
    borderRadius: '50%'
  },
  cardMedia2: {
    borderRadius: '50%',
    margin: '10px'
  },
  container: {
    paddingTop: '20px',
    alignContent: 'space-between'
  }
}));

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Card>
          <Kaden className={classes.cardMedia} />
          <Typography>Kaden Johnson</Typography>
          <IconButton
            className={classes.cardMedia2}
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/kaden-johnson/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() => window.open('https://github.com/Kadenj117')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Card>
        <Card>
          <Vanessa className={classes.cardMedia} />
          <Typography>Vanessa Lutz</Typography>
          <IconButton
            className={classes.cardMedia2}
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/vanessa-lutz/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() => window.open('https://github.com/vanessalutz')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Card>
        <Card>
          <Eddy className={classes.cardMedia} />
          <Typography>Eddy Zapata</Typography>
          <IconButton
            className={classes.cardMedia2}
            aria-label="Linkedin.com"
            onClick={() => window.open('https://www.linkedin.com/in/zapata124')}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() =>
              window.open('http://www.linkedin.com/in/eddy-zapata-510805203')
            }
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Card>
        <Card>
          <Fahad className={classes.cardMedia} />
          <Typography>Fahad Shaikh</Typography>
          <IconButton
            className={classes.cardMedia2}
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/fahadmshaikh/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
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
