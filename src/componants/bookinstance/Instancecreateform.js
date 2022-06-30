import axios from 'axios'
import React, { useState } from 'react'

function Instancecreateform() {
    const [addinstance, setaddinstance] = useState({ book: '', imprint: '', status: '', due_back: '' })

    const oninputchange = (e) => {
        const { name, value } = e.target
        setaddinstance(prevInput => { return { ...addinstance, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7070/catalog/bookinstance/create/submit', addinstance)
        alert('data inserted')
        console.log(addinstance)
        setaddinstance({ book: '', imprint: '', status: '', due_back: '' })
    }
    return (
        <>
            <div className='card'>
                <h3>BOOKINSTANCE ADD FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className='labelcontrol'>BOOK</label>
                        <input type="text" name='book' value={addinstance.book} onChange={oninputchange} className='inputcontrol' placeholder='first name of the book' required /><br /><br />

                        <label className='labelcontrol'>IMPRINT</label>

                        <input type='text' name='imprint' value={addinstance.imprint} onChange={oninputchange} className='inputcontrol' placeholder='imprint name of the book' required /><br /><br />

                        <label className='labelcontrol'>STATUS</label>

                        <input type="text" name='status' value={addinstance.status} onChange={oninputchange} className='inputcontrol' placeholder='status of the book' required /><br /><br />


                        <label className='labelcontrol'>DUEBACK</label>

                        <input type='text' name='dueback' value={addinstance.due_back} onChange={oninputchange} className='inputcontrol' placeholder='dueback number of the book' /><br /><br />

                    </div>
                    <input type='submit' className='formsubmit' value='ADD NEW BOOKINSTANCE' />

                </form>

            </div >

        </>
    )
}

export default Instancecreateform