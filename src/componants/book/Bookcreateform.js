import React, { useState } from 'react'
import { createBook } from '../../api/book'
function BookCreateForm() {
    const [addBook, setAddBook] = useState({ title: '', author: '', summary: '', isbn: '', genre: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddBook(prevInput => { return { ...addBook, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await createBook(addBook)
        alert('data inserted')
        console.log(addBook)
        setAddBook({ title: '', author: '', summary: '', isbn: '', genre: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOK ADD FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>TITLE </label>
                        <input type="text" name='title' onChange={onInputChange} className='inputcontrol' placeholder='first name of the book' required /><br /><br />

                        <label className='labelcontrol'>AUTHOR </label>

                        <input type='text' name='author' onChange={onInputChange} className='inputcontrol' placeholder='author name of the book' required /><br /><br />

                        <label className='labelcontrol'>SUMMARY </label>

                        <input type="text" name='summary' onChange={onInputChange} className='inputcontrol' placeholder='summary of the book' required /><br /><br />


                        <label className='labelcontrol'>ISBN </label>

                        <input type='text' name='isbn' onChange={onInputChange} className='inputcontrol' placeholder='isbn number of the book' /><br /><br />

                        <label className='labelcontrol'>GENRE </label>

                        <input type='text' name='genre' onChange={onInputChange} className='inputcontrol' placeholder='date of death of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW BOOK' />

                </form>

            </div >

        </>
    )
}

export default BookCreateForm