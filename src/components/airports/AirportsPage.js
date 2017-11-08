import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Form from '../common/form/SearchForm';

import { fetchAirports } from '../../modules/airports/airports';

class AirportsPage extends Component {

    static fetchData(store) {
        return store.dispatch(fetchAirports());
    }

    componentDidMount() {
        this.props.fetchAirports();
    }

    render() {
        return (
          <div>

              <Helmet title="Airports" />

              <Form />

              <ul>
                  {this.props.airports.map(airport => {
                      return (
                          <li key={airport.id}>
                              <Link to={`/airports/${airport.id}`}>
                                  {airport.name}
                              </Link>
                          </li>
                      );
                  })}
              </ul>

          </div>
        );
    }
}

AirportsPage.propTypes = {
    fetchAirports: PropTypes.func.isRequired,
    airport: PropTypes.object.isRequired,
    airports: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ airports: state.airports.items });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchAirports }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AirportsPage);