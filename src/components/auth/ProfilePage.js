import React, { Component } from 'react';
import { connect } from 'react-redux';
import supportImg from '../../assets/images/checkout/support.png';
import { update } from '../../modules/auth';
import classnames from 'classnames';

class ProfilePage extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            errors: {}
        };

        this.handleProfileChange = this.handleProfileChange.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    }

    componentWillMount() {
        this.setState({
            name: this.props.auth.user.name,
            email: this.props.auth.user.email
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.auth.user.name,
            email: nextProps.auth.user.email
        });
    }

    handleProfileChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleProfileUpdate(e) {
        e.preventDefault();

        const { name, email } = this.state;
        this.props.update({ name, email });
    }

    render() {

        if (this.props.auth.isAuthenticated) {

            console.log(this.props.auth.user);

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

                                        <form onSubmit={this.handleProfileUpdate}>

                                            <label>
                                                <input
                                                    type="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={this.state.name}
                                                    onChange={this.handleProfileChange}
                                                />
                                            </label>

                                            <label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={this.handleProfileChange}
                                                />
                                            </label>

                                            <button type="submit">Submit</button>

                                        </form>

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
                <div className="profile">
                    <div className="container profile__container">
                        <h2>
                            You need to login to view this page.
                        </h2>
                    </div>
                </div>
            );

        }

    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { update })(ProfilePage);