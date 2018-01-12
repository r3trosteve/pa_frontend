import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import cardTypeImg1 from '../../assets/images/checkout/card-type-1.png';
import cardTypeImg2 from '../../assets/images/checkout/card-type-2.png';
import cardTypeImg3 from '../../assets/images/checkout/card-type-3.png';
import cardTypeImg4 from '../../assets/images/checkout/card-type-4.png';

export default class PrsCardType extends Component {
    

    render() {
        return (

            <div className={classnames('col-md-6 col-sm-6', { 'has-error': this.props.errors.cardType })}>
                
                <p className="label-title">
                    Choose Card Type
                </p>

                <div className="ap-checkout__payment-details__inputs__radios">


                    <label className={classnames('radio-label', { 'checked': this.props.cardType === '1' })}>
                        <input 
                            type="radio" 
                            value="1"
                            name="cardType"
                            checked={this.props.cardType === '1'}
                            onChange={this.props.handleChange}
                        />
                        <img src={cardTypeImg1} alt="Visa" />
                    </label>
                    <label className={classnames('radio-label', { 'checked': this.props.cardType === '2' })}>
                        <input 
                            type="radio" 
                            value="2"
                            name="cardType"
                            checked={this.props.cardType === '2'}
                            onChange={this.props.handleChange}
                        />
                        <img src={cardTypeImg2} alt="Mastercard" />
                    </label>
                    <label className={classnames('radio-label', { 'checked': this.props.cardType === '3' })}>
                        <input 
                            type="radio" 
                            value="3"
                            name="cardType"
                            checked={this.props.cardType === '3'}
                            onChange={this.props.handleChange}
                        />
                        <img src={cardTypeImg3} alt="American Express" />
                    </label>
                    <label className={classnames('radio-label', { 'checked': this.props.cardType === '4' })}>
                        <input 
                            type="radio" 
                            value="4"
                            name="cardType"
                            checked={this.props.cardType === '4'}
                            onChange={this.props.handleChange}
                        />
                        <img src={cardTypeImg4} alt="Discover" />
                    </label>
                    
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