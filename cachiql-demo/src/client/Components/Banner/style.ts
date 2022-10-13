import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    width: '100%',
    background: 'linear-gradient(#111425,#3751e0)',
    padding: theme.spacing(8, 0, 6),
    color: theme.palette.common.white,
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  svg_icons: {
    width: '100%',
    height: '100%',
    padding: '40px',
  },
  i: {
    position: 'absolute',
    background: '#fff',
    borderRadius: '50%',
    animation: '$animate linear infinite',
  },
  '@keyframes animate': {
    '0%': {
      opacity: 0,
      transform: 'translateY(0)',
    },
    '10%, 90%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
  },
  npmframe: {
    padding: '200px',
  },
}));
