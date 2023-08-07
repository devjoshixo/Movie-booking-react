import React from 'react';

const MovieTile = (props) => {
  const url = props.movie.show.image?.medium || false;
  return <div>{url ? <img src={url} /> : ''}</div>;
};

export default MovieTile;
