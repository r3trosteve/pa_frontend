import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HomeSearchFormAirport from 'components/common/form/SearchFormAirport';
import HomeSearchFormCalendar from 'components/common/form/SearchFormCalendar';
import { getSuggestions } from 'utils';
import moment from 'moment';
import { connect } from 'react-redux';
import { postSearch } from 'actions/search';

class AirportParkingSearchForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			airportId: '',
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
        this.handleAirportSelected = this.handleAirportSelected.bind(this);

		this.handleCalendarPicker = this.handleCalendarPicker.bind(this);
		this.clearCalendarPicker = this.clearCalendarPicker.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			airportId: nextProps.searchData.airport_id,
			airportName: nextProps.searchData.airport.name,
			startDate: moment(nextProps.searchData.arrive_at),
			endDate: moment(nextProps.searchData.exit_at)
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
		if (startDate === '') errors.startDate = 'Please enter check-in and check-out dates';

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
            // api request goes here
            let { airportId, startDate, endDate } = this.state;

            startDate = startDate.format('YYYY-MM-DDTHH:mm');
            endDate = endDate.format('YYYY-MM-DDTHH:mm');

            this.setState({ loading: true });

            console.log('id: ' + airportId + ' start: ' + startDate + ' end: ' + endDate);

            this.props.postSearch({
                airport_id: airportId,
                arrive_at: startDate,
                exit_at: endDate
            })
				.then(() => this.props.getRates(this.props.searchData.id))
                .then(() => this.setState({
                    loading: false,
                }))
                .catch(err => err.response.json());
		}
	}

	render() {

        console.log('state', this.state.airportId);
        console.log('search', this.props.searchData);

		return (

			<form onSubmit={this.handleSubmit} className="airport-parking__search-form">

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
										Updating...
									</button> :
									<button
										type="submit"
										disabled={this.state.loading}
										className={classnames('btn-custom btn-custom--big', { 'disabled': this.state.loading })}
									>
										Update
									</button>
							}
						</label>

					</div>

				</div>

			</form>

		);
	}

}

AirportParkingSearchForm.propTypes = {
	airports: PropTypes.array.isRequired,
    searchData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        searchData: state.searchReducer
    };
};

export default connect(mapStateToProps, { postSearch })(AirportParkingSearchForm);