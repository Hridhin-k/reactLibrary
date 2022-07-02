import React, { useState } from 'react'

import { updateBook } from '../../api/book'
function Bookeditform() {
    const [book, setBook] = useState({ _id: '', title: '', author: '', summary: '', isbn: '', genre: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setBook(prevInput => { return { ...book, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await updateBook(book)
        alert('BOOK UPDATED SUCCESSFULLY')
        setBook({ _id: '', title: '', author: '', summary: '', isbn: '', genre: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOK UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_ID</label>
                        <input type="text" name='_id' onChange={onInputChange} className='inputcontrol' placeholder='enter the id of the book you want to edit' required /><br /><br />


                        <label className='labelcontrol'>TITLE</label>
                        <input type="text" name='title' onChange={onInputChange} className='inputcontrol' placeholder=' name of the book' required /><br /><br />

                        <label className='labelcontrol'>AUTHOR</label>

                        <input type='text' name='author' onChange={onInputChange} className='inputcontrol' placeholder='author of the book' required /><br /><br />

                        <label className='labelcontrol'>SUMMARY</label>

                        <input type="text" name='summary' onChange={onInputChange} className='inputcontrol' placeholder='summary of the book' required /><br /><br />


                        <label className='labelcontrol'>ISBN</label>

                        <input type='text' name='isbn' onChange={onInputChange} className='inputcontrol' placeholder='isbn of the book' /><br /><br />


                        <label className='labelcontrol'>GENRE</label>

                        <input type='text' name='genre' onChange={onInputChange} className='inputcontrol' placeholder='genre of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='EDIT BOOK' />

                </form>

            </div >
        </>)
}

export default Bookeditform