use hotel
db.collection.dropDatabase();

db.bookings.insertMany([
    {
        name: "George",
        people: 4,
        date: "2023-08-31",
        time: "18:00"
    },{
        name: "Tina",
        people: 2,
        date: "2023-09-01",
        time: "12:30"
    },{
        name: "Jenny",
        people: 8,
        date: "2023-09-03",
        time: "14:30",
        allergies:["egg","fish"]
    },
]);