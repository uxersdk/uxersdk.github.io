import React, { Component } from 'react';
import './BackVideo.css';
import ReactPlayer from 'react-player'

class BackVideo extends Component {
	render() {
		return (
			<div className="BackVideo">
				<ReactPlayer
          className='react-player'
          url='/video/universe.mp4'
          width='100%'
					height='auto'
					playing
					muted
					loop
        />
			</div>
		);
	}
}

export { BackVideo };