import React, { useState } from 'react';
import {
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectPosts } from '../features/post/postSlice';
import PostForm from './PostForm';

export default function Posts() {
  const posts = [...useAppSelector(selectPosts)];
  const [isCreating, setIsCreating] = useState(false);

  function togglePostForm() {
    if (isCreating) {
      setIsCreating(false);
    } else {
      setIsCreating(true);
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mb: 2, mt: 2 }}>
      {
        isCreating ?
          <PostForm
            toggle={togglePostForm}
          /> :
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            id="create-button"
            sx={{ mb: 2 }}
            onClick={() => togglePostForm()}
          >
          Create post
        </Button>
      }

      {
        posts && posts.length > 0 && posts.sort((a,b) => b.id - a.id).map(post => {
          return (
            <Card key={post.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">{post.title}</Typography>

                <Typography variant="body2">{post.body}</Typography>
              </CardContent>
            </Card>
          );
        })
      }
    </Container>
  );
}
