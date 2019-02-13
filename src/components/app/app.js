import React from 'react';
import { Switch, Route } from 'react-router-dom'; // роутинг
import ShopHeader from '../shop-header';
import './app.css';

import { 
  HomePage, 
  CartPage
} from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
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
    </main>
  );
};

export default App;