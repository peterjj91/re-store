import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // доступ нашим компонентам к redux-store'у
import { BrowserRouter as Router } from 'react-router-dom'; // роутинг

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service'; // доступ к данным
import { BookstoreServiceProvider } from './components/bookstore-service-context'; // для того, чтобы наши компоненты получили доступ к нашему сервису

import store from './store'; // управлять данными в нашем приложении

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}> { /* чтобы Provider заработал нужно передать в store наш "store"  */ }
    <ErrorBoundry > {/* ErrorBoundry обработчик ошибок */}
      <BookstoreServiceProvider value={bookstoreService}> {/* BookstoreServiceProvider чтобы все компоненты ниже имели доступ к нашему сервису */}
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);