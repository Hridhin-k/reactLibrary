import React, { useState, } from 'react'

import { updateAuthor } from '../../api/author'
function AuthorEditForm(props) {
    const [acknowledgement, setAcknowledgement] = useState(null)
    const [addAuthor, setAddAuthor] = useState({ _id: props.id, first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
    props.func(acknowledgement)
    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddAuthor(prevInput => { return { ...addAuthor, [name]: value } })
    }
    const onSubmit = async (e) => {

        e.preventDefault();

        try {
            const resp = await updateAuthor(addAuthor)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('DATA INSERTED SUCCESSFULLY')
                setAcknowledgement(true)
                setAddAuthor({ _id: '', first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
            }
        }
        catch (error) {
            console.log('error in sending data')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>EDIT AUTHOR INFO</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'>_id</label>
                        <input type="text" name='_id' value={addAuthor._id} onChange={onInputChange} className='inputcontrol' placeholder='enter the id of the author you want to edit' required readOnly='readOnly' /><br /><br />


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