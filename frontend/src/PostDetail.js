import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from './BlogContext';
import { Container, Typography, Paper, Box } from '@mui/material';

function PostDetail() {
  const { id } = useParams();
  const { posts } = useBlogContext();
  const post = posts[id];

  if (!post) {
    return (
      <Container>
        <Typography variant="h4" component="div" gutterBottom>
          Post not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '1em', marginTop: '1em' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" component="p">
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
}

export default PostDetail;
