import { makeStyles } from "@material-ui/core";

export const useStyles: any = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    background: 'linear-gradient(#111425,#3751e0)',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'linear-gradient(#111425,#3751e0)',
  },
  svg_demo: {
    transform: 'scale(1.0)',
    position: 'relative',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));