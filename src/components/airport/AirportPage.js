import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AirportPageBenefits from './Benefits';
import AirportPagePopularLots from './Popular';
import AirportPageAllLots from './Lots';
import AirportPageHotels from './Hotels';


export default class AirportPage extends Component {
    render() {
        return (
          <div className="airport">

              <AirportPageBenefits />
              <AirportPagePopularLots />
              <AirportPageAllLots />
              <AirportPageHotels />

          </div>
        );
    }
}