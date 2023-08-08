import React, { useEffect, useState } from 'react';
import classes from './BookingForm.module.css';

const BookingForm = (props) => {
  const [dateAvailable, setDateAvailable] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    seats: 1,
    date: '',
    timeslot: '',
    totalPrice: 0,
  });

  useEffect(() => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    setDateAvailable(currentDate);
  }, []);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={classes.outer}>
      <div className={classes.bookingform}>
        <div className={classes.details}>
          <h1>{props.name}</h1>
          <h3>Price: ₹300</h3>
          <h3>Total Price:₹300 * {formData.seats}</h3>
        </div>
        <form>
          <i
            className={`fa-solid fa-circle-xmark ${classes.icon}`}
            style={{ color: '#ffffff' }}
            onClick={props.onOpenForm}
          ></i>
          <div className={`${classes.name} ${classes.inputs}`}>
            <h3 className={classes.heading}>Name</h3>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
              onChange={inputChangeHandler}
            />
          </div>
          <div className={`${classes.seat} ${classes.inputs}`}>
            <h3 className={classes.heading}>Seats</h3>
            <input
              type='number'
              placeholder='Enter number of seats'
              name='seats'
              min={1}
              max={10}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={`${classes.showdate} ${classes.inputs}`}>
            <h3 className={classes.heading}>Show Date</h3>
            <input
              type='date'
              name='date'
              min={dateAvailable}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={`${classes.timeslot} ${classes.inputs}`}>
            <h3 className={classes.heading}>Time Slot</h3>
            <select name='timeSlot' onChange={inputChangeHandler}>
              <option value='' disabled selected hidden>
                Select a slot
              </option>
              <option value='10:30am'>10:30am</option>
              <option value='01:30am'>01:30am</option>
              <option value='05:30pm'>05:30pm</option>
              <option value='08:30pm'>08:30pm</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
