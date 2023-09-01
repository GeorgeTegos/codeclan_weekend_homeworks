import React, { useState } from 'react'
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: max-content;
`;

function BookingForm({setBookings}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [status,setStatus] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault()

        const booking ={
            name,
            email,
            status
        }

        const config ={
            method: 'POST',
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify(booking)
        }

        fetch("http://localhost:9000/bookings",config)
        .then(res => res.json())
        .then(data => setBookings(data.ops[0]))
    }


  return (
    <>
        <h2>Add Booking</h2>
        
        <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>Guest Name:{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='name'/></label>

        <label htmlFor="email">Guest Email:{" "}
        <input type='text' onChange={(e)=> setEmail(e.target.value)} value={email} name='email'/></label>

        <label htmlFor="check_in">Checked In
        <input type="checkbox" name="check_in" id="check_in" onChange={()=> setStatus(!status)}/></label>

        <input type="submit" value="Save" />
        </Form>
    </>
  )
}

export default BookingForm