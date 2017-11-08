import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class GoogleMapMark extends Component {

    componentDidMount() {

        // jq to open/close google map marker

        $('.rates__map-info__price').click(function () {
            $('.rates__map-info__details').hide();
            $(this).parent().find('.rates__map-info__details').show();
        });

        $('.rates__map-info__details i.ion-ios-close').click(function () {
            $(this).parent().hide();
        });

        // end

    }

    render() {
        return (
            <div className="rates__map-info" >

                <div className="rates__map-info__details">

                    <i className="ion-ios-close" />

                    <h2>{this.props.rate.parking_lot.name}</h2>

                    <p className="text-bold">
                        <span>1</span> mile(s)
                        from <span>airport</span>
                    </p>

                    <Link to={`/airport-parking/${this.props.rate.id}`} className="btn-custom">View details</Link>

                    <i className="fa fa-caret-down" aria-hidden="true" />

                </div>

                <span className="rates__map-info__price">
                    <i className="fa fa-caret-down" aria-hidden="true" />
                    ${this.props.rate.price.total}
                </span>

            </div>
        );
    }

}

GoogleMapMark.propTypes = {
    rate: PropTypes.object.isRequired
};