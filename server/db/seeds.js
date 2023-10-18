use guests
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Barry Smith",
        email: "Bsmith@hotmail.com",
        checked_in: "true"
    },
    {
        name: "Betty Smith",
        email: "Betsmith@hotmail.com",
        checked_in: "false"
    }

])