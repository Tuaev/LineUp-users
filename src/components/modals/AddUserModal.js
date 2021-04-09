import PropTypes from 'prop-types';
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useMutation } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { memo, useMemo } from 'react';
import { createUser } from 'src/api/users';

AddUserModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

const schema = yup.object().shape({
  name: yup.string().required().trim(),
  job: yup.string().required(),
});

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 'auto',
    color: '#fff',
  },
}));

function AddUserModal({ show, onCancel, onFinish }) {
  const classes = useStyles();
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { errors, handleSubmit } = methods;

  const jobs = useMemo(
    () => [
      {
        value: 'SW1',
        label: 'Software engineer 1',
      },
      {
        value: 'SW2',
        label: 'Software engineer 2',
      },
      {
        value: 'SW3',
        label: 'Software engineer 3',
      },
    ],
    []
  );

  const { mutateAsync, isLoading } = useMutation((user) => createUser(user));

  const handleCreateUser = async (formValues) => {
    await mutateAsync(formValues);
    onFinish && onFinish();
  };

  return (
    <>
      <Dialog open={show && !isLoading} aria-labelledby="add-new-user-modal">
        <DialogTitle id="add-new-user-title">Add new user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new user please fill out the information below:
          </DialogContentText>

          <FormProvider {...methods}>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    fullWidth
                    variant="outlined"
                    error={!!errors?.['name']}
                    label="Name"
                    helperText={errors ? errors?.['name']?.message : null}
                    as={TextField}
                    name="name"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    select
                    fullWidth
                    name="job"
                    label="Job"
                    defaultValue=""
                    variant="outlined"
                    error={!!errors?.['job']}
                    helperText={errors ? errors?.['job']?.message : null}
                    as={
                      <TextField>
                        {jobs.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                  />
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(handleCreateUser)}
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default memo(AddUserModal);
