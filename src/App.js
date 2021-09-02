import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CatalogueComponent } from './features/catalogue/Component/Catalogue';
import cataloguePage from './features/cataloguePage/Component/cataloguePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={CatalogueComponent} exact />
          <Route path="/meal-page/:id" component={cataloguePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
