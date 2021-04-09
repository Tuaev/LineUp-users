import React, { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Container, Link } from '@material-ui/core';
import AddUserModal from 'src/components/modals/AddUserModal';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const queryClient = useQueryClient();
  const [showUserModal, setShowUserModal] = useState(false);

  // Invalidate old users in cache and refetch after creating a new one
  const handleNewUserCreation = useCallback(() => {
    setShowUserModal(false);
    queryClient.invalidateQueries('users');
  }, [queryClient]);

  const handleCancelCreateUser = useCallback(() => {
    setShowUserModal(false);
  }, []);

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              variant="h6"
              className={classes.title}
              underline="none"
            >
              Exercise.
            </Link>
            <Button
              color="inherit"
              variant="outlined"
              component={RouterLink}
              to="/"
              className={classes.menuButton}
            >
              Home
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButton}
              onClick={() => setShowUserModal(true)}
            >
              Create User
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <AddUserModal
        show={showUserModal}
        onCancel={handleCancelCreateUser}
        onFinish={handleNewUserCreation}
      />
    </>
  );
}
