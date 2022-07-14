import React, { useState } from 'react'

import { updateInstance } from '../../api/bookInstance'
function InstanceEditForm({ id }) {
    const [addInstance, setAddInstance] = useState({ _id: id, book: '', imprint: '', status: '', due_back: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target

        setAddInstance(prevInput => { return { ...addInstance, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await updateInstance(addInstance)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('data updated')
                console.log(addInstance)
                setAddInstance({ _id: '', book: '', imprint: '', status: '', dueback: '' })// resetting form after sending data
            }
        }
        catch (err) {
            console.log('error')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>BOOKINSTANCE UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">


                        <label className='labelcontrol'>_ID</label>
                        <input type="text" name='_id' value={addInstance._id} onChange={onInputChange} className='inputcontrol'
                            placeholder='id of the bookinstance' required /><br /><br />

                        <label className='labelcontrol'>BOOK</label>
                        <input type="text" name='book' value={addInstance.book} onChange={onInputChange} className='inputcontrol' placeholder='id  of the bookinstance' required readOnly='readOnly' /><br /><br />

                        <label className='labelcontrol'>IMPRINT</label>

                        <input type='text' name='imprint' value={addInstance.imprint} onChange={onInputChange} className='inputcontrol' placeholder='imprint of the bookinstance' required /><br /><br />

                        <label className='labelcontrol'>STATUS</label>

                        <input type="text" name='status' value={addInstance.status} onChange={onInputChange} className='inputcontrol' placeholder='status of the bookinstance' required /><br /><br />


                        <label className='labelcontrol'>DUEBACK</label>

                        <input type='date' name='due_back' value={addInstance.due_back} onChange={onInputChange} className='inputcontrol' placeholder='dueback date of the bookinstance' /><br /><br />



                    </div>
                    <input type='submit' className='formsubmit' value='EDIT BOOKINSTANCE' />

                </form>

            </div >

        </>
    )
}

export default InstanceEditForm