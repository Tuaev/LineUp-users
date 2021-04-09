import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
