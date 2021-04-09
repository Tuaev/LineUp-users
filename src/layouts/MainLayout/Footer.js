import { Box, Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box align="center" className={classes.root}>
      <Typography variant="subtitle2">
        <Link component="a" href="#" underline="none" color="textPrimary">
          &copy; 2021
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
