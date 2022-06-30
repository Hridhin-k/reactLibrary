import React from 'react'
import axios from 'axios';
import { useState } from 'react'
function Bookdeleteform() {
    const [bookdelete, setbookdelete] = useState({ _id: '' })
    function oninputform(e) {
        const { name, value } = e.target;
        setbookdelete(preInput => { return ({ ...bookdelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:7070/catalog/book/delete/submit', bookdelete)
        setbookdelete({ _id: '' })
        console.log(bookdelete)
        alert('book deleted')
    }

    return (
        <div className='card'>
            <h3>BOOK DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <label className='labelcontrol'>DELETE </label>
                <input type='text' name='_id' onChange={oninputform} className='inputcontrol' placeholder='_id of the book you want to delete' required /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default Bookdeleteform