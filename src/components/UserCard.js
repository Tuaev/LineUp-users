import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

const UserCard = ({ user, minimal }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography className={classes.name} color="textPrimary" variant="h6">
            {user?.first_name} {user?.last_name}
          </Typography>
          {!minimal && (
            <>
              <Typography color="textSecondary" variant="subtitle1" gutterBottom>
                {user?.email}
              </Typography>
              <Typography color="textPrimary" variant="body1">
                ID: {user?.id}
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
      {minimal && (
        <CardActions>
          <Button
            color="secondary"
            component={RouterLink}
            to={`/user/${user?.id}`}
            variant="contained"
            fullWidth
          >
            View Profile
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
  minimal: PropTypes.bool,
};

export default UserCard;
