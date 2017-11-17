import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class AirportPageAllLots extends Component {
    render() {

        const airport = this.props.airport;
        const airport_seo = this.props.airport_seo;

        return (
            <div className="airport__lots section-pad">

                <div className="container airport__lots__container">

                    <h4 className="title-normal-bold-upper text-center">
                        All {airport && airport.name} Lots...
                    </h4>

                    <div className="row airport__lots__row">

                        {airport && airport.parking_lots && airport.parking_lots.length > 0 && airport.parking_lot.map((lot, index) => {
                            return (

                                <div key={index} className="col-lg-6 col-md-12 airport__lots__column">
                                    <div className="airport__card card-custom">
                                        <h5>{lot.name}</h5>
                                    </div>
                                </div>

                            );
                        })}

                    </div>
                </div>

            </div>
        );
    }
}

AirportPageAllLots.propTypes = {
    airport: PropTypes.object.isRequired,
    airport_seo: PropTypes.object
};