import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
	render() {
		const format = (this.props.format) ? `${this.props.format}` : 'svg';
		const image = `./images/${this.props.name}.${format}`;
		const style = {
			width: (this.props.width) ? this.props.width : 'auto',
			minHeight: this.props.height,
			borderRadius: this.props.radius
		};
		return (
			<img id={this.props.id} style={style} className="Image" src={image} alt={this.props.name}/>
		);
	}
}

class ImageRow extends Component {
	render() {
		const format = (this.props.format) ? this.props.format : 'svg';
		const textstyle = {
			color: (this.props.color) ? this.props.color : '#333333',
			maxWidth: this.props.width
		};
		const itemstyle = {
			margin: this.props.margin
		};
		const items = this.props.items.map((d, i) => 
			<div className="ImageRowItem" key={i}>
				<Image 
					radius={this.props.radius}
					className="ImageRowItemImage" 
					name={d.image} format={format} 
					height={this.props.height} 
					width={this.props.width}/>
				<div style={textstyle} className="ImageRowItemDescription">{d.description}</div>
			</div>
		);
		return (
			<div className="ImageRow" id={this.props.id} style={itemstyle}>
				{items}
			</div>
		);
	}
}

export { Image, ImageRow };