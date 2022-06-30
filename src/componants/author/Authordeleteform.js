import axios from 'axios';
import React, { useState } from 'react'

function Authordeleteform() {
    const [authordelete, setauthordelete] = useState({ _id: '' })

    function oninputform(e) {
        const { name, value } = e.target;
        setauthordelete(preInput => { return ({ ...authordelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:7070/catalog/author/delete/submit', authordelete)
        setauthordelete({ _id: '' })
        console.log(authordelete)
        alert('author deleted')
    }
    return (
        <div className='card'>
            <h3>AUTHOR DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <input type='text' name='_id' onChange={oninputform} className='inputcontrol' placeholder='_id of the author you want to delete' required /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE AUTHOR' />
            </form>
        </div>
    )
}

export default Authordeleteform