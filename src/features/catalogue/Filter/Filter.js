import React from 'react';
import PropTypes from 'prop-types';
import {
  fetchAsync,
  filterCatalogue,
} from '../Reducer/catalogueSlice';

let myFilterArray;

function Filter({ catalogueFilter, catalogue, dispatch }) {
  const strFilter = catalogueFilter || '';

  const myFilterCatalogue = catalogue.filter(meal => strFilter.toLowerCase() === meal.strMeal.toLowerCase() || strFilter.toLowerCase() === meal.idMeal);

  const filterArray = () => {
    if (strFilter !== '' && myFilterCatalogue.length >= 1) {
      dispatch(filterCatalogue(myFilterCatalogue));
    } else {
      dispatch(fetchAsync());
    }
  };

  myFilterArray = filterArray;
    return (
        <div />
    )
}

Filter.propTypes = {
    catalogueFilter: PropTypes.string,
    catalogue: PropTypes.array,
    dispatch: PropTypes.func,
}
export default Filter;
export { myFilterArray };
