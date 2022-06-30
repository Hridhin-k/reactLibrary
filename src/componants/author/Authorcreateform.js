import axios from 'axios'
import React from 'react'
import { useState } from 'react'
function Authorcreateform() {
    const [addauthor, setaddauthor] = useState({ first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddauthor(prevInput => { return { ...addauthor, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/author/create/submit', addauthor)
        alert('data inserted')
        console.log(addauthor)
        setaddauthor({ first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>AUTHOR CREATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>First name</label>
                        <input type="text" name='first_name' onChange={oninputchange} className='inputcontrol' placeholder='first name of the author' required /><br /><br />

                        <label className='labelcontrol'>Family name</label>

                        <input type='text' name='family_name' onChange={oninputchange} className='inputcontrol' placeholder='family name of the author' required /><br /><br />

                        <label className='labelcontrol'>date of birth</label>

                        <input type="date" name='date_of_birth' onChange={oninputchange} className='inputcontrol' placeholder='date of birth of the author' required /><br /><br />


                        <label className='labelcontrol'>date of death</label>

                        <input type='date' name='date_of_death' onChange={oninputchange} className='inputcontrol' placeholder='date of death of the author' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW AUTHOR' />

                </form>

            </div >

        </>
    )
}

export default Authorcreateform