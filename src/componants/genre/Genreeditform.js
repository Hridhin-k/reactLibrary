import React, { useState } from 'react'

import { updateGenre } from '../../api/genre'
function GenreEditForm() {
    const [addGenre, setAddGenre] = useState({ _id: '', name: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddGenre(prevInput => { return { ...addGenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await updateGenre(addGenre)
        alert('DATA UPDATED SUCCESSFULLY')
        console.log(addGenre)
        setAddGenre({ _id: '', name: '' })
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>GENRE UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'> GENRE ID - </label>
                        <input type="text" name='_id' onChange={onInputChange} className='inputcontrol' placeholder='genre id you want to delete' required /><br /><br />

                        <label className='labelcontrol'>ADD GENRE - </label>
                        <input type="text" name='name' onChange={onInputChange} className='inputcontrol' placeholder='eg: fantasy,action' required /><br /><br />


                    </div>
                    <input type='submit' className='formsubmit' value='EDIT GENRE' />

                </form>

            </div >

        </>
    )
}

export default GenreEditForm