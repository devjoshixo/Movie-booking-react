import React, { useEffect, useState } from 'react';
import classes from './MovieTile.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const MovieTile = (props) => {
  const navigation = useHistory();

  const handleClick = () => {
    const url = '/details?id=' + props.movie.show.id;
    navigation.push(url);
  };

  return (
    <div className={classes.tile} onClick={handleClick}>
      <img src={props.movie.show.image.medium} />
    </div>
  );
};

export default MovieTile;
