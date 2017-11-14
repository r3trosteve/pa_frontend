import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class SubmitButton extends Component {
    render() {
        return (
            <div className="order-summary__submit">
                {
                    this.props.auth && this.props.auth.isAuthenticated ?
                        (
                            this.props.loading ?
                                <button
                                    type="submit"
                                    disabled={this.props.loading}
                                    className={classnames('btn-custom', { disabled: this.props.loading })}
                                >
                                    <i className="fa fa-spinner" aria-hidden="true" />
                                    Please wait...
                                </button> :
                                <button
                                    type="submit"
                                    disabled={this.props.loading}
                                    className={classnames('btn-custom', { disabled: this.props.loading })}
                                >
                                    Proceed to checkout
                                </button>
                        ) :
                        (
                            <a className="btn-custom" onClick={this.props.handleNonAuthProceed}>
                                Proceed to checkout
                            </a>
                        )
                }
            </div>
        );
    }
}

SubmitButton.propTypes = {
    auth: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    handleNonAuthProceed: PropTypes.func.isRequired
};