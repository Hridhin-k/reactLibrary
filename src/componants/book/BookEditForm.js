import React, { useState } from 'react'

import { updateBook } from '../../api/book'
function Bookeditform({ id }) {
    const [book, setBook] = useState({ _id: id, title: '', author: '', summary: '', isbn: '', genre: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setBook(prevInput => { return { ...book, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await updateBook(book)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('BOOK UPDATED SUCCESSFULLY')
                setBook({ _id: '', title: '', author: '', summary: '', isbn: '', genre: '' })
            }
        }
        catch (err) {
            console.log('error in sending data')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>BOOK UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_ID</label>
                        <input type="text" name='_id' value={book._id} onChange={onInputChange} className='inputcontrol' placeholder='enter the id of the book you want to edit' required readOnly='readOnly' /><br /><br />


                        <label className='labelcontrol'>TITLE</label>
                        <input type="text" name='title' value={book.title} onChange={onInputChange} className='inputcontrol' placeholder=' name of the book' required /><br /><br />

                        <label className='labelcontrol'>AUTHOR</label>

                        <input type='text' name='author' value={book.author} onChange={onInputChange} className='inputcontrol' placeholder='author of the book' required /><br /><br />

                        <label className='labelcontrol'>SUMMARY</label>

                        <input type="text" name='summary' value={book.summary} onChange={onInputChange} className='inputcontrol' placeholder='summary of the book' required /><br /><br />


                        <label className='labelcontrol'>ISBN</label>

                        <input type='text' name='isbn' value={book.isbn} onChange={onInputChange} className='inputcontrol' placeholder='isbn of the book' /><br /><br />


                        <label className='labelcontrol'>GENRE</label>

                        <input type='text' name='genre' value={book.genre} onChange={onInputChange} className='inputcontrol' placeholder='genre of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='EDIT BOOK' />

                </form>

            </div >
        </>)
}

export default Bookeditform