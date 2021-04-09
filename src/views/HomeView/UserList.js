import { useQuery } from 'react-query';
import UserCard from 'src/components/UserCard';
import Pagination from '@material-ui/lab/Pagination';
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { fetchUsers } from 'src/api/users';
import { useHistory, useParams } from 'react-router';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '20px',
  },
}));

const UserList = () => {
  const classes = useStyles();
  const { page } = useParams();
  const history = useHistory();

  if (!page) history.push(1);

  // Fetch the users from API. useQuery automatically caches the data.
  // Enables the use of Suspense fallback.
  // Keep the data fresh in cache for 5 minutes or it doesn't refetch on each render
  const { data: users } = useQuery(['users', { page }], () => fetchUsers(page), {
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: 60000 * 5,
    retry: false,
  });

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="textPrimary"
        id="events"
        className={classes.title}
      >
        Users List
      </Typography>
      <Container maxWidth="md">
        <Box mt={4} pb={10}>
          {users ? (
            <>
              <Grid container spacing={3}>
                {users.data.map((user) => (
                  <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <UserCard user={user} minimal={true} />
                  </Grid>
                ))}
                <Grid item container justify="center" xs={12}>
                  <Pagination
                    page={Number(page)}
                    count={users.total_pages}
                    color="primary"
                    onChange={(e, page) => history.push(`/${page}`)}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography align="center" color="textPrimary" id="events">
              No Users
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default UserList;
