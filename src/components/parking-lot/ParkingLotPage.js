import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import Navigation from './Navigation';
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

        $(window).scrollTop(0); // jq to load page on top

        // jquery

        $('body').scrollspy({
			target: '.ap-details__navigation',
			offsetTop: -100
        });

		setTimeout(function () {

            let stickyContainers = function () {

                const ifDetailsPage = $('.ap-details');

                if (ifDetailsPage.length != 0) {
                    let wScrollTop = $(window).scrollTop();

                    let apdNavCard = $('.ap-details__navigation__card');
                    let summaryCard = $('.order-summary.card-custom');

                    let apdNavTop =  $('.ap-details__navigation').offset().top;
                    let apdSummaryTop =  215;

                    let apdColumnLeftW = $('.ap-details__column--left').width();
                    let apdColumnSummaryW = $('.ap-details__column--summary').width();

                    if (wScrollTop >= apdNavTop) {
                        apdNavCard.addClass('sticky');
                        apdNavCard.css({
                            'width': apdColumnLeftW,
                        });
                    } else {
                        apdNavCard.removeClass('sticky');
                    }

                    if (wScrollTop >= apdSummaryTop) {
                        summaryCard.addClass('sticky');
                        summaryCard.css({
                            'width': apdColumnSummaryW,
                        });
                    } else {
                        summaryCard.removeClass('sticky');
                    }
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

		const rate = this.props.rate;
		const lot = rate && rate.parking_lot;

		return (
			<div className="ap-details">

				<Helmet
                    title={lot && lot.title || lot && lot.name}
                    meta={[
                        {name: "description", content: lot && lot.description}
                    ]}
                />

				<div className="container ap-details__container">

                    {/*breadcrumbs*/}

                    <Breadcrumbs rate={rate} />

					<div className="row ap-details__row">

						{/*left column*/}

						<div className="col-md-7 ap-details__column ap-details__column--left">

							<Info
								rate={rate}
								lot={lot}
							/>

                            <Navigation />

							<Overview lot={lot} />

							<Location
								rate={rate}
								lot={lot}
							/>

							<Details lot={lot} />

							<Reviews lot={lot} />
                            
						</div>

						{/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">

							<OrderSummary
								rate={rate}
								// openLogModal={this.props.openLogModal}
							/>

						</div>

					</div>

				</div>
			</div>
		);
	}
}

ParkingLotPage.propTypes = {
    fetchRate: PropTypes.func,
    rate: PropTypes.object,
	lot: PropTypes.object,
    match: PropTypes.object.isRequired,
    openLogModal: PropTypes.func
};

const mapStateToProps = state => ({
	rate: state.rate.item
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchRate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotPage);
