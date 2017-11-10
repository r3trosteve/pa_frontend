import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Info from './Info';
import Overview from './Overview';
import Location from './Location';
import Details from './Details';
import Reviews from './Reviews';
import OrderSummary from './OrderSummary';

import { fetchRate } from '../../modules/rates/rate';

class ParkingLotPage extends Component {

    static fetchData(store, match) {
        return store.dispatch(fetchRate(match.params.id));
    }

    componentDidMount() {
        this.props.fetchRate(this.props.match.params.id);

        // jquery

		setTimeout(function () {

            let stickyContainers = function () {
                let wScrollTop = $(window).scrollTop();
                let apdNavCard = $('.ap-details__navigation__card');
                let apdNavTop =  195;
                let apdColumnLeftW = $('.ap-details__column--left').width();

                if (wScrollTop >= apdNavTop) {
                    apdNavCard.addClass('sticky');
                    apdNavCard.css({
                        'width': apdColumnLeftW,
                    });
                } else {
                    apdNavCard.removeClass('sticky');
                }
            };

            stickyContainers();

            $(window).scroll(function () {
                stickyContainers();
            });

            $(window).resize(function () {
                let apdColumnLeftW = $('.ap-details__column--left').width();
                $('.ap-details__navigation__card').css({
					'width': apdColumnLeftW
				});
            });

        }, 300);


    }

	render() {
		return (
			<div className="ap-details">

				<Helmet title={this.props.rate.parking_lot && this.props.rate.parking_lot.name} />

				<div className="container ap-details__container">

					<div className="row ap-details__row">

						{/*left column*/}

						<div className="col-md-7 ap-details__column ap-details__column--left">

                            {/*breadcrumbs*/}

							<ul className="breadcrumb">
								<li>
									<Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
								</li>
								<li>
									<Link to="/airports">Airports</Link>
								</li>
								<li>
									<Link to={`/airports/${this.props.rate.search && this.props.rate.search.airport_id}`}>
                                        {this.props.rate.search && this.props.rate.search.airport.name}
									</Link>
								</li>
								<li>
									<Link to="#">
                                        {this.props.rate.parking_lot && this.props.rate.parking_lot.name}
									</Link>
								</li>
							</ul>

							<div className="ap-details__navigation">

								<div className="ap-details__navigation__card card-custom card-custom--no-pad">

									<div className="ap-details__navigation__item">
										<a href="#">Overview</a>
									</div>
									<div className="ap-details__navigation__item">
										<a href="#">Location</a>
									</div>
									<div className="ap-details__navigation__item">
										<a href="#">Details</a>
									</div>
									<div className="ap-details__navigation__item">
										<a href="#">Reviews</a>
									</div>

								</div>
							</div>

							<Info rate={this.props.rate} />

							<Overview />

							<Location rate={this.props.rate} />

							<Details />

							<Reviews />
                            
						</div>

						{/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">
							<OrderSummary
								rate={this.props.rate}
								openLogModal={this.props.openLogModal}
							/>
						</div>

					</div>

				</div>
			</div>
		);
	}
}

ParkingLotPage.propTypes = {
    fetchRate: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    rate: PropTypes.object.isRequired,
    openLogModal: PropTypes.func
};

const mapStateToProps = state => ({ rate: state.rate.item });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchRate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotPage);
