/* eslint-disable max-len */
import '../catalogue.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCatalogue } from '../../../redux/action';
import Filter, { myFilterArray } from '../Filter/Filter';

export function CatalogueComponent() {
  const dispatch = useDispatch();
  const [catalogueFilter, setCatalogueFilter] = useState('');

  useEffect(() => {
    fetchAsync()
    .then(res => {
      dispatch(updateCatalogue(res));
    });
  }, []);

  const fetchAsync = async () => {
    const catalogue = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    const temp = await catalogue.json();
    return temp.meals;
  }

  const catalogue = useSelector(state => state.catalogue.catalogue);

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
