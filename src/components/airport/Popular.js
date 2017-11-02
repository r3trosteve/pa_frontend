import React, { Component } from 'react';
import ReactStars from 'react-stars';

export default class AirportPagePopularLots extends Component {
    render() {
        return (
            <div className="airport__popular section-pad">

                <div className="container airport__popular__container">

                    <div className="row airport__popular__row">

                        {/*LEFT COLUMN*/}

                        <div className="col-lg-6 col-md-7 airport__popular__column">

                            {/*title*/}

                            <h4 className="title-normal-bold-upper">
                                Today’s Most Popular MCO Parking Lots
                            </h4>

                            {/*card 1*/}

                            <div className="airport__card card-custom">

                                {/*body*/}

                                <div className="row airport__card__row">
                                    <div className="col-sm-5 airport__card__column airport__card__column--image">
                                        <div className="airport__card__image">
                                            <img
                                                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 airport__card__column">
                                        <div className="airport__card__content">

                                            <h5>
                                                WallyPark Airport Parking
                                                <span>2451 Old National Parkway</span>
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

                                            <div className="airport__card__review">
                                                <b className="airport__card__content__date">Review on <span>Oct 15, 2017</span></b>
                                                <p>
                                                    "Have used them before and will keep
                                                    using them - next time December....
                                                    Such nice people!! Excellent..."
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/*footer*/}

                                <div className="row airport__card__row">
                                    <div className="col-sm-12 airport__card__footer">
                                        <a href="#" className="btn-custom">
                                            VIEW RATES
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/*card 2*/}

                            <div className="airport__card card-custom">

                                {/*body*/}

                                <div className="row airport__card__row">
                                    <div className="col-sm-5 airport__card__column airport__card__column--image">
                                        <div className="airport__card__image">
                                            <img
                                                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 airport__card__column">
                                        <div className="airport__card__content">

                                            <h5>
                                                WallyPark Airport Parking
                                                <span>2451 Old National Parkway</span>
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

                                            <div className="airport__card__review">
                                                <b className="airport__card__content__date">Review on <span>Oct 15, 2017</span></b>
                                                <p>
                                                    "Have used them before and will keep
                                                    using them - next time December....
                                                    Such nice people!! Excellent..."
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/*footer*/}

                                <div className="row airport__card__row">
                                    <div className="col-sm-12 airport__card__footer">
                                        <a href="#" className="btn-custom">
                                            VIEW RATES
                                        </a>
                                    </div>
                                </div>

                            </div>


                        </div>

                        {/*END LEFT COLUMN*/}

                        {/*RIGHT COLUMN*/}

                        <div className="col-lg-6 col-md-5 airport__popular__column airport__popular__column--right">
                            <h4 className="title-normal-bold-upper">
                                MCO Parking Reservations
                            </h4>
                            <p className="text-big">
                                Whether you need short or long term parking
                                at Orlando International Airport (MCO parking)
                                our site offers a wide range of parking options
                                and prices so you can compare and save on
                                off-site Orlando Airport parking.
                                <br/>
                                <br/>
                                We offer a wide selection of Orlando Airport parking options at low rates. We work with 100s of parking lot operators nationwide to offer our customers great rates and discounts. The lot operators listed on our site offer low-cost parking options such as self drive, covered, valet and long term parking.
                                <br/>
                                <br/>
                                Use the search field above to find
                                the Orlando Airport parking deal that meets your needs.
                                All operators offer free shuttle service to
                                Orlando International Airport (MCO) when you
                                leave your car at their secure lots.
                                <br/>
                                <br/>
                                For your convenience our compare & save service includes:
                                <br/>
                                <br/>
                                - Access to the best rates from popular parking lots
                                <br/>
                                - 1000’s of real custom reviews
                                <br/>
                                - Free cancellations
                                <br/>
                                - Guaranteed bookings
                                <br/>
                                - Safe & easy to use reservation system
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}