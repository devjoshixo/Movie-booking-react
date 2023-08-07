import React, { useEffect, useState } from 'react';
import classes from './BookingForm.module.css';

const BookingForm = (props) => {
  const [dateAvailable, setDateAvailable] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    setDateAvailable(currentDate);
  }, []);

  return (
    <div className={classes.outer}>
      <div className={classes.bookingform}>
        <form>
          <i
            className={`fa-solid fa-circle-xmark ${classes.icon}`}
            style={{ color: '#ffffff' }}
            onClick={props.onOpenForm}
          ></i>
          <div className={`${classes.name} ${classes.inputs}`}>
            <h3 className={classes.heading}>Name</h3>
            <input type='text' placeholder='Enter your name' />
          </div>
          <div className={`${classes.seat} ${classes.inputs}`}>
            <h3 className={classes.heading}>Seats</h3>
            <input type='number' placeholder='Enter number of seats' />
          </div>
          <div className={`${classes.showdate} ${classes.inputs}`}>
            <h3 className={classes.heading}>Show Date</h3>
            <input type='date' min={dateAvailable} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
