import React, { useState } from 'react'

import { createGenre } from '../../api/genre'
function GenreCreateForm() {
    const [addGenre, setAddGenre] = useState({ name: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddGenre(prevInput => { return { ...addGenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await createGenre(addGenre)
        alert('data inserted')
        console.log(addGenre)
        setAddGenre({ name: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>GENRE CREATE FORM</h3>
                <form onSubmit={onSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label className='labelcontrol'>ADD GENRE</label>
                        <input type="text" name='name' onChange={onInputChange} className='inputcontrol' placeholder='eg: fantasy,action' required /><br /><br />


                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW GENRE' />

                </form>

            </div >

        </>
    )
}

export default GenreCreateForm