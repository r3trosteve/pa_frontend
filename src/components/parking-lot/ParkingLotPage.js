import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Info from './Info';
import Overview from './Overview';
import Location from './Location';
import Details from './Details';
import Reviews from './Reviews';
import OrderSummary from './OrderSummary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParkingLot } from '../../modules/parking-lot';

class ParkingLotPage extends Component {

    static fetchData(store, match) {
        return store.dispatch(fetchParkingLot(match.params.id));
    }

    componentDidMount() {
        this.props.fetchParkingLot(this.props.match.params.id);
    }

	render() {
		return (
			<div className="ap-details">

				<Helmet title={this.props.rate.parking_lot && this.props.rate.parking_lot.name} />

				<div className="container ap-details__container">

					<div className="row ap-details__row">

						{/*left column*/}

						<div className="col-md-7 ap-details__column">

							<Info rate={this.props.rate} />

							<Overview />

							<Location rate={this.props.rate} />

							<Details />

							<Reviews />
                            
						</div>

						{/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">
							<OrderSummary rate={this.props.rate} />
						</div>

					</div>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ rate: state.parking_lot.item });
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchParkingLot }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotPage);
