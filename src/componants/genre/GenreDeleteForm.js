import React, { useState } from 'react'

import { deleteGenre } from '../../api/genre';
function GenreDeleteForm({ id }) {
    const [genreDelete, setGenreDelete] = useState({ _id: id })
    console.log('hhh', id)
    function oninputform(e) {
        const { name, value } = e.target;
        setGenreDelete(preInput => { return ({ ...genreDelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await deleteGenre(genreDelete)

        console.log(genreDelete)
        alert('genre deleted')
        setGenreDelete({ _id: '' })
    }
    return (
        <div className='card' id='form1'>
            <h3>GENRE DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <input type='text' name='_id' value={genreDelete._id} onChange={oninputform} className='inputcontrol' placeholder='_id of the genre you want to delete' required readOnly='readOnly' /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default GenreDeleteForm