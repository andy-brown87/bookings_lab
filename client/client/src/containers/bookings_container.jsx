import React, {useState, useEffect} from 'react'
import BookingsGrid from '../components/bookings_grid'
import BookingsForm from '../components/bookings_form'

const BookingsContainer = () => {

    const [guestBookings, setGuestBookings] = useState([])

        useEffect(() => {
            getBookings().then((allBookings) => {
                setGuestBookings(allBookings)
            })
        }, [])
    
    const baseURL = 'http://localhost:9000/api/bookings/'
    const getBookings = () => {
        return fetch(baseURL)
        .then(res => res.json())
    }

    const addBooking = (booking) => {
        setGuestBookings([...guestBookings, booking])
    }

    const postBooking = (payload) => {
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
    }

    const deleteBooking = (id) => {
        return fetch(baseURL + id, {
            method: "DELETE"
        })
    }
    const removeBooking = (id) => {
        const bookingToKeep = guestBookings.filter(booking => booking._id !== id)
        setGuestBookings(bookingToKeep)
    }
    

    return (
        <>
        <BookingsForm addBooking={addBooking} postBooking={postBooking}/>
        <BookingsGrid bookings={guestBookings} deleteBooking={deleteBooking} removeBooking={removeBooking}/>
        </>
)

}

export default BookingsContainer