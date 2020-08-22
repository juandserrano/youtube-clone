import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          alignItems: "flex-start",
          cursor: "pointer",
          padding: "3%",
          maxHeight: 100,
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            marginRight: "10px",
            height: 100,
            width: "calc(100 * 16 / 9)",
          }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Grid container>
          <Grid item>
            <Typography variant="body2">
              <b>{video.snippet.title}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {video.snippet.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
