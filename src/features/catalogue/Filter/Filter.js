import React from 'react'

function Filter({ catalogueFilter }) {
  const strFilter = catalogueFilter || '';

  const myFilterCatalogue = catalogue.filter(meal => strFilter.toLowerCase() === meal.strMeal.toLowerCase() || strFilter.toLowerCase() === meal.idMeal);

  const filterArray = () => {
    if (strFilter !== '' && myFilterCatalogue.length >= 1) {
      dispatch(filterCatalogue(myFilterCatalogue));
    } else {
      dispatch(fetchAsync());
    }
  };
    return (
        <div />
    )
}

export default Filter
