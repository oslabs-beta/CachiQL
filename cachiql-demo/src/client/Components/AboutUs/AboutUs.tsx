import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TeamCachiql from '../../assets/teamCachiql.svg';
import {
  Container,
  Grid,
  CardContent,
  CardHeader,
  CardActions,
} from '@mui/material';
import { useStyles, AboutUsBoxStyled, CardStyled } from './styles';
import { teamMembers } from './members';

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid}>
        <AboutUsBoxStyled>
          <TeamCachiql className={classes.teamIcon} />
        </AboutUsBoxStyled>
        <Grid container spacing={5}>
          {teamMembers.map((card: any, i) => (
            <Grid item key={i} xs={12} md={3}>
              <CardStyled>
                <CardHeader
                  title={<card.imageLarge className={classes.cardMedia} />}
                />
                <CardContent>
                  <Typography variant="h5">
                    {card.name}
                  </Typography>
                </CardContent>
                <CardActions>
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
                </CardActions>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
