import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class NotFoundPage extends Component {
    render() {
        return (
            <Route render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.status = 404;
                }
                return (
                    <div>
                        <h1>404 Not Found</h1>
                    </div>
                );
            }}/>
        );
    }
}