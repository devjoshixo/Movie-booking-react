import React from 'react';
import classes from './BookingForm.module.css';

const BookingForm = (props) => {
  return (
    <div className={classes.outer}>
      <div className={classes.bookingform}>
        <form>
          <i
            className={`fa-solid fa-circle-xmark ${classes.icon}`}
            style={{ color: '#ffffff' }}
            onClick={props.onOpenForm}
          ></i>
          <div className={classes.name}>
            <h3>Name</h3>
            <input type='text' placeholder='Enter your name' />
          </div>
          <div className={classes.seat}>
            <h3>Seats</h3>
            <input type='text' placeholder='Enter number of seats' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
