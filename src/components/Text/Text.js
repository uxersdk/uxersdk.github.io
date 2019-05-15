import React, { Component } from 'react';
import './Text.css';
import { Icon } from '../Icon/Icon';

class Title extends Component {
	render() {
		const color = { color: (this.props.color) ? this.props.color : '#333333' };
		return (
			<div className="Title" style={color}>
				{this.props.text}
			</div>
		);
	}
}

class Subtitle extends Component {
	render() {
		const color = { color: (this.props.color) ? this.props.color : '#333333' };
		return (
			<div className="Subtitle" style={color}>
				{this.props.text}
			</div>
		);
	}
}

class Text extends Component {
	render() {
		const color = { color: (this.props.color) ? this.props.color : '#333333' };
		return (
			<div className="Text" boxsize={this.props.size} style={color}>
				{this.props.text}
			</div>
		);
	}
}

class CoverText extends Component {
	render() {
		return (
			<div className="CoverText">
				{this.props.text}
			</div>
		);
	}
}

class Signature extends Component {
	render() {
		const color = { color: (this.props.color) ? this.props.color : '#333333' };
		return (
			<div className="Signature" style={color}>
				{this.props.text}
			</div>
		);
	}
}

class Iconic extends Component {
	render() {
		const color = { color: (this.props.color) ? this.props.color : '#333333' };
		return (
			<div className="Iconic" style={color}>
				<Icon size="30px" name={this.props.icon}></Icon>
				<Subtitle text={this.props.text}></Subtitle>
			</div>
		);
	}
}

export { Text, Title, Subtitle, CoverText, Signature, Iconic };
