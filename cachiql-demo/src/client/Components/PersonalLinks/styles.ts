import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  svgIcon: {
    transform: 'scale(1.0)',
  },
  cardMedia1: {
    borderRadius: '50%',
    margin: '28px',
  },
  cardMedia2: {
    borderRadius: '50%',
    margin: '38px',
    paddingRight: '81px',
  },
  container: {
    paddingTop: '20px',
    alignContent: 'space-between',
  },
}));
