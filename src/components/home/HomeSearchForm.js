import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HomeSearchFormAirport from 'components/home/HomeSearchFormAirport';
import HomeSearchFormCalendar from 'components/home/HomeSearchFormCalendar';

// helper function for getAirportSuggestions

function getSuggestions(value, airports) {
	const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	if (escapedValue === '') {
		return [];
	}

	const regex = new RegExp('^' + escapedValue, 'i');

	return airports.filter(airport => regex.test(airport.name));
}

// end

export default class HomeSearchForm extends Component {

	constructor() {
		super();

		this.state = {
			airportName: '',
			airportSuggestions: [],
			startDate: '',
			endDate: '',
			errors: {},
			loading: false
		};

		this.getAirportSuggestions = this.getAirportSuggestions.bind(this);
		this.clearAirportSuggestions = this.clearAirportSuggestions.bind(this);
		this.handleAirportChange = this.handleAirportChange.bind(this);

		this.handleCalendarPicker = this.handleCalendarPicker.bind(this);
		this.clearCalendarPicker = this.clearCalendarPicker.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// airport autocomplete functions

	getAirportSuggestions({ value }) {
		this.setState({
			airportSuggestions: getSuggestions(value, this.props.airports)
		});
	}

	clearAirportSuggestions() {
		this.setState({
			airportSuggestions: []
		});
	}

	handleAirportChange(e, { newValue, method }) {

		let errors = Object.assign({}, this.state.errors);
		delete errors.airportName;

		this.setState({
			airportName: newValue,
			errors
		});
	}

	// end

	// calendar functions

	handleCalendarPicker(e, picker) {
		let errors = Object.assign({}, this.state.errors);
		delete errors.startDate;

		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate,
			errors
		});
	}

	clearCalendarPicker() {
		this.setState({
			startDate: '',
			endDate: '',
		});
	}

	// end

	handleSubmit(e) {
		e.preventDefault();

		const { airportName, startDate, endDate  } = this.state;
		let errors = {};

		if (airportName === '') errors.airportName = 'Please enter airport name';
		if (startDate === '') errors.startDate = 'Please enter leaving and returning dates';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {

			this.setState({ loading: true });

			alert(
				'Airport: ' + airportName +
				' Leaving date: ' + startDate.format('MM/DD/YYYY hh:mm A') +
				' Returning date: ' + endDate.format('MM/DD/YYYY hh:mm A')
			);
		}
	}

	render() {

		return (

			<form onSubmit={this.handleSubmit} className="home__search-form">

				<div className="datepicker">

					<HomeSearchFormAirport
						airportName={this.state.airportName}
						airportSuggestions={this.state.airportSuggestions}
						getAirportSuggestions={this.getAirportSuggestions}
						clearAirportSuggestions={this.clearAirportSuggestions}
						handleAirportChange={this.handleAirportChange}
						errors={this.state.errors}
					/>

					<HomeSearchFormCalendar
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						handleCalendarPicker={this.handleCalendarPicker}
						clearCalendarPicker={this.clearCalendarPicker}
						errors={this.state.errors}
					/>

				</div>

				<p className="hidden-xs">
					Choose dates and reservation times based on your departure and
					return to the parking facility - not your actual flight times.
				</p>

				<div className="submit">

					<label>
						{
							this.state.loading ?
								<button
									type="submit"
									disabled={this.state.loading}
									className={classnames('btn-custom btn-custom--big', { 'disabled': this.state.loading })}
									>
									<i className="fa fa-spinner" aria-hidden="true"></i>
									Searching...
								</button> :
								<button
									type="submit"
									disabled={this.state.loading}
									className={classnames('btn-custom btn-custom--big', { 'disabled': this.state.loading })}
								>
									Search parking lots
								</button>
						}

					</label>

				</div>

			</form>

		);
	}

}

HomeSearchForm.propTypes = {
	airports: PropTypes.array.isRequired
};