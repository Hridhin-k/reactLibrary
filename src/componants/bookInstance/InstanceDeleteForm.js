import React, { useState } from 'react'

import { deleteInstance } from '../../api/bookInstance';
function InstanceDeleteForm({ id }) {

    const [instanceDelete, setInstanceDelete] = useState({ _id: id })
    function onInputForm(e) {
        const { name, value } = e.target;
        setInstanceDelete(preInput => { return { ...instanceDelete, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(instanceDelete)
        await deleteInstance(instanceDelete)

        alert('instance deleted')

        setInstanceDelete({ _id: '' })

    }
    return (
        <div className='card' id='form1'>
            <h3 >BOOK INSTANCE DELETE FORM</h3>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='_id' value={instanceDelete._id} onChange={onInputForm} className='inputcontrol' placeholder='_id of the instance you want to delete' required readOnly='readOnly' /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default InstanceDeleteForm