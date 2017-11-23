import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

import Navigation from './Navigation';
import Info from './Info';
import Overview from './Overview';
import Location from './Location';
import Details from './Details';
import Reviews from './Reviews';
import SearchForm from '../common/form/SearchForm';

import { findLot } from '../../modules/lots/lot';

class ParkingLotPage extends Component {

    static fetchData(store, match) {
        const slug = match.url.replace(/^\/|\/$/g, '');
        return store.dispatch(findLot(slug));
    }

    componentDidMount() {
        this.props.findLot(this.props.match.params.slug);

        $(window).scrollTop(0); // jq to load page on top

        // jquery

        $('body').scrollspy({
			target: ".ap-details__navigation",
            offset: "55"
        });

		setTimeout(function () {

            let stickyContainers = function () {
                let wScrollTop = $(window).scrollTop();

                let apdNavCard = $('.ap-details__navigation__card');
                let summaryCard = $('.order-summary.card-custom');

                let apdNavTop =  185;
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

        const lot = this.props.lot;

		return (
			<div className="ap-details">

                <Helmet
                    title={lot && lot.title || lot.name}
                    meta={[
                        {name: "description", content: lot && lot.description}
                    ]}
                />

                <div className="container ap-details__container">

                    {/*breadcrumbs*/}

                    <ul className="breadcrumb">
                        <li>
                            <Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                        </li>
                        <li>
                            <Link to="/airports">Airports</Link>
                        </li>
                        <li className="current-page">
                            <Link to={`/${this.props.lot && this.props.lot.slug}`}>{this.props.lot && this.props.lot.name}</Link>
                        </li>
                    </ul>

                    <div className="row ap-details__row">

                        {/*left column*/}

                        <div className="col-md-7 ap-details__column ap-details__column--left">

                            <Navigation />

                            <Info lot={lot} />

                            <Overview lot={lot} />

                            <Location lot={lot} />

                            <Details lot={lot} />

                            <Reviews lot={lot} />

                        </div>

                        {/*right column*/}

                        <div className="col-md-5 ap-details__column ap-details__column--summary">

                            <SearchForm
                                airportId={lot && lot.airport_id}
                                airportName={lot && lot.airport_name}
                            />

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ParkingLotPage));
