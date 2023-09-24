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

const Span = styled.span`
  background-color: ${({bg}) => bg};
  color: ${({color})=> color};
  padding: 0.1rem 0.3rem;
  border-radius: 40%;
  :hover{
    background-color: black;
  }
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
      body: JSON.stringify({status: !id.status, date: dayjs()})
    })
    .then(()=> reRenderToggle())
  }


  return (
    <>
    <BookingsListStyle>
        {bookings.map(booking => 
            <BookingItemStyle key={booking._id}>
                <NameStyle>{booking.name}</NameStyle>
                <span>email: {booking.email}</span>
                <span>Status: {booking.status== true 
                ? <> 
                <Span bg="green" color="white">Checked In</Span> 
                    <br />
                      {dayjs().to(booking.date)}<br /> </>
                :<> 
                <Span bg="yellow">Checked Out </Span> 
                    <br />
                      {dayjs().to(booking.date)}<br /> </>}
                  </span> {/* Status Span */}
                <button onClick={()=>handleStatus(booking)}>
                  {booking.status!= true 
                    ? <>Check In</>
                    :<>Check Out</>}
                </button>
                <button  onClick={()=>handleDelete(booking)}>&#x274C; Delete Booking</button>
            </BookingItemStyle>)}
    </BookingsListStyle>
    </>
  )
}

export default BookingsList