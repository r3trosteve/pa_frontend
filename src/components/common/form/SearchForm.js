import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AirportAutocomplete from './AirportAutocomplete';
import Calendar from './Calendar';

import { fetchAirports } from '../../../modules/airports/airports';
import { getSuggestions } from '../../../utils/index';
import { createSearch } from '../../../modules/search/search';

class SearchForm extends Component {

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

    componentWillReceiveProps(nextProps) {
		this.setState({
			airportId: nextProps.airportId || '',
			airportName: nextProps.airportName || '',
			startDate: nextProps.startDate || '',
			endDate: nextProps.endDate || ''
		});
    }

	componentDidMount() {
        this.props.fetchAirports();

		$('#search-form-tooltip').tooltip(); // jq for help tooltip
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

		$(window).scrollTop(0); // jq to load page on top

        let { airportId, airportName, startDate, endDate } = this.state;
		let errors = {};

		if (airportName === '') errors.airportName = 'Please enter airport name';
		if (startDate === '') errors.startDate = 'Please enter check-in and check-out dates';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {

            // let { airportId, startDate, endDate } = this.state;

            startDate = startDate.format('YYYY-MM-DDTHH:mm');
            endDate = endDate.format('YYYY-MM-DDTHH:mm');

            this.setState({ loading: true });

            this.props.createSearch({
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
									{this.props.location.pathname.match(/\/lot-.*/) ?
										'Get a Quote and Reserve' :
										'Search parking lots'
									}

                                    {this.props.location.pathname.match(/\/lot-.*/) ?
                                        <i className="fa fa-arrow-up" aria-hidden="true" /> : null
                                    }
								</button>

							)}
						</label>
						
					</div>

				</form>
			);
		}
	}
}

SearchForm.propTypes = {
	airports: PropTypes.array.isRequired,
	createSearch: PropTypes.func.isRequired,
	search: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		search: state.search.data,
		airports: state.airports.items
	};
};

export default connect(mapStateToProps, { createSearch, fetchAirports })(withRouter(SearchForm));
