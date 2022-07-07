
import React, { useState } from 'react'
import { createInstance } from '../../api/bookInstance'
function InstanceCreateForm() {
    const [addInstance, setAddInstance] = useState({ book: '', imprint: '', status: '', due_back: '' })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddInstance(prevInput => { return { ...addInstance, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createInstance(addInstance)
            if (resp.status == 200) {
                alert('data inserted')
                console.log(resp.status)
                console.log(addInstance)
                setAddInstance({ book: '', imprint: '', status: '', due_back: '' })// RESET FORM AFTER SENDING DATA
            }
        }
        catch (err) {
            console.log('error')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>ADD NEW INSTANCE</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>BOOK</label>
                        <input type="text" name='book' onChange={onInputChange} className='inputcontrol' placeholder='first name of the book' required /><br /><br />

                        <label className='labelcontrol'>IMPRINT</label>

                        <input type='text' name='imprint' onChange={onInputChange} className='inputcontrol' placeholder='imprint name of the book' required /><br /><br />

                        <label className='labelcontrol'>STATUS</label>

                        <input type="text" name='status' onChange={onInputChange} className='inputcontrol' placeholder='status of the book' required /><br /><br />


                        <label className='labelcontrol'>DUEBACK</label>

                        <input type='date' name='dueback' onChange={onInputChange} className='inputcontrol' placeholder='dueback number of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW BOOKINSTANCE' />

                </form>

            </div >

        </>
    )
}

export default InstanceCreateForm