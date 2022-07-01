import React, { useState } from 'react'
import axios from 'axios'
function Genrecreateform() {
    const [addgenre, setaddgenre] = useState({ name: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddgenre(prevInput => { return { ...addgenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://restapimongoose.herokuapp.com/catalog/genre/create/submit', addgenre)
        alert('data inserted')
        console.log(addgenre)
        setaddgenre({ name: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>GENRE CREATE FORM</h3>
                <form onSubmit={onSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label className='labelcontrol'>ADD GENRE</label>
                        <input type="text" name='name' onChange={oninputchange} className='inputcontrol' placeholder='eg: fantasy,action' required /><br /><br />


                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW GENRE' />

                </form>

            </div >

        </>
    )
}

export default Genrecreateform