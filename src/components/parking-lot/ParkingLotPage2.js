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

        setTimeout(function () {
            $('body').scrollspy({
                target: ".ap-details__navigation"
            });
        });

        $('.ap-details--with-search button').click(function () {
            
            let wWidth = $(window).width();
    
            if (wWidth < 767) {
                
                if ($('input.airport-date').val().length === 0) {
                    $('input.airport-date').click();
                }
                
            }

        });

		setTimeout(function () {

            let stickyContainers = function () {
                let wScrollTop = $(window).scrollTop();

                let apdNavCard = $('.ap-details__navigation__card');
                let searchCard = $('.ap-details__search.card-custom');

                let apdNavTop =  195;
                let apdColumnLeftW = $('.ap-details__column--left').width();
                let apdColumnSearchW = $('.ap-details__column--search').width();

                if (wScrollTop >= apdNavTop) {
                    apdNavCard.addClass('sticky');
                    searchCard.addClass('sticky');
                    apdNavCard.css({
                        'width': apdColumnLeftW,
                    });
                    searchCard.css({
                        'width': apdColumnSearchW,
                    });
                } else {
                    apdNavCard.removeClass('sticky');
                    searchCard.removeClass('sticky');
                }
            };

            stickyContainers();

            $(window).scroll(function () {
                stickyContainers();
            });

            $(window).resize(function () {
                let apdColumnLeftW = $('.ap-details__column--left').width();
                let apdColumnSearchW = $('.ap-details__column--search').width();
                $('.ap-details__navigation__card').css({
					'width': apdColumnLeftW
				});
                $('.ap-details__search.card-custom').css({
                    'width': apdColumnSearchW
                });
            });

        }, 300);

    }

	render() {

        const lot = this.props.lot;

		return (
			<div className="ap-details ap-details--with-search">

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
                        <li>
                            <Link to={`/${lot && lot.airport && lot.airport.slug}`}>{lot && lot.airport && lot.airport.name}</Link>
                        </li>
                        <li className="current-page">
                            <Link to={`/${lot && lot.slug}`}>{lot && lot.name}</Link>
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

                        <div className="col-md-5 ap-details__column ap-details__column--search">

                            <div className="card-custom card-custom--no-pad ap-details__search">
                                <div className="ap-details__search__header">
                                    <h2>Get Rate Quote "{lot && lot.name}"</h2>
                                </div>

                                <SearchForm
                                    airportId={lot && lot.airport && lot.airport.id}
                                    airportName={lot && lot.airport && lot.airport.name}
                                />
                            </div>

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
