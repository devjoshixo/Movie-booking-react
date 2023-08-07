import React from 'react';
import breakingbad from '../../assets/wallpaperflare.com_wallpaper.jpg';
import classes from './BigPoster.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BigPoster = () => {
  const location = useHistory();
  const handleClick = () => {
    location.push('/details?id=' + 169);
  };

  return (
    <div className={classes.poster} onClick={handleClick}>
      <img src={breakingbad} />
    </div>
  );
};

export default BigPoster;
