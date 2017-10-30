import React, { Component } from 'react';
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
                        <i className="ion-chevron-down"></i>
                    </div>

                    {/*body*/}

                    <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ProfileUpdate
                                user={this.props.user}
                                handleProfileUpdate={this.props.handleProfileUpdate}
                                handleChange={this.props.handleChange}
                                errors={this.props.errors}
                                name={this.props.name}
                                email={this.props.email}
                                handlePasswordUpdate={this.props.handlePasswordUpdate}
                                password={this.props.password}
                                confirmPassword={this.props.confirmPassword}
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
                        <i className="ion-chevron-down"></i>
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
                        <i className="ion-chevron-down"></i>
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