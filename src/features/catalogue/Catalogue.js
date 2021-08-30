/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsync,
  selectCatalogue,
} from './catalogueSlice';

export function CatalogueComponent() {
  const catalogue = useSelector(selectCatalogue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [catalogue]);

  const renderedCatalogue = catalogue.map(mealInfo => (
    <div key={mealInfo.idMeal}>
      <h3>{mealInfo.strMeal}</h3>
      <img src={mealInfo.strMealThumb} alt="pasta" />
      <br />
      <span>
        Order:
        {mealInfo.idMeal}
      </span>
    </div>
  ));
  return (
    <>
      {renderedCatalogue}
    </>
  );
}
