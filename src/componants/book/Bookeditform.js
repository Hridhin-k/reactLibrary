import React, { useState } from 'react'
import axios from 'axios'
function Bookeditform() {
    const [addbook, setaddbook] = useState({ _id: '', title: '', author: '', summary: '', isbn: '', genre: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddbook(prevInput => { return { ...addbook, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/book/update/submit', addbook)
        alert('DATA INSERTED SUCCESSFULLY')
        console.log(addbook)
        setaddbook({ _id: '', title: '', author: '', summary: '', isbn: '', genre: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOK UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_ID</label>
                        <input type="text" name='_id' value={addbook._id} onChange={oninputchange} className='inputcontrol' placeholder='enter the id of the book you want to edit' required /><br /><br />


                        <label className='labelcontrol'>TITLE</label>
                        <input type="text" name='title' value={addbook.title} onChange={oninputchange} className='inputcontrol' placeholder=' name of the book' required /><br /><br />

                        <label className='labelcontrol'>AUTHOR</label>

                        <input type='text' name='author' value={addbook.author} onChange={oninputchange} className='inputcontrol' placeholder='author of the book' required /><br /><br />

                        <label className='labelcontrol'>SUMMARY</label>

                        <input type="text" name='summary' value={addbook.summary} onChange={oninputchange} className='inputcontrol' placeholder='summary of the book' required /><br /><br />


                        <label className='labelcontrol'>ISBN</label>

                        <input type='text' name='isbn' value={addbook.isbn} onChange={oninputchange} className='inputcontrol' placeholder='isbn of the book' /><br /><br />


                        <label className='labelcontrol'>GENRE</label>

                        <input type='text' name='genre' value={addbook.genre} onChange={oninputchange} className='inputcontrol' placeholder='genre of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='EDIT BOOK' />

                </form>

            </div >
        </>)
}

export default Bookeditform