import React, { useState } from 'react'
import axios from 'axios'
function Genreeditform() {
    const [addgenre, setaddgenre] = useState({ _id: '', name: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddgenre(prevInput => { return { ...addgenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/genre/update/submit', addgenre)
        alert('DATA UPDATED SUCCESSFULLY')
        console.log(addgenre)
        setaddgenre({ _id: '', name: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>GENRE UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'> GENRE ID - </label>
                        <input type="text" name='_id' value={addgenre._id} onChange={oninputchange} className='inputcontrol' placeholder='genre id you want to delete' required /><br /><br />

                        <label className='labelcontrol'>ADD GENRE - </label>
                        <input type="text" name='name' value={addgenre.name} onChange={oninputchange} className='inputcontrol' placeholder='eg: fantasy,action' required /><br /><br />


                    </div>
                    <input type='submit' className='formsubmit' value='EDIT GENRE' />

                </form>

            </div >

        </>
    )
}

export default Genreeditform