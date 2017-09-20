import React, { Component } from 'react';
import classnames from 'classnames';

export default class HomeSearchForm extends Component {

	constructor() {
		super();

		this.state = {
			airportName: '',
			leavingDate: '',
			returningDate: '',
			errors: {},
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(e) {
		e.preventDefault();

		let errors = {};

		if (this.state.airportName === '') errors.airportName = 'Please enter airport name';
		if (this.state.leavingDate === '') errors.leavingDate = 'Please select leaving date and time';
		if (this.state.returningDate === '') errors.returningDate = 'Please select returning date and time';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			const { airportName, leavingDate, returningDate  } = this.state;
			this.setState({ loading: true });
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>

				<div className="form-inline">

					<div className={classnames('form-group', { 'has-error': this.state.errors.airportName })}>
						<input
							type="text"
							name="airportName"
							placeholder="Type airport name or code"
							className="form-control"
							value={this.state.airportName}
							onChange={this.handleChange}
						/>
						<span>{this.state.errors.airportName}</span>
					</div>

					<div className={classnames('form-group', { 'has-error': this.state.errors.leavingDate })}>
						<input
							type="text"
							name="leavingDate"
							placeholder="Start date and time"
							className="form-control"
							value={this.state.leavingDate}
							onChange={this.handleChange}
						/>
						<span>{this.state.errors.leavingDate}</span>
					</div>

					<div className={classnames('form-group', { 'has-error': this.state.errors.returningDate })}>
						<input
							type="text"
							name="returningDate"
							placeholder="End date and time"
							className="form-control"
							value={this.state.returningDate}
							onChange={this.handleChange}
						/>
						<span>{this.state.errors.returningDate}</span>
					</div>

				</div>

				<p>
					Choose dates and reservation times based on your departure and
					return to the parking facility - not your actual flight times.
				</p>

				<div className="form-group">
					<input
						type="submit"
						value={this.state.loading ? 'Searching... Please wait...' : 'Search Airport Parking'}
						className="btn btn-primary"
					/>
				</div>

			</form>
		);
	}

}