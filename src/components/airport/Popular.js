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

                        {/*LEFT COLUMN*/}

                        <div className="col-lg-6 col-md-7 airport__popular__column">

                            {/*title*/}

                            <h4 className="title-normal-bold-upper">
                                Today’s Most Popular {airport && airport.code} Parking Lots
                            </h4>

                            {/*card 1*/}

                            {/*<div className="airport__card card-custom">*/}

                                {/*/!*body*!/*/}

                                {/*<div className="row airport__card__row">*/}
                                    {/*<div className="col-sm-5 airport__card__column airport__card__column--image">*/}
                                        {/*<div className="airport__card__image">*/}
                                            {/*<img*/}
                                                {/*src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"*/}
                                                {/*alt=""*/}
                                            {/*/>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-7 airport__card__column">*/}
                                        {/*<div className="airport__card__content">*/}

                                            {/*<h5>*/}
                                                {/*WallyPark Airport Parking*/}
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

                                            {/*<div className="airport__card__review">*/}
                                                {/*<b className="airport__card__content__date">Review on <span>Oct 15, 2017</span></b>*/}
                                                {/*<p>*/}
                                                    {/*"Have used them before and will keep*/}
                                                    {/*using them - next time December....*/}
                                                    {/*Such nice people!! Excellent..."*/}
                                                {/*</p>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*/!*footer*!/*/}

                                {/*<div className="row airport__card__row">*/}
                                    {/*<div className="col-sm-12 airport__card__footer">*/}
                                        {/*<a href="#" className="btn-custom">*/}
                                            {/*VIEW RATES*/}
                                        {/*</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</div>*/}

                        </div>

                        {/*END LEFT COLUMN*/}

                        {/*RIGHT COLUMN*/}

                        <div className="col-lg-6 col-md-5 airport__popular__column airport__popular__column--right">
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