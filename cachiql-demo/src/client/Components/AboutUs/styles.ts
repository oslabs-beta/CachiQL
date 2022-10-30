import { makeStyles } from '@material-ui/core/styles';
import { styled, Box, Card } from '@mui/material';
export const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    paddingTop: '5%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardMedia: {
    borderRadius: '50%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  svgIcon: {
    transform: 'scale(1.0)',
  },
  cardMedia2: {
    borderRadius: '50%',
    margin: '10px',
  },
  container: {
    paddingTop: '10px',
    alignContent: 'space-between',
  },
  teamIcon: {
    transform: 'scale(0.7)',
  },
}));

export const AboutUsBoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  id: 'aboutus',
});
export const CardStyled = styled(Card)({
  textAlign: 'center',
  '.MuiCardActions-root': {
    justifyContent: 'center',
  },
});
