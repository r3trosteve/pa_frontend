import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

export default class RatesList extends Component {
    render() {

        return (
          <div>
              {this.props.rates.map(rate => {
                  return <Rate key={rate.id} rate={rate} />;
              })}
          </div>
        );

        // if (this.props.rates.length !== 0) {
        //
        //     return (
        //         <div>
        //             {this.props.rates.map(rate => {
        //                 return <Rate key={rate.id} rate={rate} />;
        //             })}
        //         </div>
        //     );
        //
        // } else {
        //
        //     return (
        //         <div>
        //             <h2>Nothing found. Please try search again.</h2>
        //         </div>
        //     );
        //
        // }

    }
}

RatesList.propTypes = {
    rates: PropTypes.array.isRequired
};