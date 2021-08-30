/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsync,
  selectCatalogue,
} from './catalogueSlice';

export function CatalogueComponent() {
  const catalogue = useSelector(selectCatalogue);
  const dispatch = useDispatch();

  const updateState = () => {
    dispatch(fetchAsync());
  };

  const renderedCatalogue = catalogue.map(mealInfo => (
    <div key={mealInfo.id}>
      <h3>{mealInfo.title}</h3>
      <img src={mealInfo.image} alt="pasta" />
      <br />
      <span>
        Order:
        {mealInfo.id}
      </span>
    </div>
  ));
  return (
    <>
      {renderedCatalogue}
      <button onClick={() => updateState()} type="button">display Catalogue</button>
    </>
  );
}
