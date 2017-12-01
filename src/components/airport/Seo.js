import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AirportPageSeo extends Component {
    render() {

        const airport = this.props.airport;
        const airport_seo = this.props.airport.seo_content;

        return (
            <div className="airport__seo section-pad">

               <div className="container airport__seo__container">  

                    {/*breadcrumbs*/}
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
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
                        <h6 className="text-mont-bold">Sightseeing</h6>
                        <p className="text-big">
                            {airport_seo && airport_seo.sightseeing}
                        </p>
                    </div>

                    <div className="airport__seo__item">
                        <h6 className="text-mont-bold">The Good Side of {airport && airport.code}</h6>
                        <p className="text-big">
                            {airport_seo && airport_seo.advantages}
                        </p>
                    </div>

                    <div className="airport__seo__item">
                        <h6 className="text-mont-bold">The Bad Side of {airport && airport.code}</h6>
                        <p className="text-big">
                            {airport_seo && airport_seo.disadvantages}
                        </p>
                    </div>

                </div>


            </div>
        );
    }
}

AirportPageSeo.propTypes = {
    airport: PropTypes.object.isRequired,
    airport_seo: PropTypes.object
};