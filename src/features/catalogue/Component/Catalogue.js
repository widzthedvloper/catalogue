/* eslint-disable max-len */
import '../catalogue.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAsync,
  selectCatalogue,
} from '../Reducer/catalogueSlice';
import Filter, { myFilterArray } from '../Filter/Filter';

export function CatalogueComponent() {
  const catalogue = useSelector(selectCatalogue);
  const dispatch = useDispatch();

  const [catalogueFilter, setCatalogueFilter] = useState('');

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const renderedCatalogue = catalogue.map(mealInfo => (
    <div key={mealInfo.idMeal} className="card">
      <img src={mealInfo.strMealThumb} alt="pasta" />
      <br />
      <h3>{mealInfo.strMeal}</h3>
      <span>
        Order:
        {mealInfo.idMeal}
      </span>
      <Link to={`/meal-page/${mealInfo.idMeal}`}>More details ...</Link>
    </div>
  ));
  return (
    <>
      <header className="header">
        <span><i className="fas fa-cog" /></span>
        <span>CATALOGUE RECEIPES</span>
        <span><i className="fas fa-search" /></span>
      </header>
      <input
        className="search-input"
        placeholder="Enter order Number or dish name!!!"
        value={catalogueFilter}
        onChange={e => setCatalogueFilter(e.target.value)}
      />
      <button aria-label="filter the catalogue" type="button" onClick={() => myFilterArray()}><i className="fas fa-search" /></button>
      {renderedCatalogue}
      <Filter catalogueFilter={catalogueFilter} catalogue={catalogue} dispatch={dispatch} />
    </>
  );
}
