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

		let label = '';
		let start = startDate && startDate.format('MM/DD/YYYY hh:mm A') || '';
		let end = endDate && endDate.format('MM/DD/YYYY hh:mm A') || '';
		label = start + '  ⟶  ' + end;
		if (start === end) {
			label = start;
		}

		let locale = {
			format: 'MM/DD/YYYY hh:mm A',
			cancelLabel: 'Clear',
		};

		// end

		return (

			<label className={classnames('date-label', { 'has-error': this.props.errors.startDate })} onClick={this.openCalendarMobile}>

				<span className="label-title">
					When
				</span>

				<div className="hidden-xs">

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

					<span className="end-date">
						{end ? end : 'Returning date'}
					</span>

					<span className={classnames('arrow', { 'left-arrow': this.props.startDate })}>
						<i className="ion-ios-arrow-thin-right"></i>
					</span>

					<span className="error-text">{this.props.errors.startDate}</span>

				</div>

				<div className="visible-xs">

					<i class="mobile-icon fa fa-calendar" aria-hidden="true"></i>

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
							placeholder="Leaving date  ⟶  Returning date"
							readOnly
							className="airport-date"
							value={label}
							onChange={this.props.handleCalendarPicker}
						/>

					</DatetimeRangePicker>

					<span className="error-text">{this.props.errors.startDate}</span>

				</div>

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