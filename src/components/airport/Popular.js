import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class AirportPagePopularLots extends Component {
    render() {

        const airport = this.props.airport;
        const airport_seo = this.props.airport_seo;

        return (
            <div className="airport__popular section-pad">

                <div className="container airport__popular__container">

                    <div className="row airport__popular__row">

                        {/*RIGHT COLUMN*/}

                        <div className="col-lg-12 airport__popular__column airport__popular__column--right">
                            <h4 className="title-normal-bold-upper">
                                {airport_seo && airport_seo.header2}
                            </h4>
                            <p className="text-big">
                                {airport_seo && airport_seo.text1}
                                <br/>
                                <br/>
                                {airport_seo && airport_seo.text2}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

AirportPagePopularLots.propTypes = {
    airport: PropTypes.object.isRequired,
    airport_seo: PropTypes.object
};