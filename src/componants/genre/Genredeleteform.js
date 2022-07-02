import React, { useState } from 'react'

import { deleteGenre } from '../../api/genre';
function GenreDeleteForm() {
    const [genreDelete, setGenreDelete] = useState({ _id: '' })
    function oninputform(e) {
        const { name, value } = e.target;
        setGenreDelete(preInput => { return ({ ...genreDelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await deleteGenre(genreDelete)
        setGenreDelete({ _id: '' })
        console.log(genreDelete)
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

export default GenreDeleteForm