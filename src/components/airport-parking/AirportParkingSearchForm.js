import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HomeSearchFormAirport from 'components/common/form/SearchFormAirport';
import HomeSearchFormCalendar from 'components/common/form/SearchFormCalendar';
import { getSuggestions } from 'utils';
import moment from 'moment';

export default class AirportParkingSearchForm extends Component {

	constructor(props) {
		super(props);

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

	componentWillReceiveProps(nextProps) {
		this.setState({
			airportName: nextProps.airportName,
			startDate: moment(nextProps.startDate),
			endDate: moment(nextProps.endDate)
		});
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
			// api request goes here
			this.setState({ loading: true });
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

AirportParkingSearchForm.propTypes = {
	airports: PropTypes.array.isRequired
};