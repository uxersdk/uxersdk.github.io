import React, { Component } from 'react';
import './Cover.css';
import { CoverText, Signature } from '../Text/Text';

class Cover extends Component {
	render() {
		return (
			<div className="Cover">
				<div id="cover" className="Section">
					<div position="center" className="Container">
						<Signature text={this.props.t.cover.signature}/>
						<CoverText text={this.props.t.cover.text1}/>
					</div>
				</div>
			</div>
		);
	}
}

export { Cover };