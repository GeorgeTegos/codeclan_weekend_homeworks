use hotel
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "George Tegos",
        email: "george.tegos.22@gmail.com",
        status: true,
        date: "2023-09-02T11:09:47.416Z"
    },
    {
        name: "TinaTion",
        email: "tina.2012@gmail.com",
        status: true,
        date: "2023-09-01T11:09:47.416Z"

    },
    {
        name: "Tom and Jerry",
        email: "jerry.is.good@gmail.com",
        status: true,
        date: "2023-09-03T10:09:47.416Z"

    },
    {
        name: "Kill Bill",
        email: "kill.bill@gmail.com",
        status: false,
        date: "2023-09-03T09:09:47.416Z"

    },
    {
        name: "Mc Jayce",
        email: "jayce.something@gmail.com",
        status: true,
        date: "2023-09-03T08:09:47.416Z"

    },
    {
        name: "Mr Potato",
        email: "mr.potato.official@gmail.com",
        status: false,
        date: "2023-09-01T10:09:47.416Z"

    }
]);