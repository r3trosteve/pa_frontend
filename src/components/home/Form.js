import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AirportAutocomplete from '../common/form/AirportAutocomplete';
import Calendar from '../common/form/Calendar';
import { getSuggestions } from '../../utils';
// import moment from 'moment';
import { connect } from 'react-redux';
import { createSearch } from '../../modules/search';
// import { fetchRates } from '../../modules/rates';
import { Route, Redirect } from 'react-router-dom';

class Form1 extends Component {

	constructor() {
		super();

		this.state = {
			airportName: '',
			airportId: '',
			airportSuggestions: [],
			startDate: '',
			endDate: '',
			errors: {},
			loading: false,
			redirect: false,
			searchId: ''
		};

		this.getAirportSuggestions = this.getAirportSuggestions.bind(this);
		this.clearAirportSuggestions = this.clearAirportSuggestions.bind(this);
		this.handleAirportChange = this.handleAirportChange.bind(this);
		this.handleAirportSelected = this.handleAirportSelected.bind(this);

		this.handleCalendarPicker = this.handleCalendarPicker.bind(this);
		this.clearCalendarPicker = this.clearCalendarPicker.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		$('#search-form-tooltip').tooltip();
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

	handleAirportSelected(e, { suggestion }) {
		this.setState({ airportId: suggestion.id });
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
			endDate: ''
		});
	}

	// end

	handleSubmit(e) {
		e.preventDefault();

		$(window).scrollTop(0);

		const { airportId, airportName, startDate, endDate } = this.state;
		let errors = {};

		if (airportName === '') errors.airportName = 'Please enter airport name';
		if (startDate === '') errors.startDate = 'Please enter check-in and check-out dates';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {

            let { airportId, startDate, endDate } = this.state;

            startDate = startDate.format('YYYY-MM-DDTHH:mm');
            endDate = endDate.format('YYYY-MM-DDTHH:mm');

            this.setState({ loading: true });

            this.props
                .createSearch({
                    airport_id: airportId,
                    arrive_at: startDate,
                    exit_at: endDate
                })
                .then(() =>
                    this.setState({
                        loading: false,
                        redirect: true
                    })
                )
                .catch((err) => err.response.json());

		}
	}

	render() {
		if (this.state.redirect) {
			return (

				<Route
					render={({ staticContext }) => {
						if (staticContext) {
							staticContext.status = 302;
						}
                        return <Redirect from="/" to={`/rates/search/${this.props.search.id}`} />;
					}}
				/>
			);
		} else {
			return (
				<form onSubmit={this.handleSubmit} className="home__search-form">

					<span
						className="home__search-form__help hidden-xs"
						id="search-form-tooltip"
						data-toggle="tooltip"
						data-placement="left"
						title="Choose dates and reservation times based on your
						departure and return to the parking facility - not your actual flight times."
					>
						<b>help?</b>
					</span>

					<div className="search-form">

						<AirportAutocomplete
							airportName={this.state.airportName}
							airportSuggestions={this.state.airportSuggestions}
							getAirportSuggestions={this.getAirportSuggestions}
							clearAirportSuggestions={this.clearAirportSuggestions}
							handleAirportChange={this.handleAirportChange}
							handleAirportSelected={this.handleAirportSelected}
							errors={this.state.errors}
						/>

						<Calendar
							startDate={this.state.startDate}
							endDate={this.state.endDate}
							handleCalendarPicker={this.handleCalendarPicker}
							clearCalendarPicker={this.clearCalendarPicker}
							errors={this.state.errors}
						/>

					</div>

					<div className="home__search-form__submit">

						<label>
							{this.state.loading ? (
								<button
									type="submit"
									disabled={this.state.loading}
									className={classnames('btn-custom btn-custom--big', {
										disabled: this.state.loading
									})}
								>
									<i className="fa fa-spinner" aria-hidden="true" />
									Searching...
								</button>
							) : (
								<button
									type="submit"
									disabled={this.state.loading}
									className={classnames('btn-custom btn-custom--big', {
										disabled: this.state.loading
									})}
								>
									Search parking lots
								</button>
							)}
						</label>
						
					</div>

				</form>
			);
		}
	}
}

Form1.propTypes = {
	airports: PropTypes.array.isRequired,
	createSearch: PropTypes.func.isRequired,
	search: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		search: state.search.data,
		// rates: state.rates.items
	};
};

export default connect(mapStateToProps, { createSearch })(Form1);
