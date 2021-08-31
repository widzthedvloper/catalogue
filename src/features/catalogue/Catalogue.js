/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAsync,
  filterCatalogue,
  selectCatalogue,
} from './catalogueSlice';
import '@fortawesome/fontawesome-free';

export function CatalogueComponent() {
  const catalogue = useSelector(selectCatalogue);
  const dispatch = useDispatch();

  const [catalogueFilter, setCatalogueFilter] = useState('');
  const strFilter = catalogueFilter || '';

  const myFilterCatalogue = catalogue.filter(meal => strFilter.toLowerCase() === meal.strMeal.toLowerCase() || strFilter.toLowerCase() === meal.idMeal);

  const filterArray = () => {
    if (strFilter !== '' && myFilterCatalogue.length >= 1) {
      dispatch(filterCatalogue(myFilterCatalogue));
    } else {
      dispatch(fetchAsync());
    }
  };

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const renderedCatalogue = catalogue.map(mealInfo => (
    <div key={mealInfo.idMeal}>
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
      <header>
        <span><i className="fas fa-cog" /></span>
        <span>CATALOGUE RECEIPES</span>
        <span><i className="fas fa-search" /></span>
      </header>
      <input
        value={catalogueFilter}
        onChange={e => setCatalogueFilter(e.target.value)}
      />
      <button aria-label="filter the catalogue" type="button" onClick={() => filterArray()}><i className="fas fa-search" /></button>
      {renderedCatalogue}
    </>
  );
}
