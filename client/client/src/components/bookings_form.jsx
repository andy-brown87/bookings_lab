import {useState} from "react";

const BookingsForm = ({addBooking, postBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: false,
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData)
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        postBooking(formData).then((doc_id) => {
            const formDataWithId = {...formData, _id: doc_id}
            addBooking(formDataWithId)
        })
        setFormData({
            name: "",
            email: "",
            checked_in: false,
        })
    }



    return (

    <>
    <form onSubmit={onSubmit}>
        <h2>Add a booking</h2>
        <label htmlFor="name">Name:</label>
        <input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            value={formData.name} />
            <br/>
        
        <label htmlFor="email">e-mail:</label>
        <input
            onChange={onChange}
            type="text"
            id="email"
            name="email"
            value={formData.email} />
            <br/>

        <label htmlFor="checked_in">Checked in?:</label>
        <input
            onChange={onChange}
            type="checkbox"
            id="checked_in"
            name="checked_in"
            value={formData.checked_in} />
            

        <input type="submit" value="save" id="save"/>
        

    </form>
    </>

    )

}

export default BookingsForm 