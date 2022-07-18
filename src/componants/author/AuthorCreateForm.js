
import React from 'react'
import { useState } from 'react'
import { createAuthor } from '../../api/author'
function AuthorCreateForm(props) {
    const [addAuthor, setAddAuthor] = useState({ first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
    const [akn, setAkn] = useState(null)

    props.func(akn)


    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddAuthor(prevInput => { return { ...addAuthor, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createAuthor(addAuthor)
            if (resp.status == 200) {
                console.log(resp.status)
                alert('data inserted')

                console.log(addAuthor)
                setAkn(true)
                setAddAuthor({ first_name: '', family_name: '', date_of_birth: '', date_of_death: '' })
            }
        }
        catch (err) {
            console.log('error in sending data')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>AUTHOR CREATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>First name</label>
                        <input type="text" name='first_name' onChange={onInputChange} className='inputcontrol' placeholder='first name of the author' required /><br /><br />

                        <label className='labelcontrol'>Family name</label>

                        <input type='text' name='family_name' onChange={onInputChange} className='inputcontrol' placeholder='family name of the author' required /><br /><br />

                        <label className='labelcontrol'>date of birth</label>

                        <input type="date" name='date_of_birth' onChange={onInputChange} className='inputcontrol' placeholder='date of birth of the author' required /><br /><br />


                        <label className='labelcontrol'>date of death</label>

                        <input type='date' name='date_of_death' onChange={onInputChange} className='inputcontrol' placeholder='date of death of the author' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW AUTHOR' />

                </form>

            </div >

        </>
    )
}

export default AuthorCreateForm
