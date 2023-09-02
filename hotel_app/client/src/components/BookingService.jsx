const URL = 'http://localhost:9000/bookings'



  useEffect(()=>{
    fetch("http://localhost:9000/bookings")
    .then((res)=>res.json())
    .then(data => setBookings(data))
  },[])

export const addBooking=(booking) => {
    setBookings([...bookings, booking])
  }