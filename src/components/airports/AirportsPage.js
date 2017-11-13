import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import AirportsList from '../home/AirportsList';
import BookTravel from '../common/BookTravel';

import Form from '../common/form/SearchForm';

import { fetchAirports } from '../../modules/airports/airports';

class AirportsPage extends Component {

    static fetchData(store) {
        return store.dispatch(fetchAirports());
    }

    componentDidMount() {
        this.props.fetchAirports();

        $(window).scrollTop(0); // jq to load page on top

        // jq parallax on home bg

        $(window).scroll(() => {
            const posYZero = 0;
            const wScrollTop = $(window).scrollTop();

            $('.airports__form').css({
                'background-position-y': posYZero + wScrollTop / 3
            });
        });

    }

    render() {
        return (
            <div className="airports">

                <Helmet title="Airports" />

                {/*Form*/}

                <div className="airports__form">

                    <div className="container airports__form__container text-center">

                        <BookTravel />

                        <h1 className="title-big">All Airports</h1>

                        <Form />

                    </div>

                </div>

                {/*List section*/}

                <div className="airports__list-section section-pad">

                    <div className="container airports__container">
                        <AirportsList airports={this.props.airports} />
                    </div>

                </div>

            </div>
        );
    }
}

AirportsPage.propTypes = {
    fetchAirports: PropTypes.func.isRequired,
    airports: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ airports: state.airports.items });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchAirports }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AirportsPage);