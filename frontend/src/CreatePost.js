import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "./BlogContext";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

function CreatePost() {
  const { posts, setPosts } = useBlogContext();
  const titleRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();

  const createPost = () => {
    const newPost = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    setPosts([...posts, newPost]);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Create Post
      </Typography>
      <TextField
        inputRef={titleRef}
        label="Post Title"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        inputRef={contentRef}
        label="Post Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={createPost}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CreatePost;
