import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "./BlogContext";

function Home() {
  const { posts } = useBlogContext();
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Home
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />
      <List>
        {filteredPosts.map((post, index) => (
          <Paper key={index} elevation={3} style={{ marginBottom: "1em" }}>
            <ListItem component={Link} to={`/post/${index}`} button>
              <ListItemText primary={post.title} />
            </ListItem>
          </Paper>
        ))}
      </List>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-post"
        >
          Create Post
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
