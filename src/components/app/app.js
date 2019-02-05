import React from 'react';
import { Switch, Route } from 'react-router-dom'; // роутинг
import './app.css';

import { 
  HomePage, 
  CartPage
} from '../pages';

const App = () => {
  return (
    <Switch> {/* обработка ошибок */}
      <Route 
        path="/" 
        component={HomePage} 
        exact />

        <Route 
        path="/cart" 
        component={CartPage} />

      <Route render={() => <h2>Page not found</h2>} /> {/* если ни один из Route не сработал */}
    </Switch>
  );
};

export default App;