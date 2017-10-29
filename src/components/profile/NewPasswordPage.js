import React, { Component } from 'react';
import logoImg3x from '../../assets/images/logo/logo@3x.png';

export default class NewPasswordPage extends Component {
    render() {
        return (
            <div className="profile__new-password">
                <div className="container profile__new-password__container">
                    <div className="profile__new-password__card">
                        <div className="profile__new-password__card__header">
                            <img src={logoImg3x} alt="Logo"/>
                            <h4 className="title">Enter new password</h4>
                        </div>

                        <form className="profile__new-password__form">

                            <label>
                                Enter new password
                                <input type="password"/>
                            </label>

                            <label>
                                Confirm new password
                                <input type="password"/>
                            </label>

                            <button type="submit" className="btn-custom">
                                Submit
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}