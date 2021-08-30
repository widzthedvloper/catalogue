import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CatalogueComponent } from './features/catalogue/Catalogue';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CatalogueComponent />} exact />
      </Routes>
    </>
  );
}

export default App;
