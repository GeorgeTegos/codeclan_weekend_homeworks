import React, { useState, useEffect} from 'react'
import BookingsList from '../components/BookingsList'
import BookingForm from '../components/BookingForm'


function BookingsContainer() {

  const [bookings,setBookings]= useState([])
  const [reRender,setRerender] = useState(false)

  const reRenderToggle = () =>{
    setRerender(!reRender)
  }

  useEffect(()=>{
    fetch("http://localhost:9000/bookings")
    .then((res)=>res.json())
    .then(data => setBookings(data))
  },[reRender]) // [bookings]

  const addBooking=(booking) => {
    setBookings([...bookings, booking])
  }


  return (
    <>
        <BookingForm addBooking={addBooking} />
        <BookingsList bookings={bookings} setBookings={setBookings} reRenderToggle={reRenderToggle}/>
    </>
  )
}

export default BookingsContainer