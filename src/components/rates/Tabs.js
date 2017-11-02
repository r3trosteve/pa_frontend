import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Tabs extends Component {
    render() {
        return (
            <ul className="rates__mobile-tabs visible-xs visible-sm">
                <li
                    className={classnames('rates__mobile-tabs__list', {active: this.props.activeMobileTabList})}
                    onClick={this.props.listTabActive}
                >
							<span>
								<i className="fa fa-list" aria-hidden="true" />
								List View
							</span>
                </li>
                <li
                    className={classnames('rates__mobile-tabs__map', {active: this.props.activeMobileTabMap})}
                    onClick={this.props.mapTabActive}
                >
                    <span><i className="fa fa-map" aria-hidden="true" />Map</span>
                </li>
            </ul>
        );
    }
}

Tabs.propTypes = {
    activeMobileTabList: PropTypes.bool.isRequired,
    activeMobileTabMap: PropTypes.bool.isRequired,
    listTabActive: PropTypes.func.isRequired,
    mapTabActive: PropTypes.func.isRequired
};