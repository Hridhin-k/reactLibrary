import React, { useState } from 'react'
import axios from 'axios';
function Genredeleteform() {
    const [genredelete, setgenredelete] = useState({ _id: '' })
    function oninputform(e) {
        const { name, value } = e.target;
        setgenredelete(preInput => { return ({ ...genredelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post('https://restapimongoose.herokuapp.com/catalog/genre/delete/submit', genredelete)
        setgenredelete({ _id: '' })
        console.log(genredelete)
        alert('genre deleted')
    }
    return (
        <div className='card'>
            <h3>GENRE DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <input type='text' name='_id' onChange={oninputform} className='inputcontrol' placeholder='_id of the genre you want to delete' required /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default Genredeleteform