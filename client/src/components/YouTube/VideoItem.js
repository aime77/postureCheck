import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videos, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(videos)} className="item card">
      <img className="ui image" src={videos.snippet.thumbnails.medium.url}/>
      <div className="header extra">{videos.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
