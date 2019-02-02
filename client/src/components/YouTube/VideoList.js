import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} videos={video}/>;
  });

  return <div className="ui four cards"> {renderedList}</div>;
};

export default VideoList;
