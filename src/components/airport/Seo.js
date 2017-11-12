import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AirportPageSeo extends Component {
    render() {
        return (
            <div className="airport__seo">
                {/*breadcrumbs*/}

                <ul className="breadcrumb">
                    <li>
                        <Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    </li>
                    <li>
                        <Link to="/airports">Airports</Link>
                    </li>
                    <li className="current-page">
                        <Link to={`/airports/${this.props.airport.id}`}>
                            {this.props.airport.name}
                        </Link>
                    </li>
                </ul>

                <div className="airport__seo__item">
                    <h6 className="text-mont-bold">The Disney World Airport</h6>
                    <p className="text-big">
                        Whenever someone thinks of Orlando,
                        they immediately think of Disney World.
                        This and other Orlando based tourist
                        attractions are fed by MCO airport.
                        MCO is the Orlando area’s international
                        airport; a sort of revolving door for
                        tourists from all over.
                    </p>
                </div>

                <div className="airport__seo__item">
                    <h6 className="text-mont-bold">The Good Side of MCO</h6>
                    <p className="text-big">
                        MCO scores points for being clean and efficient
                        it's a large airport. It is spacious,
                        and has a lot of natural lighting,
                        as found in the atrium area.
                        It also has a four star hotel,
                        the Hyatt Regency, located right
                        inside the airport for convenient
                        lodging. MCO has a wide variety of
                        shops (including the Disney and Universal brands)
                        to pick up last minute souvenirs.
                        There is also free Wi-Fi and comfortable
                        seating for relaxing between flights.
                        In line with the overall hospitality
                        aura of Orlando, TSA is perceived to
                        be mostly warm and friendly
                        with travelers.
                    </p>
                </div>

                <div className="airport__seo__item">
                    <h6 className="text-mont-bold">The Bad Side of MCO</h6>
                    <p className="text-big">
                        Security checkpoints can slow considerably
                        due to the high volume of tourist traffic.
                        Likewise, lines for restaurants and stores
                        can also get anxiously long during peak hours.
                        Baggage return also suffers from slow service,
                        further adding to frustrating wait times.
                    </p>
                </div>

            </div>
        );
    }
}

AirportPageSeo.propTypes = {
    airport: PropTypes.object.isRequired
};