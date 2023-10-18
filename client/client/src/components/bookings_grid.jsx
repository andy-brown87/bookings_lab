import BookingsItem from "./bookingsItem"


const BookingsGrid = ({bookings, deleteBooking, removeBooking}) => {

    const bookingsList = bookings.map((booking) => {
        return <BookingsItem booking={booking} key={booking._id} deleteBooking={deleteBooking} removeBooking={removeBooking}/>
    })

    return (
        <>{bookingsList}</>
    )

}

export default BookingsGrid