import React from 'react'
import styled from 'styled-components'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const BookingsListStyle = styled.ul`
    display: flex;
    flex-flow: row wrap;
    gap:2rem;
`;

const BookingItemStyle = styled.li`
    border: 1px solid black;
    padding: 2rem;
    background-color: lightblue;
    list-style: none;
    display: flex;
    min-width: 20%;
    gap:1rem;
    flex-direction: column;
    
`;

const NameStyle = styled.h3`
  color: green;
`;

function BookingsList({bookings, setBookings, reRenderToggle}) {

  const handleDelete =(booking)=>{
    fetch("http://localhost:9000/bookings/"+booking._id,{method: "DELETE"})
    .then(()=>{
      const newData = bookings.filter((bookingToRemove) => bookingToRemove._id !== booking._id)
      setBookings(newData)
    })
  }

  const handleStatus = (id)=>{
    const booking  = bookings.find(booking => booking.id === id)

    fetch("http://localhost:9000/bookings/"+id._id,{
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({status: !id.status})
    }).then((res)=>res.json())
    .then(()=> reRenderToggle())
  }


  return (
    <>
    <BookingsListStyle>
        {bookings.map(booking => 
            <BookingItemStyle key={booking._id}>
                <NameStyle>Name: {booking.name}</NameStyle>
                <span>email: {booking.email}</span>
                <span>Created: {dayjs().to(booking.date)}</span>
                <span>Status: {booking.status== true 
                ? <>Checked In <br /> </>
                :<>Checked Out <br /> </>}</span>
                <button onClick={()=>handleStatus(booking)}>{booking.status!= true ? <>Check In</>:<>Check Out</>}</button>
                <button  onClick={()=>handleDelete(booking)}>&#x274C; Delete Booking</button>
            </BookingItemStyle>)}

    </BookingsListStyle>
    </>
  )
}

export default BookingsList