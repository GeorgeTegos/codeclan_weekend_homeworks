use hotel
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "George",
        email: "george.tegos.22@gmail.com",
        status: true
    },
    {
        name: "Tina",
        email: "tina.2012@gmail.com",
        status: true
    },
    {
        name: "Jerry",
        email: "jerry.is.good@gmail.com",
        status: true
    },
    {
        name: "Bill",
        email: "kill.bill@gmail.com",
        status: false
    },
    {
        name: "Jayce",
        email: "jayce.something@gmail.com",
        status: true
    },
    {
        name: "Mr Potato",
        email: "mr.potato.official@gmail.com",
        status: false
    }
]);