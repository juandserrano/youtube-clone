import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items },
    } = await youtube.get("search", { params: { q: searchTerm } });
    console.log(items);
    setSelectedVideo(items[0]);
    setVideos(items);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid container spacing={0} justify="center" style={{}}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid
            item
            xs={8}
            md={8}
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8} md={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={8} md={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
