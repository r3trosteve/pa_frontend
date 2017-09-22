import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class HomeSearchForm extends Component {

	constructor() {
		super();

		this.state = {
			airportName: '',
			startDate: '',
			endDate: '',
			errors: {},
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePicker = this.handlePicker.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleChange(e) {
		if (this.state.errors[e.target.name]) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];

			this.setState({
				[e.target.name]: e.target.value,
				errors
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	}

	handlePicker(e, picker) {
		let errors = Object.assign({}, this.state.errors);
		delete errors.startDate;

		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate,
			errors
		});
	}

	handleCancel() {
		this.setState({
			startDate: '',
			endDate: '',
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		let errors = {};

		if (this.state.airportName === '') errors.airportName = 'Please enter airport name';
		if (this.state.startDate === '') errors.startDate = 'Please enter leaving and returning dates';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			const { airportName, leavingDate, returningDate  } = this.state;
			this.setState({ loading: true });
			alert(
				'Airport: ' + this.state.airportName +
				' Leaving date: ' + this.state.startDate.format('DD/MM/YYYY hh:mm A') +
				' Returning date: ' + this.state.endDate.format('DD/MM/YYYY hh:mm A')
			);
		}
	}

	render() {

		// label is a format showing startDate and endDate in input

		const { startDate, endDate } = this.state;
		let label = '';
		let start = startDate && startDate.format('DD/MM/YYYY hh:mm A') || '';
		let end = endDate && endDate.format('DD/MM/YYYY hh:mm A') || '';
		label = start + ' - ' + end;
		if (start === end) {
			label = start;
		}

		let locale = {
			format: 'DD/MM/YYYY hh:mm A',
			cancelLabel: 'Clear',
		};

		let pickerProps = {
			startDate,
			endDate,
		};

		// end

		return (
			<form onSubmit={this.handleSubmit} className="home__search-form">

				<div className="datepicker">
					<label className={classnames('name-label', { 'has-error': this.state.errors.airportName })}>
						<span className="label-title">
							Airport
						</span>
						<input
							type="text"
							name="airportName"
							placeholder="Type airport name or code"
							className="airport-name"
							value={this.state.airportName}
							onChange={this.handleChange}
						/>
						<span>{this.state.errors.airportName}</span>
					</label>

					<label className={classnames('date-label', { 'has-error': this.state.errors.startDate })}>
						<DatetimeRangePicker
							//autoUpdateInput={false}
							locale={locale}
							onApply={this.handlePicker}
							onCancel={this.handleCancel}
							timePicker
							showDropdowns
							minDate={moment()}
							{...pickerProps}
						>
							<span className="label-title">
								When
							</span>
							<input
								type="text"
								name="startDate"
								placeholder="Leaving date - Returning date"
								readOnly
								className="airport-date"
								value={label}
								onChange={this.handleChange}
							/>
						</DatetimeRangePicker>
						<span>{this.state.errors.startDate}</span>
					</label>
				</div>

				<p>
					Choose dates and reservation times based on your departure and
					return to the parking facility - not your actual flight times.
				</p>

				<label>
					<input
						type="submit"
						disabled={this.state.loading}
						value={this.state.loading ? 'Searching... Please wait...' : 'Search Airport Parking'}
						className={this.state.loading ? 'btn btn-primary disabled' : 'btn-custom'}
					/>
				</label>

			</form>
		);
	}

}