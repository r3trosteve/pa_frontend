import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as airportsActions from 'actions/airports'
import AirportsList from 'components/home/AirportsList'
import Search from 'components/common/search/Search'

class HomePage extends Component {
	render() {
		return (
			<div>
				<h2>Home</h2>
				<Search />
				{/*<AirportsList airports={this.props.airports} />*/}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		airports: state.airportsReducer
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actions: bindActionCreators(airportsActions, dispatch)
// 	}
// }

export default connect(mapStateToProps)(HomePage)