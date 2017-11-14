import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AirportPageBenefits from './Benefits';
import AirportPagePopularLots from './Popular';
import AirportPageAllLots from './Lots';
import AirportPageHotels from './Hotels';
import Form from '../common/form/SearchForm';
import BookTravel from '../common/BookTravel';

import { fetchAirport } from '../../modules/airports/airport';

class AirportPage extends Component {

    static fetchData(store, match) {
        return store.dispatch(fetchAirport(match.params.id));
    }

    componentDidMount() {

        $(window).scrollTop(0); // jq to load page on top

        this.props.fetchAirport(this.props.match.params.id);

        // jq parallax on airport bg

        $(window).scroll(() => {
            const posYZero = 0;
            const wScrollTop = $(window).scrollTop();

            $('.airport__form').css({
                'background-position-y': posYZero + wScrollTop / 3
            });
        });

        // end
    }

    render() {
        return (
          <div className="airport">

              <Helmet title={this.props.airport && this.props.airport.name} />

              <div className="airport__form">
                  <div className="container airport__form__container text-center">

                      <div className="airport__book-travel hidden-xs">
                          <BookTravel />
                      </div>

                      <h1 className="title-big">{this.props.airport && this.props.airport.name}</h1>

                      <Form
                          airportId={this.props.airport.id}
                          airportName={this.props.airport.name}
                      />

                  </div>
              </div>

              <AirportPageBenefits />
              <AirportPagePopularLots />
              <AirportPageAllLots />
              <AirportPageHotels airport={this.props.airport} />

          </div>
        );
    }
}

AirportPage.propTypes = {
    fetchAirport: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    airport: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ airport: state.airport.item });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchAirport }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AirportPage);