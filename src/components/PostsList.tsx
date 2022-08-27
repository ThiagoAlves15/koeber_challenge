import React, { useState } from 'react';
import {
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import PostForm from './PostForm';

export default function Posts() {
  const [isCreating, setIsCreating] = useState(false);

  const posts = [{
    id: 1,
    title: 'titulo',
    body: 'texto',
  }]

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
