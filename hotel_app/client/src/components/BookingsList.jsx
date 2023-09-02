import React from 'react'
import styled from 'styled-components'

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

function BookingsList({bookings}) {

  return (
    <>
    <BookingsListStyle>
        {bookings.map(booking => 
            <BookingItemStyle key={booking._id}>
                <h3>Name: {booking.name}</h3>
                <span>email: {booking.email}</span>
                <span>Status: {booking.status== true ? <>Checked In</>:<>Checked Out</>}</span>
                <button> Check out</button>
                <button>Delete Booking</button>
            </BookingItemStyle>)}

    </BookingsListStyle>
    </>
  )
}

export default BookingsList