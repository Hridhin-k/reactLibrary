import React, { useState } from 'react'

import { deleteGenre } from '../../api/genre';
function GenreDeleteForm(props) {
    const [genreDelete, setGenreDelete] = useState({ _id: props.id })
    const [akn, setAkn] = useState(null)
    props.func(akn)
    function oninputform(e) {
        const { name, value } = e.target;
        setGenreDelete(preInput => { return ({ ...genreDelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await deleteGenre(genreDelete)
            if (resp.status == 200) {
                console.log(genreDelete)
                console.log(resp.status)
                alert('genre deleted')
                setAkn(true)
                setGenreDelete({ _id: '' })
            }
        }
        catch (err) {
            console.log('error')
        }
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