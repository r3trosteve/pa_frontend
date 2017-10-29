import React, { Component } from 'react';
import { connect } from 'react-redux';
import supportImg from '../../assets/images/checkout/support.png';
import { Route, Redirect } from 'react-router-dom';

class ProfilePage extends Component {
    render() {

        if (this.props.auth.isAuthenticated) {

            return (
                <div className="profile">

                    <div className="container profile__container">

                        {/*<div><pre>{JSON.stringify(this.props.auth, null, 2)}</pre></div>*/}

                        <div className="profile__row row">
                            <div className="col-md-7 profile__column">

                                <div className="profile__card card-custom card-custom--no-pad">

                                    {/*card header*/}

                                    <div className="profile__card-header">

                                        <div className="profile__card-header__img">
                                            <img src={supportImg} alt="Support" />
                                        </div>

                                        <div className="profile__card-header__name">
                                            <h2 className="title-normal-bold">{this.props.auth.user.name}</h2>
                                        </div>

                                    </div>

                                    {/*item 1*/}

                                    <div className="profile__item profile__update">

                                        <div className="profile__item-header">
                                            <h2 className="title-normal-bold">Update your account settings</h2>
                                            <p className="text-big">Change your email address, password, and other settings.</p>
                                            <i className="ion-chevron-down"></i>
                                        </div>

                                    </div>
                                    <div className="profile__card__item">

                                    </div>
                                    <div className="profile__card__item">

                                    </div>
                                    <div className="profile__card__item">

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-5 profile__column"></div>
                        </div>

                    </div>

                </div>
            );

        } else {

            return (
                <Route
                    render={({ staticContext }) => {
                        if (staticContext) {
                            staticContext.status = 302;
                        }
                        return <Redirect from="/profile" to="/" />;
                    }}
                />
            );

        }

    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ProfilePage);