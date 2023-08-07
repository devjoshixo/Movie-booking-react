import React from 'react';
import breakingbad from '../../assets/wallpaperflare.com_wallpaper.jpg';
import classes from './BigPoster.module.css';

const BigPoster = () => {
  const handleClick = () => {
    console.log('breaking bad');
  };

  return (
    <div className={classes.poster} onClick={handleClick}>
      <img src={breakingbad} />
    </div>
  );
};

export default BigPoster;
