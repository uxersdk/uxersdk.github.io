import React, { Component } from 'react';
import './Icon.css';

class Icon extends Component {
	render() {
		
		const style = {
			height: this.props.size,
			width: this.props.size,
			backgroundImage: 'url(icons/' + this.props.name + '.svg)',
			right: this.props.right,
			left: this.props.left,
			top: this.props.top,
			bottom: this.props.bottom,
			cursor: (this.props.action) ? 'pointer' : 'default'
		}
		
		return (
			<div onClick={this.props.action} style={style} className="Icon"/>
		);
	}
}

export { Icon };