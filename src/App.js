import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CatalogueComponent } from './features/catalogue/Catalogue';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={CatalogueComponent} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
