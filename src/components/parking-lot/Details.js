import React, { Component } from 'react';

export default class Details extends Component {

    render() {
        return (
            <div className="ap-details__details card-custom">

                <div className="ap-details__details__title">
                    <h3 className="title-normal">
                        Details
                    </h3>
                </div>

                <div className="row ap-details__details__row">

                    {/*left*/}

                    <div className="col-sm-5 ap-details__details__column">

                        <table className="ap-details__details__table">

                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-mont-bold">
                                        Operation Hours
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Open 24 Hours</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    {/*right*/}

                    <div className="col-sm-7 ap-details__details__column text-right">

                        <p className="text-mont-bold">Additional Info</p>

                        <ul className="ap-details__details__list text-normal">
                            <li className="ap-details__details__list-item">
                                Wally Park Atlanta offers 3 different parking options:
                            </li>
                            <li className="ap-details__details__list-item">
                                Covered Self Parking (listed as Covered)
                            </li>
                            <li className="ap-details__details__list-item">
                                Covered Valet Parking (listed as Valet)
                            </li>
                            <li className="ap-details__details__list-item">
                                Outdoor Self Parking (listed as Self)
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
        );
    }

}