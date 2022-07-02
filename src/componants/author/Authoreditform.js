import React, { useState, } from 'react'
import axios from 'axios'
import { updateAuthor } from '../../api/author'
function AuthorEditForm() {
    const [addAuthor, setAddAuthor] = useState({ _id: '', first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddAuthor(prevInput => { return { ...addAuthor, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await updateAuthor(addAuthor)
        alert('DATA INSERTED SUCCESSFULLY')
        console.log(addAuthor)
        setAddAuthor({ _id: '', first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>AUTHOR EDIT FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_id</label>
                        <input type="text" name='_id' value={addAuthor._id} onChange={onInputChange} className='inputcontrol' placeholder='enter the id of the author you want to edit' required /><br /><br />


                        <label className='labelcontrol'>First name</label>
                        <input type="text" name='first_name' value={addAuthor.first_name} onChange={onInputChange} className='inputcontrol' placeholder='first name of the author' required /><br /><br />

                        <label className='labelcontrol'>Family name</label>

                        <input type='text' name='family_name' value={addAuthor.family_name} onChange={onInputChange} className='inputcontrol' placeholder='family name of the author' required /><br /><br />

                        <label className='labelcontrol'>date of birth</label>

                        <input type="date" name='date_of_birth' value={addAuthor.date_of_birth} onChange={onInputChange} className='inputcontrol' placeholder='date of birth of the author' required /><br /><br />


                        <label className='labelcontrol'>date of death</label>

                        <input type='date' name='date_of_death' value={addAuthor.date_of_death} onChange={onInputChange} className='inputcontrol' placeholder='date of death of the author' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='EDIT AUTHOR' />

                </form>

            </div >
        </>)
}

export default AuthorEditForm