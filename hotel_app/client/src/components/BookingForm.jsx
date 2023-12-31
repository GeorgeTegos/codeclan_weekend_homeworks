import React, { useState } from 'react'
import styled from "styled-components"
import dayjs from "dayjs"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: max-content;
`;

const Button = styled.button`
	
`;


function BookingForm({addBooking,}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [status,setStatus] = useState(false)

    const handleChange= (e) => {
        let isChecked = e.target.checked;
        setStatus(isChecked)
      }
    
    const handleSubmit =(e) =>{
        e.preventDefault()

        const booking ={
            name,
            email,
            status,
            date: dayjs()
        }

        const config ={
            method: 'POST',
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify(booking)
        }

        fetch("http://localhost:9000/bookings",config)
        .then(res => res.json())
        .then(data => addBooking(data.ops[0]))

        setName("")
        setEmail("")
        setStatus(false)
    }


  return (
    <>
        <h2>Add Booking</h2>
        
        <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>Guest Name:{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='name' required/></label>

        <label htmlFor="email">Guest Email:{" "}
        <input type='text' onChange={(e)=> setEmail(e.target.value)} value={email} name='email' required/></label>

        <label htmlFor="check_in">Checked In
        <input type="checkbox" name="check_in" id="check_in" onChange={(e)=> handleChange(e)} checked={status}/></label>

        <input type="submit" value="Save" className='save-button' />
        </Form>
    </>
  )
}

export default BookingForm