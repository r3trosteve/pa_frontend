import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Info2 from './Info2';
import Overview from './Overview';
import Location2 from './Location2';
import Details from './Details';
import Reviews from './Reviews';
import OrderSummary from './OrderSummary';

import { findLot } from '../../modules/lots/lot';

class ParkingLotPage extends Component {

    static fetchData(store, match) {
        return store.dispatch(findLot(match.params.slug));
    }

    componentDidMount() {
        this.props.findLot(this.props.match.params.slug);

        $(window).scrollTop(0); // jq to load page on top

        // jquery

        $('body').scrollspy({
			target: '.ap-details__navigation',
			offsetTop: -100
        });

		setTimeout(function () {

            let stickyContainers = function () {
                let wScrollTop = $(window).scrollTop();

                let apdNavCard = $('.ap-details__navigation__card');
                let summaryCard = $('.order-summary.card-custom');

                let apdNavTop =  216;
                let apdColumnLeftW = $('.ap-details__column--left').width();
                let apdColumnSummaryW = $('.ap-details__column--summary').width();

                if (wScrollTop >= apdNavTop) {
                    apdNavCard.addClass('sticky');
                    summaryCard.addClass('sticky');
                    apdNavCard.css({
                        'width': apdColumnLeftW,
                    });
                    summaryCard.css({
                        'width': apdColumnSummaryW,
                    });
                } else {
                    apdNavCard.removeClass('sticky');
                    summaryCard.removeClass('sticky');
                }
            };

            stickyContainers();

            $(window).scroll(function () {
                stickyContainers();
            });

            $(window).resize(function () {
                let apdColumnLeftW = $('.ap-details__column--left').width();
                let apdColumnSummaryW = $('.ap-details__column--summary').width();
                $('.ap-details__navigation__card').css({
					'width': apdColumnLeftW
				});
                $('.order-summary.card-custom').css({
                    'width': apdColumnSummaryW
                });
            });

        }, 300);

    }

	render() {
		return (
			<div className="ap-details">

				<Helmet title={this.props.lot && this.props.lot.name} />

				<div className="container ap-details__container">

                    {/*breadcrumbs*/}

					{/*<Link to={`/rates/search/${this.props.rate && this.props.rate.search_id}`} className="back-to hidden-xs">*/}
						{/*<i className="ion-arrow-left-c" aria-hidden="true" />*/}
						{/*{' '}Back to all*/}
						{/*<b>*/}
							{/*{' '}({this.props.rate.search && this.props.rate.search.airport.code})*/}
							{/*{' '}{this.props.rate.search && this.props.rate.search.airport.name}*/}
							{/*{' '}*/}
						{/*</b>*/}
						{/*Lots*/}
					{/*</Link>*/}

					{/*<Link to={`/rates/search/${this.props.rate && this.props.rate.search_id}`} className="back-to visible-xs">*/}
						{/*<i className="ion-arrow-left-c" aria-hidden="true" />*/}
                        {/*{' '}Back to results*/}
					{/*</Link>*/}

					{/*<ul className="breadcrumb">*/}
						{/*<li>*/}
							{/*<Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>*/}
						{/*</li>*/}
						{/*<li>*/}
							{/*<Link to="/airports">Airports</Link>*/}
						{/*</li>*/}
						{/*<li>*/}
							{/*<Link to={`/airports/${this.props.rate.search && this.props.rate.search.airport_id}`}>*/}
                                {/*{this.props.rate.search && this.props.rate.search.airport.name}*/}
							{/*</Link>*/}
						{/*</li>*/}
						{/*<li className="current-page">*/}
							{/*<Link to="#">*/}
                                {/*{this.props.rate.parking_lot && this.props.rate.parking_lot.name}*/}
							{/*</Link>*/}
						{/*</li>*/}
					{/*</ul>*/}

					<div className="row ap-details__row">

						{/*left column*/}

						<div className="col-md-7 ap-details__column ap-details__column--left">

							<div className="ap-details__navigation">

								<ul className="ap-details__navigation__card nav card-custom card-custom--no-pad">

									<li className="ap-details__navigation__item">
										<a href="#apd-overview">Overview</a>
									</li>
									<li className="ap-details__navigation__item">
										<a href="#apd-location">Location</a>
									</li>
									<li className="ap-details__navigation__item">
										<a href="#apd-details">Details</a>
									</li>
									<li className="ap-details__navigation__item">
										<a href="#apd-reviews">Reviews</a>
									</li>
									<li className="ap-details__navigation__item visible-xs">
										<a href="#summary">Summary</a>
									</li>

								</ul>
							</div>

							<Info2 lot={this.props.lot} />

							<Overview />

							<Location2 lot={this.props.lot} />

							<Details />

							<Reviews />
                            
						</div>

						{/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">
							{/*<OrderSummary*/}
								{/*rate={this.props.rate}*/}
								{/*openLogModal={this.props.openLogModal}*/}
							{/*/>*/}
						</div>

					</div>

				</div>
			</div>
		);
	}
}

ParkingLotPage.propTypes = {
    findLot: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    lot: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ lot: state.lot.item });
const mapDispatchToProps = dispatch => bindActionCreators({ findLot }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotPage);
