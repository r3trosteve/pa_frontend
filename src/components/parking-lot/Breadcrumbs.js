import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Breadcrumbs extends Component {
    render() {

        const rate = this.props.rate;

        return (
            <div>
                <Link to={`/rates/search/${rate && rate.search_id}`} className="back-to hidden-xs">
                    <i className="ion-arrow-left-c" aria-hidden="true" />
                    {' '}Back to all
                    <b>
                        {' '}({rate.search && rate.search.airport.code})
                        {' '}{rate.search && rate.search.airport.name}
                        {' '}
                    </b>
                    Lots
                </Link>

                <Link to={`/rates/search/${rate && rate.search_id}`} className="back-to visible-xs">
                    <i className="ion-arrow-left-c" aria-hidden="true" />
                    {' '}Back to results
                </Link>

                <ul className="breadcrumb">
                    <li>
                        <Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li>
                        <Link to="/airports">Airports</Link>
                    </li>
                    <li>
                        <Link to={`/${rate.search && rate.search.airport && rate.search.airport.slug}`}>
                            {rate.search && rate.search.airport.name}
                        </Link>
                    </li>
                    <li className="current-page">
                        <Link to="#">
                            {rate.parking_lot && rate.parking_lot.name}
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {
    rate: PropTypes.object.isRequired,
};