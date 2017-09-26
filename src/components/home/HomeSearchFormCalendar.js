import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class HomeSearchFormCalendar extends Component {
	render() {

		// label is a format showing startDate and endDate in input

		const { startDate, endDate } = this.props;

		let label = '';
		let start = startDate && startDate.format('DD/MM/YYYY hh:mm A') || '';
		let end = endDate && endDate.format('DD/MM/YYYY hh:mm A') || '';
		label = start + '  ⟶  ' + end;
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

			<label className={classnames('date-label', { 'has-error': this.props.errors.startDate })}>

				<DatetimeRangePicker
					//autoUpdateInput={false}
					locale={locale}
					onApply={this.props.handleCalendarPicker}
					onCancel={this.props.clearCalendarPicker}
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
						placeholder="Leaving date  ⟶  Returning date"
						readOnly
						className="airport-date"
						value={label}
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