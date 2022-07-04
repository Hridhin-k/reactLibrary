import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import InstanceCreateForm from './InstanceCreateForm';
import InstanceDeleteForm from './InstanceDeleteForm';
import InstanceEditForm from './InstanceEditForm';
import { getInstances } from '../../api/bookInstance';
import axios from 'axios';
function BookInstance() {
    const [instance, setInstance] = useState([])
    const [sicf, setSicf] = useState(false);
    const [sidf, setSidf] = useState(false);
    const [sief, setSief] = useState(false);
    const navigate = useNavigate();
    function getBookInstance() {
        getInstances(instance).then(res => {
            console.log(res.data)
            const myInstance = res.data;
            setInstance(myInstance)
        })
            .catch((error) => {
                console.log(error)
            })


    }

    return (
        <div className='BookInstance'>
            <button className='button3' onClick={getBookInstance}>show all BookInstance</button>
            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BOOK</th>
                        <th>IMPRINT</th>
                        <th>STATUS</th>
                        <th>DUE BACK</th>
                    </tr>
                </thead>
                <tbody>
                    {instance.map((item) => {
                        return (

                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.book}</td>
                                <td>{item.imprint}</td>

                                <td>{item.status}</td>

                                <td>{item.due_back}</td>
                                <td><button className='BookInstanceupdate' onClick={() => { setSief(true) }}>UPDATE</button></td>
                                <td><button className='BookInstancedelete' onClick={() => { setSidf(true) }}>DELETE</button></td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='BookInstancecreate' onClick={() => { setSicf(true) }}>ADD NEW BookInstance</button>


            <button className='authorcreate' onClick={() => { setSicf(false); setSief(false); setSidf(false) }}>close</button>

            {sicf && <InstanceCreateForm />}<br />

            {sief && <InstanceEditForm />}<br />
            {sidf && <InstanceDeleteForm />}<br />
        </div>
    )
}

export default BookInstance