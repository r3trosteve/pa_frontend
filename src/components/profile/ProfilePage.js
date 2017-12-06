import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import userImg from '../../assets/images/user.png';

import ProfileItems from "./Items";
import Private from '../profile/Private';

import { updateProfile, updatePassword } from '../../modules/auth/auth';

class ProfilePage extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: 'USA',
            zipCode: '',
            companyName: '',
            confirmPassword: '',
            errors: {},
            isProfileUpdated: false,
            isPwdUpdates: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
        this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    }

    componentWillMount() {
        const user = this.props.auth && this.props.auth.user;

        this.setState({
            firstName: user && user.first_name,
            lastName: user && user.last_name,
            email: user && user.email,
            phone: user && user.phone,
            address1: user && user.location && user.location.address1,
            address2: user && user.location && user.location.address2,
            city: user && user.location && user.location.city,
            state: user && user.location && user.location.state,
            country: user && user.location && user.location.country ? user.location.country : 'USA',
            zipCode: user && user.location && user.location.zip_code,
            companyName: user && user.company_name,
        });
    }

    componentWillReceiveProps(nextProps) {
        const user = nextProps.auth && nextProps.auth.user;

        this.setState({
            firstName: user && user.first_name,
            lastName: user && user.last_name,
            email: user && user.email,
            phone: user && user.phone,
            address1: user && user.location && user.location.address1,
            address2: user && user.location && user.location.address2,
            city: user && user.location && user.location.city,
            state: user && user.location && user.location.state,
            country: user && user.location && user.location.country ? user.location.country : 'USA',
            zipCode: user && user.location && user.location.zip_code,
            companyName: user && user.company_name
        });
    }

    handleChange(e) {
        if (this.state.errors[e.target.name]) {

            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];

            this.setState({
                [e.target.name]: e.target.value,
                errors
            });

        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleProfileUpdate(e) {
        e.preventDefault();

        const { firstName, lastName, email, phone, address1, address2, city, state, country, zipCode, companyName } = this.state;
        let errors = {};

        if (isEmpty(firstName)) { errors.firstName = " can't be empty"; }
        if (isEmpty(lastName)) { errors.lastName = " can't be empty"; }
        if (isEmpty(email)) { errors.email = " can't be empty"; }
        if (isEmpty(phone)) { errors.phone = " can't be empty"; }
        if (isEmpty(city)) { errors.city = " can't be empty"; }
        if (isEmpty(state)) { errors.state = " can't be empty"; }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        const userData = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            location_attributes: {
                address1,
                address2,
                city,
                state,
                country,
                zip_code: zipCode
            },
            company_name: companyName
        };

        if (isValid) {
            this.props.updateProfile(userData)
                .then(() => this.setState({ isProfileUpdated: true }));
        }
    }

    handlePasswordUpdate(e) {
        e.preventDefault();

        const { password, confirmPassword } = this.state;
        let errors = {};

        if (this.state.confirmPassword !== '' && this.state.password === this.state.confirmPassword && this.state.password.length >= 6) {
            this.props.updatePassword({ password })
                .then(() => this.setState({ isPwdUpdated: true }));
        } else if (this.state.confirmPassword !== '' && this.state.password === this.state.confirmPassword && this.state.password.length < 6) {
            errors.password = "Password must contain at least 6 characters";
        } else {
            errors.password = "Passwords don't match";
        }

        this.setState({ errors });
    }

    render() {

        if (this.props.auth && this.props.auth.isAuthenticated) {

            return (
                <div className="profile">

                    <Helmet title="Profile" />

                    <div className="container profile__container">

                        <div className="profile__row row">
                            <div className="col-lg-7 col-md-8 profile__column">

                                <div className="profile__card card-custom card-custom--no-pad">

                                    {/*card header*/}

                                    <div className="profile__card-header">

                                        <div className="profile__card-header__img hidden-xs">
                                            <img src={userImg} alt="User"/>
                                        </div>

                                        <div className="profile__card-header__name">
                                            <h2 className="title-normal-bold">{this.props.auth && this.props.auth.user.name}</h2>
                                        </div>

                                    </div>

                                    {/*item 1*/}

                                    <ProfileItems
                                        user={this.props.auth && this.props.auth.user}
                                        handleProfileUpdate={this.handleProfileUpdate}
                                        handleChange={this.handleChange}
                                        errors={this.state.errors}
                                        firstName={this.state.firstName}
                                        lastName={this.state.lastName}
                                        email={this.state.email}
                                        phone={this.state.phone}
                                        address1={this.state.address1}
                                        address2={this.state.address2}
                                        city={this.state.city}
                                        state={this.state.state}
                                        country={this.state.country}
                                        zipCode={this.state.zipCode}
                                        companyName={this.state.companyName}
                                        handlePasswordUpdate={this.handlePasswordUpdate}
                                        password={this.state.password}
                                        confirmPassword={this.state.confirmPassword}
                                        isProfileUpdated={this.state.isProfileUpdated}
                                        isPwdUpdated={this.state.isPwdUpdated}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            );

        } else {

            return <Private title={"Profile"} />;

        }

    }
}

ProfilePage.propTypes = {
    auth: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { updateProfile, updatePassword })(ProfilePage);