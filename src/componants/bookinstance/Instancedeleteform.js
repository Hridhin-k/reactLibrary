import React, { useState } from 'react'
import axios from 'axios'
import { deleteInstance } from '../../api/bookInstance';
function InstanceDeleteForm() {

    const [instanceDelete, setInstanceDelete] = useState({ _id: '' })
    function onInputForm(e) {
        const { name, value } = e.target;
        setInstanceDelete(preInput => { return ({ ...instanceDelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await deleteInstance(instanceDelete)
        setInstanceDelete({ _id: '' })
        console.log(instanceDelete)
        alert('instance deleted')
    }
    return (
        <div className='card' >
            <h3 >BOOK INSTANCE DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <input type='text' name='_id' onChange={onInputForm} className='inputcontrol' placeholder='_id of the instance you want to delete' required /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default InstanceDeleteForm