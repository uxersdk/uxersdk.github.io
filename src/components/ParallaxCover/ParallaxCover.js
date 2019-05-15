import React, { Component } from 'react';
import './ParallaxCover.css';
import { Parallax, Background } from 'react-parallax';

class ParallaxCover extends Component {
	render() {
		
		const style = {
			position: (this.props.position) ? this.props.position : 'relative',
			height: (this.props.height) ? this.props.height : '100%'
		};
		
		return (
			<div className="ParallaxCover" style={style}>
        <Parallax strength={Number(this.props.move)}>
					<Background className="custom-bg">
						{this.props.content}
					</Background>
        </Parallax>
			</div>
		);
	}
}

export { ParallaxCover };