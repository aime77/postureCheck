import React from "react";
import { connect } from "react-redux";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
      </div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { myVideoSelected: state.video };
};

export default connect(mapStateToProps)(VideoDetail);
