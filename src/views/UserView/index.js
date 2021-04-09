import Page from 'src/components/Page';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUser } from 'src/api/users';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import UserCard from 'src/components/UserCard';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '20px',
  },
}));

const UserView = () => {
  const classes = useStyles();
  const { userId } = useParams();

  // Fetch the users from API. useQuery automatically caches the data.
  // Enables the use of Suspense fallback.
  // Keep the data fresh in cache for 5 minutes or it doesn't refetch on each render
  const { data: user } = useQuery(`user${userId}`, () => fetchUser(userId), {
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: 60000 * 5,
    retry: false,
  });

  return (
    <Page title={`User ID: ${user.data.id} | Line-Up`}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="textPrimary"
        id="events"
        className={classes.title}
      >
        {user.data.first_name} {user.data.last_name}
      </Typography>
      <Container maxWidth="xs">
        <Box mt={4} pb={10}>
          <UserCard user={user.data} />
        </Box>
      </Container>
    </Page>
  );
};

export default UserView;
