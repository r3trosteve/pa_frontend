import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LotsList extends Component {

    constructor() {
        super();

        this.state = {
            visible: false
        };

        this.showMore = this.showMore.bind(this);
        this.showList = this.showList.bind(this);
    }

    showMore() {
        this.setState({ visible: !this.state.visible });
    }

    showList(index, lot) {
        return (
            <li key={index} className="airports-list__list-item">
                <Link to={`/${lot.slug}`}>{lot.name}</Link>
            </li>
        );
    }

    render() {

        console.log('lots amount:', this.props.lots.length);

        const lotsAmount = this.props.lots && this.props.lots.length;
        const lotsColumn = Math.floor(lotsAmount / 3);
        const remainderColumn = lotsAmount - lotsColumn * 3;

        // console.log(lotsAmount);
        // console.log(lotsColumn);
        // console.log(remainderColumn);

        return (
            <section className="home__top-airports section-pad">
                <div className="container home__top-airports__container">

                    <div className="home__top-airports__title">
                        <h2 className="title-upper-bold">Parking Lots</h2>
                    </div>

                    <div className="airports-list">
                        <div className="row airports-list__row hidden-sm hidden-xs">

                            {/*1*/}

                            <div className="col-md-4 col-sm-4 airports-list__column">
                                <ul className="airports-list__list">
                                    {this.props.lots.slice(0, lotsColumn).map((lot, index) => this.showList(index, lot))}
                                </ul>
                            </div>

                            {/*2*/}

                            <div className="col-md-4 col-sm-4 airports-list__column">
                                <ul className="airports-list__list">
                                    {this.props.lots.slice(lotsColumn, lotsColumn * 2).map((lot, index) => this.showList(index, lot))}
                                </ul>
                            </div>

                            {/*3*/}

                            <div className="col-md-4 col-sm-4 airports-list__column">
                                <ul className="airports-list__list">
                                    {this.props.lots.slice(lotsColumn * 2, lotsColumn * 3 + remainderColumn).map((lot, index) => this.showList(index, lot))}
                                </ul>
                            </div>

                            <div className="col-md-12 text-center">
                                <span className="btn-custom show-more">
                                    Show more
                                </span>
                            </div>

                        </div>

                        {/*mobile*/}

                        <div className="row airports-list__row visible-sm visible-xs">
                            <div className="col-md-12 airports-list__column text-center">

                                <ul className="airports-list__list">

                                    {
                                        this.state.visible ?
                                            this.props.lots.slice(0, lotsAmount).map((lot, index) => this.showList(index, lot)) :
                                            this.props.lots.slice(0, 10).map((lot, index) => this.showList(index, lot))
                                    }

                                    <span onClick={this.showMore} className="btn-custom">
                                        {this.state.visible ? 'Show less' : 'Show more'}
                                    </span>

                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }

}

LotsList.propTypes = {
    lots: PropTypes.array.isRequired
};