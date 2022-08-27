import { useState } from 'react';
import { useFormik } from 'formik';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import * as Yup from 'yup';
import { Alert, Button, Container, TextField } from '@mui/material';
import {
  fetchUser,
  saveEmailToLocalStorage,
  selectErrorMessages,
} from '../features/user/userSlice';
import { getUserEmail } from '../features/user/userStorage';

const EmailForm = () => {
  const errors = useAppSelector(selectErrorMessages);
  const [emailInput, setEmailInput] = useState(getUserEmail());
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: emailInput,
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      // Sincere@april.biz
      const { payload } = await dispatch(fetchUser(values.email));
      console.log(payload);
      dispatch(saveEmailToLocalStorage());
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mb: 2, mt: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        {
          errors.length > 0 ?
            <Alert severity="error" aria-live="assertive">
              {errors.map((error, index) => {
                return <p key={`alert-${index}`}>
                  {error}
                </p>;
              })}
            </Alert> : <></>
        }

        <TextField
          fullWidth
          id="email"
          name="email"
          margin="normal"
          variant="filled"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EmailForm;
