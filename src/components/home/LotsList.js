import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LotsList extends Component {

    render() {
        return (
            <div>

                <h2>Parking Lots</h2>

                {this.props.lots.map(lot => {
                    return <li key={lot.id}><Link to={`/${lot.slug}`}>{lot.name}</Link></li>;
                })}

            </div>
        );
    }
}

LotsList.propTypes = {
    lots: PropTypes.array.isRequired
};