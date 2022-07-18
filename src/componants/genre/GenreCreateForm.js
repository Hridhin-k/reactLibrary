import React, { useState } from 'react'

import { createGenre } from '../../api/genre'
function GenreCreateForm(props) {
    const [addGenre, setAddGenre] = useState({ name: '' })
    const [acknowledgement, setAcknowledgement] = useState(null)
    props.func(acknowledgement)
    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddGenre(prevInput => { return { ...addGenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createGenre(addGenre)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('data inserted')
                console.log(addGenre)
                setAcknowledgement(true)
                setAddGenre({ name: '' })
            }
        }
        catch (err) {
            console.log('error')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
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