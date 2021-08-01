import React, { useState } from 'react';
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
import Typography from '@material-ui/core/Typography';
import Kaden from '../../assets/resizedKaden-svg.svg';
import Vanessa from '../../assets/resizedVanessa-svg.svg';
import Eddy from '../../assets/resizedEddie-svg.svg';
import Fahad from '../../assets/resizedFahad-svg.svg';
import TeamCachiql from '../../assets/teamCachiql.svg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    paddingTop: '5%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardMedia: {
    borderRadius: '50%' // 16:9
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  svgIcon: {
    transform: 'scale(1.0)'
  },
  cardMedia2: {
    borderRadius: '50%',
    margin: '10px'
  },
  container: {
    paddingTop: '10px',
    alignContent: 'space-between'
  },
  teamIcon: {
    transform: 'scale(0.7)'
  }
}));

const team = [
  {
    name: 'Kaden Johnson',
    linkedIn: 'https://www.linkedin.com/in/kaden-johnson/',
    github: 'https://github.com/Kadenj117',
    image: Kaden
  },
  {
    name: 'Vanessa Lutz',
    linkedIn: 'https://www.linkedin.com/in/vanessa-lutz/',
    github: 'https://github.com/vanessalutz',
    image: Vanessa
  },
  {
    name: 'Eddy Zapata',
    linkedIn: 'https://www.linkedin.com/in/zapata124',
    github: 'http://www.linkedin.com/in/eddy-zapata-510805203',
    image: Eddy
  },
  {
    name: 'Fahad Shaikh',
    linkedIn: 'https://www.linkedin.com/in/fahadmshaikh/',
    github: 'https://github.com/fahdie',
    image: Fahad
  }
];

export const AboutUs = () => {
  const classes = useStyles();
  const [cards, setCards] = useState(team);
  return (
    <React.Fragment>
      <Container className={classes.cardGrid}>
        <div align="center">
          <TeamCachiql className={classes.teamIcon} />
        </div>
        <Grid container spacing={5}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={6} sm={3} md={3}>
              <Card className={classes.card}>
                {<card.image className={classes.cardMedia} />}
                <Typography variant="h5">{card.name}</Typography>
                <div>
                  <IconButton
                    className={classes.cardMedia2}
                    aria-label="Linkedin.com"
                    onClick={() => window.open(card.linkedIn)}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    className={classes.cardMedia2}
                    aria-label="github.com"
                    onClick={() => window.open(card.github)}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </div>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
