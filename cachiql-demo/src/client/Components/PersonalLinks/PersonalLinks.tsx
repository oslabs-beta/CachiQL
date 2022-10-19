import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Kaden from '../../assets/resizedKaden-svg.svg';
import Vanessa from '../../assets/resizedVanessa-svg.svg';
import Eddy from '../../assets/resizedEddy-svg.svg';
import Fahad from '../../assets/resizedFahad-svg.svg';
import { useStyles } from './styles';

const PersonalLinks = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Card>
          <Kaden className={classes.cardMedia} />
          <Typography>Kaden Johnson</Typography>
          <Vanessa className={classes.cardMedia} />
          <Eddy className={classes.cardMedia} />
          <Fahad className={classes.cardMedia} />
        </Card>
        <Card>
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
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/vanessa-lutz/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/eddy-zapata/')
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
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
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() => window.open('https://github.com/Kadenj117')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() => window.open('https://github.com/vanessalutz')}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.cardMedia2}
            aria-label="github.com"
            onClick={() => window.open('http://github.com/zapata124')}
          >
            <GitHubIcon fontSize="large" />
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

export default PersonalLinks;
