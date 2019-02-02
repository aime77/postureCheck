import React from "react";
import youtube from "../../actions/api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail.js";
import { connect } from "react-redux";

class YouTube extends React.Component {
  state = { videos: [], selectedVideo: null };

  searchYouTube = async () => {
    const response = await youtube.get("/search", {
      params: {
        q: this.props.videoSelected
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  componentWillReceiveProps() {
    this.searchYouTube();
  }

  componentDidMount() {
    this.searchYouTube();
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="youTube">
        <div className="ui grid">
          <div className="ui row">
            <div className="sixteen column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
          <div className="ui row">
            <div className="sixteen column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateProps(state) {
  return { videoSelected: state.videoSelected.selection };
}

export default connect(mapStateProps)(YouTube);
