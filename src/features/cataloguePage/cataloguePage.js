import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCatalogue,
} from '../catalogue/catalogueSlice';
import NotFoundPage from '../NotFoundPage';

function cataloguePage({ match }) {
  const { id } = match.params;
  const catalogue = useSelector(selectCatalogue);
  const meal = catalogue.find(singleMeal => singleMeal.idMeal === id);

  if (!meal) return <NotFoundPage />;

  const styles = {
    backgroundImage: `url(${meal.strMealThumb})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    maxWidth: '700px',
    margin: '5% auto',
  };

  const arrow = {
    transform: 'rotate(135deg)',
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const ingredient = arr.map(number => <p key={number}>{meal[`strIngredient${number}`]}</p>);
  return (
    <>
      <div>
        <span>Ingrdients</span>
        <span>Instructions</span>
      </div>
      <div style={styles}>
        <div>
          {ingredient}
        </div>
        <div>
          {meal.strInstructions}
        </div>
      </div>
      <Link to="/">
        <span><i style={arrow} /></span>
      </Link>
    </>
  );
}

export default cataloguePage;
