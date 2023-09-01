import React from 'react'
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: max-content;
`;

function BookingForm() {

  return (
    <>
        <h2>Add Booking</h2>
        
        <Form>
        <label htmlFor='name'>Guest Name:{" "}
        <input /></label>

        <label htmlFor="email">Guest Email:{" "}
        <input /></label>

        <label htmlFor="check_in">Checked In
        <input type="checkbox" name="check_in" id="check_in" /></label>

        <input type="submit" value="Save" />
        </Form>
    </>
  )
}

export default BookingForm