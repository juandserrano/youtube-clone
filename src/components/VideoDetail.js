import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  videoPaper: {},
  iframe: {
    height: "calc(66.67vw * 9 / 16)",
    width: "66.67vw",
  },
  description: {
    padding: "20px",
  },
});

const VideoDetail = ({ video }) => {
  const classes = useStyles();

  if (!video) return <div></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} className={classes.videoPaper}>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <iframe
            className={classes.iframe}
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </Grid>
      </Paper>
      <Paper
        elevation={2}
        className={`${classes.description} ${classes.videoPaper}`}
      >
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
        <Typography></Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
