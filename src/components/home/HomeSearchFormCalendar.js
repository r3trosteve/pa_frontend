import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import DatetimeRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import arrow from 'assets/images/svg/arrow-right.svg';

export default class HomeSearchFormCalendar extends Component {
	render() {

		// label is a format showing startDate and endDate in input

		const { startDate, endDate } = this.props;

		let start = startDate && startDate.format('MM/DD/YYYY hh:mm A') || '';
		let end = endDate && endDate.format('MM/DD/YYYY hh:mm A') || '';

		let locale = {
			format: 'MM/DD/YYYY hh:mm A',
			cancelLabel: 'Clear',
		};

		// end

		return (

			<label className={classnames('date-label', { 'has-error': this.props.errors.startDate })}>

				<span className="label-title">
					When
				</span>

				<DatetimeRangePicker
					onApply={this.props.handleCalendarPicker}
					onCancel={this.props.clearCalendarPicker}
					autoUpdateInput={false}
					timePicker
					minDate={moment()}
					locale={locale}
					showDropdowns
				>
					<input
						type="text"
						name="startDate"
						placeholder="Leaving date"
						readOnly
						className="airport-date"
						value={start}
						onChange={this.props.handleCalendarPicker}
					/>
				</DatetimeRangePicker>

				<span>
					<img src={arrow} alt="Arrow to right" />
				</span>

				<DatetimeRangePicker
					onApply={this.props.handleCalendarPicker}
					onCancel={this.props.clearCalendarPicker}
					autoUpdateInput={false}
					timePicker
					minDate={moment()}
					locale={locale}
					showDropdowns
				>
					<input
						type="text"
						name="endDate"
						placeholder="Returning date"
						readOnly
						className="airport-date"
						value={end}
						onChange={this.props.handleCalendarPicker}
					/>
				</DatetimeRangePicker>

				<span className="error-text">{this.props.errors.startDate}</span>

			</label>

		);
	}

}

HomeSearchFormCalendar.propTypes = {
	// startDate: PropTypes.string.isRequired,
	// endDate: PropTypes.string.isRequired,
	handleCalendarPicker: PropTypes.func.isRequired,
	clearCalendarPicker: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};