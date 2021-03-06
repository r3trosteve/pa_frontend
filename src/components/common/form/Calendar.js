import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import DatetimeRangePicker from 'react-bootstrap-daterangepicker';
import arrow from '../../../assets/images/svg/arrow-right.svg';

export default class Calendar extends Component {

	componentDidMount() {

		// jq to show border above calendar

		$('.daterangepicker.dropdown-menu').mouseover(function () {
			$('.date-label input').css({
				'border-color': '#7099bc'
			});
        });

        $('.daterangepicker.dropdown-menu').mouseleave(function () {
            $('.date-label input').css({
                'border-color': 'transparent'
            });
        });

        // end

        // jq close btn for calendar

        let calendarDropdown = $('.daterangepicker.dropdown-menu');

        calendarDropdown.append('<i class="ion-ios-close close-calendar-dropdown"></i>');

        $('.ion-ios-close.close-calendar-dropdown').click(function () {
            calendarDropdown.css({
                'display': 'none'
            });
        });

        // end

		let openCalendarResponsive = function (width) {
			if (width < 767) {
				$('input.airport-date').click(function () {
					$('.daterangepicker.dropdown-menu.ltr.show-calendar.opensright:last-of-type').css({
						'display': 'block'
					});
				});

                $('.airport-date').focus(function () {
                    $('body, html').css({
						'overflow': 'hidden'
					});
                    $(this).blur();
                });

                $('.close-calendar-dropdown, .applyBtn, .cancelBtn').click(function () {
                    $('body, html').css({
                        'overflow': 'visible'
                    });
                });
			}
		};

		let wWidth = $(window).width();

        openCalendarResponsive(wWidth);

		$(window).resize(function () {
            let wWidth = $(window).width();
            openCalendarResponsive(wWidth);
        });

	}

	render() {

		// label is a format showing startDate and endDate in input

		const { startDate, endDate } = this.props;

		let label = '';
		let start = (startDate && startDate.format('MM/DD/YYYY hh:mm A')) || '';
		let end = (endDate && endDate.format('MM/DD/YYYY hh:mm A')) || '';
		label = start + '  -  ' + end;
		if (start === end) {
			label = start;
		}

		let locale = {
			format: 'MM/DD/YYYY hh:mm A',
			cancelLabel: 'Clear'
		};

		// end

		return (
			<label
				className={classnames('date-label', { 'has-error': this.props.errors.startDate })}
				onClick={this.openCalendarMobile}
			>

				<span className="label-title">When</span>

				<div className="hidden-xs">
					<DatetimeRangePicker
						startDate={this.props.startDate ? this.props.startDate : moment().add(1, 'day')}
						endDate={this.props.endDate ? this.props.endDate : moment().add(3, 'day')}
						onApply={this.props.handleCalendarPicker}
						onCancel={this.props.clearCalendarPicker}
						autoUpdateInput={false}
						timePicker
						timePickerIncrement={15}
						minDate={moment()}
						locale={locale}
						showDropdowns
					>
						<input
							type="text"
							name="startDate"
							placeholder="Parking Check-in"
							readOnly
							className="airport-date"
							value={start}
							onChange={this.props.handleCalendarPicker}
						/>
					</DatetimeRangePicker>

					<span className="end-date">{end ? end : 'Parking Check-out'}</span>

					<span className={classnames('arrow', { 'left-arrow': this.props.startDate })}>
						<i className="ion-ios-arrow-thin-right" />
					</span>

					<span className="error-text">{this.props.errors.startDate}</span>
				</div>

				<div className="visible-xs">
					
					<i className="mobile-icon fa fa-calendar" aria-hidden="true" />

					<DatetimeRangePicker
						startDate={this.props.startDate ? this.props.startDate : moment().add(1, 'day')}
						endDate={this.props.endDate ? this.props.endDate : moment().add(3, 'day')}
						onApply={this.props.handleCalendarPicker}
						onCancel={this.props.clearCalendarPicker}
						autoUpdateInput={false}
						timePicker
						timePickerIncrement={15}
						minDate={moment()}
						locale={locale}
						showDropdowns
					>
						<input
							type="text"
							name="startDate"
							placeholder="Parking Check-in  -  Parking Check-out"
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

Calendar.propTypes = {
	errors: PropTypes.object.isRequired,
	handleCalendarPicker: PropTypes.func.isRequired,
	clearCalendarPicker: PropTypes.func.isRequired
};
