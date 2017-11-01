import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAirport } from '../../modules/airport';
import AirportPageBenefits from './Benefits';
import AirportPagePopularLots from './Popular';
import AirportPageAllLots from './Lots';
import AirportPageHotels from './Hotels';


class AirportPage extends Component {

    static fetchData(store, match) {
        return store.dispatch(fetchAirport(match.params.id));
    }

    componentDidMount() {
        this.props.fetchAirport(this.props.match.params.id);
    }

    render() {
        return (
          <div className="airport">

              <Helmet title={this.props.airport && this.props.airport.name} />

              <AirportPageBenefits />
              <AirportPagePopularLots />
              <AirportPageAllLots />
              <AirportPageHotels />

          </div>
        );
    }
}

const mapStateToProps = (state) => ({ airport: state.airport.item });
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAirport }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AirportPage);