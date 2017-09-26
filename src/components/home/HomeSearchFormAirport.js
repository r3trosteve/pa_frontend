import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
	return suggestion.name;
}

function renderSuggestion(suggestion) {
	return (
		<span>{suggestion.name}</span>
	);
}

export default class HomeSearchFormAirport extends Component {
	render() {

		const { airportName, airportSuggestions } = this.props;

		const inputProps = {
			placeholder: 'Type airport name or code',
			value: airportName,
			onChange: this.props.handleAirportChange,
			name: 'airportName'
		};

		return (
			<label className={classnames('name-label', { 'has-error': this.props.errors.airportName })}>

				<span className="label-title">
					Airport
				</span>

				<Autosuggest
					suggestions={airportSuggestions}
					onSuggestionsFetchRequested={this.props.getAirportSuggestions}
					onSuggestionsClearRequested={this.props.clearAirportSuggestions}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					className="airport-name"
				/>

				<span className="error-text">{this.props.errors.airportName}</span>

			</label>
		);

	}
}

HomeSearchFormAirport.propTypes = {
	airportName: PropTypes.string.isRequired,
	airportSuggestions: PropTypes.array.isRequired,
	getAirportSuggestions: PropTypes.func.isRequired,
	clearAirportSuggestions: PropTypes.func.isRequired,
	handleAirportChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};