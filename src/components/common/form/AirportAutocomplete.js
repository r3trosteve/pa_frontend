import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Autosuggest from 'react-autosuggest';

function getSuggestionValue(suggestion) {
	return suggestion.name;
}

function renderSuggestion(suggestion) {
	return <span>{suggestion.name}</span>;
}

export default class AirportAutocomplete extends Component {
	render() {

		const { airportName, airportSuggestions } = this.props;

		const inputProps = {
			placeholder: 'Airport name or code',
			value: airportName,
			onChange: this.props.handleAirportChange,
			name: 'airportName'
		};

		return (
			<label className={classnames('name-label', { 'has-error': this.props.errors.airportName })}>

				<span className="label-title">Airport</span>

				<i className="fa fa-map-marker mobile-icon visible-xs" aria-hidden="true" />

				<Autosuggest
					suggestions={airportSuggestions}
					onSuggestionsFetchRequested={this.props.getAirportSuggestions}
					onSuggestionsClearRequested={this.props.clearAirportSuggestions}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					className="airport-name"
					onSuggestionSelected={this.props.handleAirportSelected}
				/>

				<span className="error-text">{this.props.errors.airportName}</span>
				
			</label>
		);
	}
}

AirportAutocomplete.propTypes = {
	airportName: PropTypes.string.isRequired,
	airportSuggestions: PropTypes.array.isRequired,
	handleAirportChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	getAirportSuggestions: PropTypes.func.isRequired,
	clearAirportSuggestions: PropTypes.func.isRequired,
	handleAirportSelected: PropTypes.func.isRequired
};
