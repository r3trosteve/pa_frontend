import React, { Component } from 'react';
import ReactStars from 'react-stars';

export default class AirportParkingDetailsReviews extends Component {

    render() {
        return (
            <div className="ap-details__reviews card-custom">

                {/*title*/}

                <div className="ap-details__location__title">
                    <h3 className="title-normal">
                        Reviews
                    </h3>
                </div>

                {/*average rating*/}

                <div className="ap-details__location__rating-average">

                    <p className="text-normal">
                        Rating:
                        <span className="ap-details__location__rating-average-num">
                            <b>4</b>/<b>5</b>
                        </span>
                    </p>

                    <div className="ap-details__location__rating-average-stars">

                        <ReactStars
                            count={5}
                            value={4.5}
                            size={24}
                            color1={'#c1c1c1'}
                            color2={'#fdb509'}
                            edit={false}
                            half={true}
                        />

                        <p>(Based on <span>41</span> reviews)</p>
                    </div>

                </div>

                {/*review*/}

                <div className="ap-details__reviews__review">

                    {/*review header*/}

                    <div className="ap-details__reviews__review-header">

                        <p className="text-mont-bold">Sara Holt</p>

                        <div className="ap-details__location__rating">
                            <span className="ap-details__reviews__review-date">
                                07/03/2017
                            </span>
                            <div className="ap-details__location__rating-stars">

                                <ReactStars
                                    count={5}
                                    value={4}
                                    size={24}
                                    color1={'#c1c1c1'}
                                    color2={'#fdb509'}
                                    edit={false}
                                    half={true}
                                />

                            </div>
                        </div>

                    </div>

                    {/*review body*/}

                    <div className="ap-details__reviews__review-body">
                        <p className="text-normal">
                            Motorhome or Trailer that is the question for you.
                            Here are some of the advantages and disadvantages of both,
                            so you will be confident when purchasing an RV.
                            When comparing Rvs, a motorhome or a travel trailer,
                            should you buy a motorhome or fifth wheeler?
                            The advantages and disadvantages of both are
                            studied so that you can make your choice wisely
                            when purchasing an RV. Possessing a motorhome
                            or fifth wheel is an achievement of a lifetime.
                            It can be similar to sojourning with your residence
                            as you search the various sites of our great land, America.
                        </p>
                    </div>

                </div>

            </div>
        );
    }

}