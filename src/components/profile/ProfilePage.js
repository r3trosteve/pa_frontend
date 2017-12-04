import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import userImg from '../../assets/images/user.png';

import ProfileItems from "./Items";
import Private from '../profile/Private';

import { updateProfile, updatePassword } from '../../modules/auth/auth';

class ProfilePage extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
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
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
        this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    }

    componentWillMount() {
        this.setState({
            name: this.props.auth && this.props.auth.user && this.props.auth.user.name,
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email,
            phone: this.props.auth && this.props.auth.user && this.props.auth.user.phone,
            address1: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.address1,
            address2: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.address2,
            city: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.city,
            state: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.state,
            country: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.country,
            zipCode: this.props.auth && this.props.auth.user && this.props.auth.user.location && this.props.auth.user.location.zip_code,
            companyName: this.props.auth && this.props.auth.user && this.props.auth.user.company_name,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.auth && nextProps.auth.user && nextProps.auth.user.name,
            email: nextProps.auth && nextProps.auth.user && nextProps.auth.user.email,
            phone: nextProps.auth && nextProps.auth.user && nextProps.auth.user.phone,
            address1: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.address1,
            address2: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.address2,
            city: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.city,
            state: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.state,
            country: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.country,
            zipCode: nextProps.auth && nextProps.auth.user && nextProps.auth.user.location && nextProps.auth.user.location.zip_code,
            companyName: nextProps.auth && nextProps.auth.user && nextProps.auth.user.company_name
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

        const { name, email, phone, address1, address2, city, state, country, zipCode, companyName } = this.state;
        let errors = {};

        if (this.state.name === '') { errors.name = "Name can't be empty"; }
        if (this.state.email === '') { errors.email = "Email can't be empty"; }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        const userData = {
            name,
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
            this.props.updateProfile(userData);
        }
    }

    handlePasswordUpdate(e) {
        e.preventDefault();

        const { password, confirmPassword } = this.state;
        let errors = {};

        if (this.state.password === '') { errors.password = "Password can't be empty"; }

        if (this.state.confirmPassword !== '' && this.state.password === this.state.confirmPassword) {
            this.props.updatePassword({ password });
        } else {
            errors.confirmPassword = "Passwords don't match";
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
                                        name={this.state.name}
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