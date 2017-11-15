import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

export default class NotFoundPage extends Component {
    render() {
        return (
            <Route render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.status = 404;
                }
                return (
                    <div className="not-found-page">

                        <Helmet title="404 Page Not Found" />

                        <div className="container not-found-page__container">
                            <span>404</span>
                            <h1>Page Not Found</h1>
                        </div>

                    </div>
                );
            }}/>
        );
    }
}