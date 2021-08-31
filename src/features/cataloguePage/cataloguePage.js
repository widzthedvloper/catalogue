import React, { useState } from 'react';
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
    padding: '10px',
  };

  const arrow = {
    transform: 'rotate(135deg)',
    border: 'solid #fff',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
  };

  let hide;
  let hideInstroc;
  const [isHide, setIsHide] = useState(true);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const ingredient = arr.map(number => (
    <p key={number}>
      {' '}
      <span>
        {number}
        {' '}
        :
        {' '}
      </span>
      {meal[`strIngredient${number}`]}
    </p>
  ));

  const handleDisplay = () => {
    setIsHide(!isHide);
  };

  if (isHide) {
    hide = {
      display: 'none',
    };
    hideInstroc = {
      display: 'block',
    };
  } else {
    hide = {
      display: 'block',
    };
    hideInstroc = {
      display: 'none',
    };
  }

  return (
    <>
      <div className="header">
        <span role="button" tabIndex={0} onKeyDown={handleDisplay} onClick={() => handleDisplay()}>Ingrdients</span>
        <span role="button" tabIndex={0} onKeyDown={handleDisplay} onClick={() => handleDisplay()}>Instructions</span>
      </div>
      <div className="card">
        <div style={styles}>
          <div style={hide}>
            {ingredient}
          </div>
          <div style={hideInstroc}>
            {meal.strInstructions}
          </div>
        </div>
      </div>
      <Link to="/">
        <span className="arrow-span"><i style={arrow} /></span>
      </Link>
    </>
  );
}

export default cataloguePage;
