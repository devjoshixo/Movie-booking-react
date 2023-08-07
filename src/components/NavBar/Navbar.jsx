import React from 'react';
import classes from '../NavBar/NavBar.module.css';
import avatar from '../../assets/Netflix-avatar.png';

const Navbar = () => {
  return (
    <div className={classes['app']}>
      <nav className={classes['navbar']}>
        <div className={classes['container']}>
          <div className={classes['navbar-brand']}>
            <img
              src='https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png'
              alt='Netflix'
              width='112'
              height='28'
            />
          </div>
          <div className={classes['middle-part']}>
            <div className={classes['navbar-menu']}>
              <p>Home</p>
              <p>Series</p>
              <p>Film</p>
              <p>Latest</p>
            </div>
            <div className={classes['navbar-end']}>
              <i
                className='fa-solid fa-magnifying-glass'
                style={{ color: '#ffffff' }}
              ></i>
              <i className='fa-solid fa-gift' style={{ color: '#ffffff' }}></i>
              <i className='fa-solid fa-bell' style={{ color: '#ffffff' }}></i>
              <img src={avatar} className={classes.avatar} />
              <i
                className='fa-solid fa-caret-down'
                style={{ color: '#ffffff' }}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
