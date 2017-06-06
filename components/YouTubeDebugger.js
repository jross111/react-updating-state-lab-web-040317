import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
            resolution: '1080p'
          }
        }
      }
      this.clickEventBitrate = this.clickEventBitrate.bind(this)
      this.clickEventResolution = this.clickEventResolution.bind(this)
    }
    clickEventBitrate(){
      this.setState({
        settings: Object.assign( {}, this.state.settings, {
          bitrate: 12,
          }
        ),
      }
    )
  }
  clickEventResolution(event){
    this.setState({
      settings: Object.assign( {}, this.state.settings,
        {video: Object.assign( {}, this.state.settings.video,
          {
        resolution: "720p",
        },
    )},
  )
    })
  }
    render(){
      return(
        <div>
        < button className="bitrate" onClick={this.clickEventBitrate} ></button>
        < button className="resolution" onClick={this.clickEventResolution} ></button>

        </div>

      )
    }
  }
