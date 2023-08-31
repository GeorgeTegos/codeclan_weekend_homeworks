const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const cors = require('cors');

app.use(express.json())
app.use(cors())

const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollections = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollections);
    app.use('/bookings', bookingsRouter);
  })
  .catch(console.err);



app.listen(9000, function (){
    console.log("Listening at port 9000")
})