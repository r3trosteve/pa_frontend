import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import InfoList from '../common/InfoList';

export default class RateMobile extends Component {
    render() {

        const rate = this.props.rate;
        const lot = this.props.rate.parking_lot;

        return (
            <Link to={`/airport-parking/${rate.id}`} className="rates-mobile__item">

                <div className="rates-mobile__item__content">

                    {/*row*/}

                    <div className="rates-mobile__item__row">

                        {/*image*/}

                        <div className="rates-mobile__item__image">
                            <img src={lot && lot.logo_url} alt={lot && lot.name} />
                        </div>

                        {/*left*/}

                        <div className="rates-mobile__item__description">

                            {/*header*/}

                            <div className="rates-mobile__item__header">

                                <h2>
                                    {lot && lot.name}
                                    <span>${rate.price.total}</span>
                                </h2>

                                <div className="rates-mobile__item__header__stars">

                                    <ReactStars
                                        className="stars"
                                        count={5}
                                        value={parseFloat(lot && lot.rating)}
                                        size={20}
                                        color1={'#c1c1c1'}
                                        color2={'#fdb509'}
                                        edit={false}
                                        half={true}
                                    />

                                    <p>
                                        (<span>{lot && lot.reviews && lot.reviews.length}</span> reviews)
                                    </p>

                                </div>

                                {/*info list*/}

                                <InfoList
                                    distance={rate.distance.toFixed(1)}
                                    type={rate.name}
                                />

                            </div>

                        </div>
                    </div>

                </div>

            </Link>
        );
    }
}

RateMobile.propTypes = {
    rate: PropTypes.object.isRequired
};
