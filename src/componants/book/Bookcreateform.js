import React, { useState } from 'react'
import axios from 'axios'
function Bookcreateform() {
    const [addbook, setaddbook] = useState({ title: '', author: '', summary: '', isbn: '', genre: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddbook(prevInput => { return { ...addbook, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/book/create/submit', addbook)
        alert('data inserted')
        console.log(addbook)
        setaddbook({ title: '', author: '', summary: '', isbn: '', genre: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOK ADD FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>TITLE </label>
                        <input type="text" name='title' value={addbook.title} onChange={oninputchange} className='inputcontrol' placeholder='first name of the book' required /><br /><br />

                        <label className='labelcontrol'>AUTHOR </label>

                        <input type='text' name='author' value={addbook.author} onChange={oninputchange} className='inputcontrol' placeholder='author name of the book' required /><br /><br />

                        <label className='labelcontrol'>SUMMARY </label>

                        <input type="text" name='summary' value={addbook.summary} onChange={oninputchange} className='inputcontrol' placeholder='summary of the book' required /><br /><br />


                        <label className='labelcontrol'>ISBN </label>

                        <input type='text' name='isbn' value={addbook.isbn} onChange={oninputchange} className='inputcontrol' placeholder='isbn number of the book' /><br /><br />

                        <label className='labelcontrol'>GENRE </label>

                        <input type='text' name='genre' value={addbook.genre} onChange={oninputchange} className='inputcontrol' placeholder='date of death of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW BOOK' />

                </form>

            </div >

        </>
    )
}

export default Bookcreateform