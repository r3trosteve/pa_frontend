import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HomeSearchFormAirport from 'components/common/form/SearchFormAirport';
import HomeSearchFormCalendar from 'components/common/form/SearchFormCalendar';
import { Redirect } from 'react-router-dom';
import { getSuggestions } from 'utils';
import { connect } from 'react-redux';
import { postSearch } from 'actions/search';
import moment from 'moment';

class HomeSearchForm extends Component {

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
            let { airportId, startDate, endDate } = this.state;

            startDate = startDate.format('YYYY-MM-DDTHH:mm');
            endDate = endDate.format('YYYY-MM-DDTHH:mm');

            //2017-10-26T11:50
			//2017-10-28T11:00

            this.setState({ loading: true });

            this.props.postSearch({
                airport_id: airportId,
                arrive_at: startDate,
                exit_at: endDate
            })
			.then(() => this.setState({
				loading: false,
                redirect: true,
			}))
			.catch(err => err.response.json());
		}
	}

	render() {

		if (this.state.redirect) {

            return <Redirect to={{
                pathname: 'airport_parking_results',
                state: { searchData: this.props.searchData }
            }} />;

		} else {

			console.log(this.props.searchData);

			return (

				<form onSubmit={this.handleSubmit} className="home__search-form">

					<div className="search-form">

						<HomeSearchFormAirport
							airportName={this.state.airportName}
							airportSuggestions={this.state.airportSuggestions}
							getAirportSuggestions={this.getAirportSuggestions}
							clearAirportSuggestions={this.clearAirportSuggestions}
							handleAirportChange={this.handleAirportChange}
							handleAirportSelected={this.handleAirportSelected}
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

					<p className="hidden-xs home__search-form__text">
						Choose dates and reservation times based on your departure and
						return to the parking facility - not your actual flight times.
					</p>

					<div className="home__search-form__submit">

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

}

HomeSearchForm.propTypes = {
	airports: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		searchData: state.searchReducer
	};
};

export default connect(mapStateToProps, { postSearch })(HomeSearchForm);