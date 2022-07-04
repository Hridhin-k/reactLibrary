import React, { useState, useEffect } from 'react'
// import { getAuthors } from '../../api/author.js'
import { createBook } from '../../api/book'
// import { getGenres } from '../../api/genre';

function BookCreateForm() {
    const [addBook, setAddBook] = useState({ title: '', author: '', summary: '', isbn: '', genre: '' })
    //const [auth, setAuth] = useState([])
    //const [gen, setGen] = useState([])
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

    // const selectAuthors = () => {
    //     getAuthors('/authors').then(res => {

    //         const myAuthor = res.data;
    //         setAuth(myAuthor)
    //         console.log(myAuthor)
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }
    // const selectGenres = () => {
    //     getGenres('/genres').then(res => {
    //         console.log(res.data)
    //         const myGenre = res.data;
    //         setGen(myGenre)
    //         console.log(myGenre)
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }







    return (
        <>
            <div className='card'>
                <h3>BOOK ADD FORM</h3>
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


{/* < select name='select author' onClick={selectAuthors} />

{auth.map((item) => (
    <option key={item._id}>{item.first_name} {item.family_name}</option>
))}<br /><br /> */}