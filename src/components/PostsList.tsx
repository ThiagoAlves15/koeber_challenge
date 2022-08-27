import React, { useState } from 'react';
import {
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useAppSelector } from '../app/hooks';
import { selectPosts } from '../features/post/postSlice';
import { selectUser } from '../features/user/userSlice';
import PostForm from './PostForm';

export default function Posts() {
  const user = useAppSelector(selectUser);
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
          user && user.id ?
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              id="create-button"
              sx={{ mb: 2 }}
              onClick={() => togglePostForm()}
            >
              Create post
            </Button> : ''
      }

      {
        posts && posts.length > 0 && posts.sort((a,b) => b.id - a.id).map(post => {
          return (
            <Card key={post.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography sx={{ overflowWrap: "break-word" }} variant="h5" component="div">{post.title}</Typography>

                <Typography sx={{ overflowWrap: "break-word" }}  variant="body2" color="text.secondary">{post.body}</Typography>
              </CardContent>
            </Card>
          );
        })
      }
    </Container>
  );
}
