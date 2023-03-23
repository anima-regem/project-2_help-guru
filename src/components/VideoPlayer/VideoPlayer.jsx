import React from "react";
import "react-html5video/dist/styles.css";

const VideoPlayer = () => {
  return (
    <>
      <video id="my-video" controls>
        <source src="http://localhost:8000/video" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
