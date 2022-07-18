import React from 'react'
import { deleteBook } from '../../api/book';
import { useState } from 'react'
function BookDeleteForm(props) {
    const [acknowledgement, setAcknowledgement] = useState(null)
    const [bookId, setBookId] = useState({ _id: props.id })
    props.func(acknowledgement)
    function onInputChange(e) {
        const { name, value } = e.target;
        setBookId(preInput => { return ({ ...bookId, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await deleteBook(bookId);
            if (resp.status == 200) {
                console.log(resp.status)
                setBookId({ _id: '' })
                console.log(bookId)
                alert('book deleted')
                setAcknowledgement(true)
            }
        }
        catch (err) {
            console.log('error in sending data')
        }
    }

    return (
        <div className='card' id='form1'>
            <h3>BOOK DELETE FORM</h3>
            <form onSubmit={onSubmit} className='form'>
                <label className='labelcontrol'>DELETE </label>
                <input type='text' name='_id' value={bookId._id} onChange={onInputChange} className='inputcontrol' placeholder='_id of the book you want to delete' required readOnly='readOnly' /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default BookDeleteForm