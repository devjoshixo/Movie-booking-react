import React, { useEffect, useState } from 'react';
import classes from './BookingForm.module.css';

const BookingForm = (props) => {
  const [dateAvailable, setDateAvailable] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    seats: 1,
    date: '',
    timeSlot: '',
  });
  const [totalPrice, setTotalPrice] = useState(300);

  useEffect(() => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    setDateAvailable(currentDate);
  }, []);

  useEffect(() => {
    totalPriceCounter();
  }, [formData]);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'seats' && value.trim() == '') {
      value = 0;
      setFormData((prev) => {
        return { ...prev, [name]: parseInt(value) };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const totalPriceCounter = () => {
    const price = 300 * formData.seats;
    setTotalPrice(price);
  };

  const putError = (data) => {
    let errors = {};
    if (data.name.trim() == '') {
      errors.name = 'Please enter a name';
    }
    if (data.date == '') {
      errors.date = 'Please choose a date';
    }
    if (data.timeSlot == '') {
      errors.timeSlot = 'Please choose a time slot';
    }
    setErrorMessage(errors);
    return Object.keys(errorMessage).length;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const finalData = { ...formData, totalPrice: totalPrice };

    if (putError(finalData) < 1) {
    } else {
      localStorage.setItem('booking', JSON.stringify(finalData));
      setIsSubmit(true);
      setFormData({
        name: '',
        seats: 1,
        date: '',
        timeSlot: '',
      });
    }
  };

  return (
    <div className={classes.outer}>
      <div className={classes.bookingform}>
        <div className={classes.details}>
          <h1>{props.name}</h1>
          <h3>Price: ₹300 * {formData.seats}</h3>
          <h3>Total Price : ₹{totalPrice} </h3>
        </div>
        <form onSubmit={submitHandler}>
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
              value={formData.name}
              onChange={inputChangeHandler}
            />
            <p className={classes.error}>
              {errorMessage.name ? errorMessage.name : ''}
            </p>
          </div>
          <div className={`${classes.seat} ${classes.inputs}`}>
            <h3 className={classes.heading}>Seats</h3>
            <input
              type='number'
              placeholder='Enter number of seats'
              name='seats'
              min={1}
              max={10}
              value={formData.seats}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={`${classes.showdate} ${classes.inputs}`}>
            <h3 className={classes.heading}>Show Date</h3>
            <input
              type='date'
              name='date'
              min={dateAvailable}
              value={formData.date}
              onChange={inputChangeHandler}
            />
            <p className={classes.error}>
              {errorMessage.date ? errorMessage.date : ''}
            </p>
          </div>
          <div className={`${classes.timeslot} ${classes.inputs}`}>
            <h3 className={classes.heading}>Time Slot</h3>
            <select
              name='timeSlot'
              value={formData.timeSlot}
              onChange={inputChangeHandler}
            >
              <option value='' disabled selected hidden>
                Select a slot
              </option>
              <option value='10:30am'>10:30am</option>
              <option value='01:30pm'>01:30am</option>
              <option value='05:30pm'>05:30pm</option>
              <option value='08:30pm'>08:30pm</option>
            </select>
            <p className={classes.error}>
              {errorMessage.timeSlot ? errorMessage.timeSlot : ''}
            </p>
          </div>
          <button className={classes.action} type='submit'>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
