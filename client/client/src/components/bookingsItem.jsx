const BookingsItem = ({booking, deleteBooking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }
    return (
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Checked in: {booking.checked_in}</p>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default BookingsItem
