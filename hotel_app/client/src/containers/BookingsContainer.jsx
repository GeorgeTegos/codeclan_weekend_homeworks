import React, { useState, useEffect} from 'react'
import BookingsList from '../components/BookingsList'
import BookingForm from '../components/BookingForm'


function BookingsContainer() {

  const [bookings,setBookings]= useState([])

  useEffect(()=>{
    fetch("http://localhost:9000/bookings")
    .then((res)=>res.json())
    .then(data => setBookings(data))
    
    // Promise.all()
    
  }
  ,[])


  return (
    <>
        <BookingForm setBookings={setBookings}/>
        <BookingsList bookings={bookings}/>
    </>
  )
}

export default BookingsContainer