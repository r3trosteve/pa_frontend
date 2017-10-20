import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMapMark extends Component {

    constructor() {
        super();

        this.state = {
          isDetailsOpened: false
        };

        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.showMark = this.showMark.bind(this);
    }

    handleShowDetails() {
        this.setState({ isDetailsOpened: true });
    }

    showDetails() {
        return (
          <div>
              <span>
                  DETAILS
              </span>
          </div>
        );
    }

    showMark() {
        return (
            <span onClick={this.showDetails}>
                <i className="fa fa-caret-down" aria-hidden="true" />
                ${this.props.rate.price.total}
            </span>
        );
    }

    render() {
        return (
            <div className="airport-parking__map-price">

                {this.state.isDetailsOpened ? this.showDetails : this.showMark() }
            </div>
        );
    }

}

GoogleMapMark.propTypes = {
    rate: PropTypes.object.isRequired
};