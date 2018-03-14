import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Coupon extends Component {
    render() {
        return (
            <table className="order-summary__table coupon">
                <tbody>
                    <tr>
                        <td>
                            <span className="order-summary__coupon-btn" onClick={this.props.showCouponInput}>
                                Have a Coupon Code?
                            </span>
                        </td>
                        <td>
                            <form onSubmit={this.props.handleCouponSubmit}>

                                <label
                                    className={classnames('order-summary__coupon-label', {
                                        visible: this.props.showCoupon
                                    })}
                                >
                                    <input onChange={this.props.handleCouponChange} type="text" name="coupon" />
                                </label>

                                <label
                                    className={classnames('order-summary__coupon-label label-submit', {
                                        visible: this.props.showCoupon
                                    })}
                                >
                                    <button 
                                        type="submit" 
                                        className="btn-custom"
                                        disabled={this.props.couponBtnDisabled ? 'disabled': null}
                                    >
                                        Submit
                                    </button>
                                </label>

                            </form>

                            <div className={classnames('coupon-error', { visible: this.props.showCoupon })}>
                                {this.props.couponError}
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

Coupon.propTypes = {
    showCouponInput: PropTypes.func,
    handleCouponSubmit: PropTypes.func,
    showCoupon: PropTypes.bool,
    couponBtnDisabled: PropTypes.bool,
    couponError: PropTypes.string
};