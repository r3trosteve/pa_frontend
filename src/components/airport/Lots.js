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

                        {airport && airport.parking_lots && airport.parking_lots.length > 0 && airport.parking_lots.map(lot => {
                            return (

                                <div key={lot.id} className="col-lg-6 col-md-12 airport__lots__column">
                                    <div className="airport__card card-custom">

                                        {/*body*/}

                                        <div className="row airport__card__row">

                                            {/*image*/}

                                            <div className="col-lg-5 col-md-3 col-sm-5 airport__card__column airport__card__column--image">
                                                <div className="airport__card__image">
                                                    <img
                                                        src={lot.logo_utl}
                                                        alt={lot.name}
                                                    />
                                                </div>
                                            </div>

                                            {/*right content*/}

                                            <div className="col-md-9 col-lg-7 col-sm-7 airport__card__column">
                                                <div className="airport__card__content">

                                                    <h5>
                                                        {lot.name}
                                                        <span>{lot.location.address1} {lot.location.address2}</span>
                                                    </h5>

                                                    <div className="airport__card__stars">
                                                        <ReactStars
                                                            className="stars"
                                                            count={5}
                                                            value={4.5}
                                                            size={24}
                                                            color1={'#c1c1c1'}
                                                            color2={'#fdb509'}
                                                            edit={false}
                                                            half={true}
                                                        />
                                                        <p>Excellent <span>(145 reviews)</span></p>
                                                    </div>

                                                    <div className="airport__card__description">
                                                        <p>Some description here</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        {/*footer*/}

                                        <div className="row airport__card__row airport__card__footer">

                                            <div className="col-sm-7">

                                                <b className="airport__card__content__date">Review on <span>Oct 15, 2017</span></b>

                                                <div className="airport__card__review">
                                                    "Have used them before and will keep
                                                    using them - next time December....
                                                    Such nice people!! Excellent..."
                                                </div>

                                            </div>

                                            <div className="col-sm-5">

                                                <a href="#" className="btn-custom">
                                                    VIEW RATES
                                                </a>

                                            </div>

                                        </div>

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