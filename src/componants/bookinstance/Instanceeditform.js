import React, { useState } from 'react'
import axios from 'axios'
function Instanceeditform() {
    const [addinstance, setaddinstance] = useState({ _id: '', book: '', imprint: '', status: '', due_back: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target

        setaddinstance(prevInput => { return { ...addinstance, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/bookinstance/update/submit', addinstance)
        alert('data updated')
        console.log(addinstance)
        setaddinstance({ _id: '', book: '', imprint: '', status: '', due_back: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOKINSTANCE UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">


                        <label className='labelcontrol'>_ID</label>
                        <input type="text" name='_id' onChange={oninputchange} className='inputcontrol' placeholder='id of the bookinstance' required /><br /><br />

                        <label className='labelcontrol'>BOOK</label>
                        <input type="text" name='book' onChange={oninputchange} className='inputcontrol' placeholder='id  of the bookinstance' required /><br /><br />

                        <label className='labelcontrol'>IMPRINT</label>

                        <input type='text' name='imprint' onChange={oninputchange} className='inputcontrol' placeholder='imprint of the bookinstance' required /><br /><br />

                        <label className='labelcontrol'>STATUS</label>

                        <input type="text" name='status' onChange={oninputchange} className='inputcontrol' placeholder='status of the bookinstance' required /><br /><br />


                        <label className='labelcontrol'>DUEBACK</label>

                        <input type='date' name='due_back' onChange={oninputchange} className='inputcontrol' placeholder='dueback date of the bookinstance' /><br /><br />



                    </div>
                    <input type='submit' className='formsubmit' value='EDIT BOOKINSTANCE' />

                </form>

            </div >

        </>
    )
}

export default Instanceeditform