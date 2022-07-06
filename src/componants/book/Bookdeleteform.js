import React from 'react'
import { deleteBook } from '../../api/book';
import { useState } from 'react'
function BookDeleteForm({ id }) {
    const [bookId, setBookId] = useState({ _id: id })
    function onInputChange(e) {
        const { name, value } = e.target;
        setBookId(preInput => { return ({ ...bookId, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await deleteBook(bookId);
        setBookId({ _id: '' })
        console.log(bookId)
        alert('book deleted')
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