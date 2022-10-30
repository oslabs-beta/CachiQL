import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TeamCachiql from '../../assets/teamCachiql.svg';
import { Container, Box, Grid, styled } from '@mui/material';
import { useStyles } from './styles';
import { teamMembers } from './members';

const AboutUsBoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  id: 'aboutus'
});

const AboutUs = () => {
  const classes = useStyles();
  const [cards, setCards] = useState(teamMembers);
  return (
    <>
      <Container className={classes.cardGrid}>
        <AboutUsBoxStyled>
          <TeamCachiql className={classes.teamIcon} />
        </AboutUsBoxStyled>
        <Grid container spacing={5}>
          {cards.map((card: any, i) => (
            <Grid item key={i} xs={6} sm={3} md={3}>
              <Card className={classes.card}>
                <card.imageLarge className={classes.cardMedia} />
                <Typography variant="h5">{card.name}</Typography>
                <Box>
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
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
