import React, { Component } from 'react';
import './MenuBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class MenuBar extends Component {
	
	render() {
		return (
			<div className="MenuBar">
				<MenuBarItem height="40px" text="skills" id="item1" goto="#skills"/>
				<MenuBarItem height="40px" text="why ux?" id="item2" goto="#ux"/>
				<MenuBarItem height="40px" text="projects" id="item3" goto="#projects"/>
				<MenuBarItem height="40px" text="contact" id="item4" goto="#contact"/>
				<MenuBarItem height="40px" text="login" id="item5"/>
			</div>
		);
	}
}

class MenuBarItem extends Component {
	
	render() {
		
		var style = { lineHeight: (this.props.height) ? this.props.height : '40px' }
		
		return (
			<AnchorLink href={(this.props.goto) ? this.props.goto : '#intro'} className="MenuBarItem" style={style} id={this.props.id}>
				{this.props.text}
			</AnchorLink>
		);
	}
}

export { MenuBar, MenuBarItem };