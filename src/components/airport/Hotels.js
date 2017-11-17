import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import AirportPageSeo from './Seo';

export default class AirportPageHotels extends Component {
    render() {
        return (
            <div className="airport__hotels section-pad">

                <div className="container airport__hotels__container">

                    {/*title*/}

                    {/*<h4 className="title-normal-bold-upper text-center">*/}
                        {/*Park Sleep Fly Hotels Near MCO Airport With Parking Packages*/}
                    {/*</h4>*/}

                    {/*card 1*/}

                    {/*<div className="airport__card card-custom">*/}

                        {/*/!*body*!/*/}

                        {/*<div className="row airport__card__row">*/}
                            {/*<div className="col-md-3 col-sm-12 airport__card__column airport__card__column--image">*/}
                                {/*<div className="airport__card__image">*/}
                                    {/*<img*/}
                                        {/*src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"*/}
                                        {/*alt=""*/}
                                    {/*/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-9 col-sm-12 airport__card__column">*/}
                                {/*<div className="airport__card__content">*/}

                                    {/*<h5>*/}
                                        {/*Comfort Suites Orlando Airport*/}
                                        {/*<span>2451 Old National Parkway</span>*/}
                                    {/*</h5>*/}

                                    {/*<div className="airport__card__stars">*/}
                                        {/*<ReactStars*/}
                                            {/*className="stars"*/}
                                            {/*count={5}*/}
                                            {/*value={4.5}*/}
                                            {/*size={24}*/}
                                            {/*color1={'#c1c1c1'}*/}
                                            {/*color2={'#fdb509'}*/}
                                            {/*edit={false}*/}
                                            {/*half={true}*/}
                                        {/*/>*/}
                                        {/*<p>Excellent <span>(145 reviews)</span></p>*/}
                                    {/*</div>*/}

                                    {/*<div className="airport__card__description">*/}
                                        {/*<p>*/}
                                            {/*A brand new luxurious hotel, just 1.5 miles*/}
                                            {/*of the Orlando International Airport. Each*/}
                                            {/*room comes well stocked with the comforts of home.*/}
                                            {/*All rooms are non-smoking and contain either*/}
                                            {/*a King or Two Queen beds. Each room contains*/}
                                            {/*a full size desktop computer, 32" flat screen*/}
                                            {/*television, microwave, refrigerator, and an*/}
                                            {/*iron & ironing board. There is an outdoor pool*/}
                                            {/*with a jacuzzi for your relaxation needs.*/}
                                            {/*There is also a safe for an additional fee*/}
                                            {/*of $1.00 per day, added to all accounts. With*/}
                                            {/*the convenience of being located near the airport,*/}
                                            {/*there is daily free shuttle service every hour*/}
                                            {/*starting at 4:30am-12:30am every half hour on the*/}
                                            {/*hour to the airport. With breakfast being the*/}
                                            {/*most important meal of the day, a free hot breakfast*/}
                                            {/*is served daily. On Monday - Friday it will be*/}
                                            {/*served from 6:00am - 9:30am, and on Saturday and*/}
                                            {/*Sunday from 7:00am - 10:00am. Every day the breakfast*/}
                                            {/*item will change giving you variety, including: an*/}
                                            {/*egg item, a meat item, breads, a variety of pastries,*/}
                                            {/*three different types of cereals, fresh fruits, coffee,*/}
                                            {/*juice, and milk. Grad & Go bags are vailable if your*/}
                                            {/*flight is before breakfast hours.There are port transfers*/}
                                            {/*available, inquire at the front desk, and it will be*/}
                                            {/*handled through a local transportation service*/}
                                            {/*(at additional cost.).The Comfort Suites Hotel is*/}
                                            {/*happy to announce the new shuttle service to the*/}
                                            {/*Orlando Convention Center for a small fee*/}
                                            {/*of $20.00 per person/ roundtrip.*/}
                                        {/*</p>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}

                        {/*</div>*/}

                        {/*<div className="row airport__card__row airport__card__row--hotels-footer">*/}
                            {/*<div className="col-sm-12">*/}
                                {/*<a href="#" className="btn-custom hotels-btn">*/}
                                    {/*Sleep and Park here*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</div>*/}

                    {/*SEO*/}

                    <AirportPageSeo
                        airport={this.props.airport}
                        airport_seo={this.props.airport_seo}
                    />

                </div>

            </div>
        );
    }
}

AirportPageHotels.propTypes = {
    airport: PropTypes.object.isRequired,
    airport_seo: PropTypes.object
};