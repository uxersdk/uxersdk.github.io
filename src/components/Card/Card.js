import React, { Component } from 'react';
import './Card.css';
import { Image } from '../Image/Image';

class Card extends Component {
	
	render() {
		return (
			<div className="Card">
				<div className="card-back">
					<Image 
						radius={this.props.radius}
						className="ImageRowItemImage" 
						name={this.props.image}
						format="png"
						height={this.props.size} 
						width={this.props.size}/>
				</div>
				<div className="card-cover">
					<div className="card-title">{this.props.title}</div>
					<div className="card-info">{this.props.info}</div>
				</div>
			</div>
		);
	}
}

class CardRow extends Component {
	render() {
		const items = this.props.items.map((d, i) => 
			<div className="CardRowItem" key={i}>
				<Card 
					title={d.title}
					info={d.description}
					image={d.image}
					size={this.props.size}
					radius={this.props.radius}/>
			</div>
		);
		return (
			<div className="CardRow">
				{items}
			</div>
		);
	}
}

export { Card, CardRow };