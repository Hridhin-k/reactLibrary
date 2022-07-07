
import React, { useState } from 'react'
import { deleteAuthor } from '../../api/author';

function AuthorDeleteForm({ id }) {

    const [authorDelete, setAuthorDelete] = useState({ _id: id })

    function onInputForm(e) {
        const { name, value } = e.target;
        setAuthorDelete(preInput => { return ({ ...authorDelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await deleteAuthor(authorDelete)
            if (resp.status == 200) {
                console.log(resp.status)
                setAuthorDelete({ _id: '' })

                console.log(authorDelete)
                alert('author deleted')
            }
        }
        catch (err) {
            console.log('error in sending data')
        }
    }
    console.log(id)
    return (
        <div className='card' id='form1'>
            <h3></h3>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='_id' value={authorDelete._id} onChange={onInputForm} className='inputcontrol' placeholder='_id of the author you want to delete' required readOnly='readOnly' /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE AUTHOR' />
            </form>
        </div>
    )
}

export default AuthorDeleteForm