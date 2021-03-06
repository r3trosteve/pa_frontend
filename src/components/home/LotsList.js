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

        const lotsAmount = this.props.lots && this.props.lots.length;
        const lotsColumn = Math.floor(lotsAmount / 3);
        const remainderColumn = lotsAmount - lotsColumn * 3;

        return (
            <section className="home__top-airports section-pad">
                <div className="container home__top-airports__container">

                    <div className="home__top-airports__title">
                        <h2 className="title-upper-bold">Parking Lots</h2>
                    </div>

                    <div className="airports-list">


                        <div className="row airports-list__row hidden-sm hidden-xs">

                            <ul className="css-list">
                                {this.props.lots.map((lot, index) => {
                                    return (
                                        <li key={index} className="airports-list__list-item list-another">
                                            <Link to={`/${lot.slug}`}>{lot.name}</Link>
                                        </li>
                                    );
                                })}
                            </ul>

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