import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { createPost } from '../features/post/postSlice';

interface PostFormProps {
  toggle: () => void;
}

const PostForm: FC<PostFormProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const validationSchema = Yup.object({
    title: Yup
      .string()
      .min(8, 'Title should be of minimum 8 characters length')
      .required('Title is required'),
    body: Yup
      .string()
      .min(20, 'Body should be of minimum 20 characters length')
      .required('Body is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const postData = {
        userId: user.id,
        title: values.title,
        body: values.body,
      };

      await dispatch(createPost(postData));

      props.toggle();
    },
  });

  return (
    <Card sx={{ mb: 2, mt: 2 }}>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            margin="normal"
            variant="filled"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            fullWidth
            id="body"
            name="body"
            label="Body"
            type="body"
            margin="normal"
            variant="filled"
            value={formik.values.body}
            onChange={formik.handleChange}
            error={formik.touched.body && Boolean(formik.errors.body)}
            helperText={formik.touched.body && formik.errors.body}
          />

          <Button color="primary" variant="outlined" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
