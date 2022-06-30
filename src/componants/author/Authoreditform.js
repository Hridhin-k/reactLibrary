import React, { useState, } from 'react'
import axios from 'axios'
function Authoreditform() {
    const [addauthor, setaddauthor] = useState({ _id: '', first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddauthor(prevInput => { return { ...addauthor, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/author/update/submit', addauthor)
        alert('DATA INSERTED SUCCESSFULLY')
        console.log(addauthor)
        setaddauthor({ _id: '', first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>AUTHOR EDIT FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_id</label>
                        <input type="text" name='_id' value={addauthor._id} onChange={oninputchange} className='inputcontrol' placeholder='enter the id of the author you want to edit' required /><br /><br />


                        <label className='labelcontrol'>First name</label>
                        <input type="text" name='first_name' value={addauthor.first_name} onChange={oninputchange} className='inputcontrol' placeholder='first name of the author' required /><br /><br />

                        <label className='labelcontrol'>Family name</label>

                        <input type='text' name='family_name' value={addauthor.family_name} onChange={oninputchange} className='inputcontrol' placeholder='family name of the author' required /><br /><br />

                        <label className='labelcontrol'>date of birth</label>

                        <input type="date" name='date_of_birth' value={addauthor.date_of_birth} onChange={oninputchange} className='inputcontrol' placeholder='date of birth of the author' required /><br /><br />


                        <label className='labelcontrol'>date of death</label>

                        <input type='date' name='date_of_death' value={addauthor.date_of_death} onChange={oninputchange} className='inputcontrol' placeholder='date of death of the author' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='EDIT AUTHOR' />

                </form>

            </div >
        </>)
}

export default Authoreditform