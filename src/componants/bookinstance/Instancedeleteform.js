import React, { useState } from 'react'
import axios from 'axios'
function Instancedeleteform() {

    const [instancedelete, setinstancedelete] = useState({ _id: '' })
    function oninputform(e) {
        const { name, value } = e.target;
        setinstancedelete(preInput => { return ({ ...instancedelete, [name]: value }) })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post('https://restapimongoose.herokuapp.com/catalog/bookinstance/delete/submit', instancedelete)
        setinstancedelete({ _id: '' })
        console.log(instancedelete)
        alert('instance deleted')
    }
    return (
        <div className='card' >
            <h3 >BOOK INSTANCE DELETE FORM</h3>
            <form onSubmit={onSubmit}>
                <input type='text' name='_id' onChange={oninputform} className='inputcontrol' placeholder='_id of the instance you want to delete' required /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default Instancedeleteform