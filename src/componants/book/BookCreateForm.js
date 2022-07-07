import React, { useState, useEffect } from 'react'

import { createBook } from '../../api/book'


function BookCreateForm() {
    const [addBook, setAddBook] = useState({ title: '', author: '', summary: '', isbn: '', genre: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddBook(prevInput => { return { ...addBook, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createBook(addBook)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('data inserted')
                console.log(addBook)

                setAddBook({ title: '', author: '', summary: '', isbn: '', genre: '' })
            }
        }

        catch (error) {
            console.log('error in sending data')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>ADD BOOK</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>TITLE </label>
                        <input type="text" name='title' onChange={onInputChange} className='inputcontrol' placeholder='first name of the book' required /><br /><br />
                        <label className='labelcontrol'>AUTHOR </label>
                        <input type="text" name='author' onChange={onInputChange} className='inputcontrol' placeholder='name of author of the book' required /><br /><br />


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


