import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import moment from 'moment';

import Form from '../common/form/SearchForm';

export default class EditFormModal extends Component {
    render() {
        return (
            <Modal
                className="auth-modal"
                isOpen={this.props.isModalOpen}
                onRequestClose={this.props.closeModal}
                contentLabel="Modal"
            >
                <div className="dialog">
                    <div className="content">

                        <h2>Edit Search</h2>

                        <button className="close" onClick={this.props.closeModal}>
                            <i className="ion-ios-close" />
                        </button>

                        <Form
                            airportId={this.props.search && this.props.search.airport_id}
                            airportName={this.props.search && this.props.search.airport.name}
                            startDate={this.props.search && moment(this.props.search.arrive_at)}
                            endDate={this.props.search && moment(this.props.search.exit_at)}
                        />

                    </div>
                </div>
            </Modal>
        );
    }
}

EditFormModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    search: PropTypes.object
};