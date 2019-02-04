import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import { BookstoreServiceContext } from '../bookstore-service-context';
import SwapiService from '../../services/bookstore-service';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry> {/* ErrorBoundry обработчик ошибок */}
        <div>App</div>
      </ErrorBoundry>
    );
  }
}