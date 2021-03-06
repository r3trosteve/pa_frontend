import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileUpdate from "./Update";

export default class ProfileItems extends Component {
    render() {
        return (
            <div className="panel-group profile__items" id="accordion">

                {/*1*/}

                <div className="panel panel-default">

                    {/*header*/}

                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        <h2 className="title-normal-bold">Update your account settings</h2>
                        <p className="text-big">Change your email address, password, and other settings.</p>
                        <i className="ion-chevron-down" />
                    </div>

                    {/*body*/}

                    <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">

                            <ProfileUpdate
                                user={this.props.user}
                                handleProfileUpdate={this.props.handleProfileUpdate}
                                handleChange={this.props.handleChange}
                                errors={this.props.errors}
                                firstName={this.props.firstName}
                                lastName={this.props.lastName}
                                email={this.props.email}
                                phone={this.props.phone}
                                address1={this.props.address1}
                                address2={this.props.address2}
                                city={this.props.city}
                                state={this.props.state}
                                country={this.props.country}
                                zipCode={this.props.zipCode}
                                companyName={this.props.companyName}
                                handlePasswordUpdate={this.props.handlePasswordUpdate}
                                password={this.props.password}
                                confirmPassword={this.props.confirmPassword}
                                isProfileUpdated={this.props.isProfileUpdated}
                                isPwdUpdated={this.props.isPwdUpdated}
                            />

                        </div>
                    </div>

                </div>

                {/*2*/}

                <div className="panel panel-default">

                    {/*header*/}

                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        <h2 className="title-normal-bold">Your bookings</h2>
                        <p className="text-big">Manage your future reservations and view past reservations.</p>
                        <i className="ion-chevron-down" />
                    </div>

                    {/*body*/}

                    <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                            Coming soon
                        </div>
                    </div>

                </div>

                {/*3*/}

                <div className="panel panel-default">

                    {/*header*/}

                    <div className="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        <h2 className="title-normal-bold">Your reviews</h2>
                        <p className="text-big">See the hotel reviews you wrote on Hotels.com..</p>
                        <i className="ion-chevron-down" />
                    </div>

                    {/*body*/}

                    <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                            Coming soon
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

ProfileItems.propTypes = {
    user: PropTypes.object.isRequired,
    handleProfileUpdate: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
    companyName: PropTypes.string,
    handlePasswordUpdate: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    isProfileUpdated: PropTypes.bool,
    isPwdUpdated: PropTypes.bool
};