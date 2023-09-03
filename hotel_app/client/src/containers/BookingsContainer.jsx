import React, { useState, useEffect} from 'react'
import BookingsList from '../components/BookingsList'
import BookingForm from '../components/BookingForm'


function BookingsContainer() {

  const [bookings,setBookings]= useState([])

  useEffect(()=>{
    fetch("http://localhost:9000/bookings")
    .then((res)=>res.json())
    .then(data => setBookings(data))
  },[bookings])

  const addBooking=(booking) => {
    setBookings([...bookings, booking])
  }


  return (
    <>
        <BookingForm addBooking={addBooking} />
        <BookingsList bookings={bookings} setBookings={setBookings}/>
    </>
  )
}

export default BookingsContainer