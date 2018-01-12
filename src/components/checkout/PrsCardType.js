import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PrsCardType extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className={classnames('', { 'has-error': this.props.errors.cardType })}>

                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="1"
                                name="cardType"
                                checked={this.props.cardType === '1'}
                                onChange={this.props.handleChange}
                            />
                            Visa
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="2"
                                name="cardType"
                                checked={this.props.cardType === '2'}
                                onChange={this.props.handleChange}
                            />
                            Mastercard
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="3"
                                name="cardType"
                                checked={this.props.cardType === '3'}
                                onChange={this.props.handleChange}
                            />
                            Amex
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="4"
                                name="cardType"
                                checked={this.props.cardType === '4'}
                                onChange={this.props.handleChange}
                            />
                            Discover
                        </label>
                    </div>

                </div>
            </div>
        );
    }
}

PrsCardType.propTypes = {
    cardType: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};