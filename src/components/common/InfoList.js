import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoList extends Component {
	render() {
		return (
			<ul className="info-list">

				<li className="info-list__item text-bold">
					<i className="fa fa-map" aria-hidden="true" />
					<b>Distance from airport:</b>
					<span>{this.props.distance} mile(s)</span>
				</li>

				<li className="info-list__item text-bold">
					<i className="fa fa-car" aria-hidden="true" />
					<b>Parking type:</b>
					<span>{this.props.type}</span>
				</li>
                
			</ul>
		);
	}
}

InfoList.propTypes = {
	distance: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};
