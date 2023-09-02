import React, { useState, useEffect} from 'react'
import BookingsList from '../components/BookingsList'
import BookingForm from '../components/BookingForm'


function BookingsContainer() {

  const [bookings,setBookings]= useState([])

  useEffect(()=>{
    fetch("http://localhost:9000/bookings")
    .then((res)=>res.json())
    .then(data => setBookings(data))
  },[])

  const addBooking=(booking) => {
    setBookings([...bookings, booking])
  }


  return (
    <>
        <BookingForm setBookings={addBooking}/>
        <BookingsList bookings={bookings}/>
    </>
  )
}

export default BookingsContainer