import React, { useEffect, useState } from 'react';
import getMovies from '../../../api/getMovies';

const MovieTile = (props) => {
  return (
    <div>
      <img src={props.movie.show.image.medium} />
    </div>
  );
};

export default MovieTile;
