import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

                    <div className="airport__lots__row">

                        {airport && airport.parking_lots && airport.parking_lots.map(lot => {
                            return (

                                <div key={lot.id} className="airport__lots__column">
                                    <div className="airport__card card-custom">

                                        {/*body*/}

                                        <div className="row airport__card__row">

                                            {/*image*/}

                                            <div className="col-lg-6 col-md-6 col-sm-5 airport__card__column airport__card__column--image">
                                                <div className="airport__card__image">
                                                    <img
                                                        src={lot.logo_url}
                                                        alt={lot.name}
                                                    />
                                                </div>
                                            </div>

                                            {/*right content*/}

                                            <div className="col-lg-6 col-md-6 col-sm-7 airport__card__column">
                                                <div className="airport__card__content">

                                                    <h5>
                                                        {lot.name}
                                                        <span>
                                                            {lot.location && lot.location.address1}
                                                            {' '}
                                                            {lot.location && lot.location.address2}
                                                            {' '}
                                                            {lot.location && lot.location.city},
                                                            {' '}
                                                            {lot.location && lot.location.state},
                                                            {' '}
                                                            {lot.location && lot.location.country}
                                                        </span>
                                                    </h5>

                                                    <div className="airport__card__stars">
                                                        <ReactStars
                                                            className="stars"
                                                            count={5}
                                                            value={parseFloat(lot && lot.rating || 0)}
                                                            size={24}
                                                            color1={'#c1c1c1'}
                                                            color2={'#fdb509'}
                                                            edit={false}
                                                            half={true}
                                                        />
                                                        <p>
                                                            {/*Excellent*/}
                                                            <span> ({lot && lot.reviews && lot.reviews.length} reviews)</span>
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        {/*footer*/}

                                        <div className="row airport__card__row airport__card__footer">

                                            {lot && lot.reviews && lot.reviews.length > 0 ?
                                                (
                                                    <div className="col-sm-7 airport__card__review-content">

                                                        <b className="airport__card__date">
                                                            Review on
                                                            <span>
                                                                {' '}
                                                                {moment(lot && lot.reviews && lot.reviews.slice(-1)[0].time).format('ll')}
                                                            </span>
                                                        </b>
                                                        <div className="airport__card__review">
                                                            "{lot && lot.reviews && lot.reviews.slice(-1)[0].text.substring(0, 90)}..."
                                                        </div>

                                                    </div>
                                                ) : null
                                            }

                                        </div>

                                        <Link to={`/${lot.slug}`} className="btn-custom">
                                            VIEW DETAILS
                                        </Link>

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