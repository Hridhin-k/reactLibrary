import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import InstanceCreateForm from './InstanceCreateForm';
import InstanceDeleteForm from './InstanceDeleteForm';
import InstanceEditForm from './InstanceEditForm';
import { getInstances } from '../../api/bookInstance';


function BookInstance() {
    const [instance, setInstance] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [id, setId] = useState('')
    const [type, setType] = useState(null)
    const [acknowledgement, setAcknowledgement] = useState(null)
    const navigate = useNavigate();
    const pull_data = (data) => {
        setAcknowledgement(data)
    }
    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'));

        else {
            setType('user');
        }
        getBookInstance()

    }, [acknowledgement])

    function getBookInstance() {
        getInstances(instance).then(res => {

            if (res.status == 200) {
                console.log(res.status)
                console.log(res.data)
                const myInstance = res.data;
                setInstance(myInstance)
            }
        })
            .catch((error) => {
                console.log(error)
            })


    }

    return (
        <div className='BookInstance'>

            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>

            <table className="table table-striped">
                <thead>
                    <tr>

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

                                <td>{item.book}</td>
                                <td>{item.imprint}</td>

                                <td>{item.status}</td>

                                <td>{item.due_back}</td>
                                <td>{type === 'admin' ? <button className='authorbt' onClick={() => { setShowUpdateForm(true); setId(item._id) }}>UPDATE</button> : ''}</td>
                                <td>{type === 'admin' ? <button className='authorbt' onClick={() => { setShowDeleteForm(true); setId(item._id); console.log(item._id) }}>DELETE</button> : ''}</td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            {type === 'admin' ? <button className='authorbt' onClick={() => { setShowCreateForm(true) }}>ADD Instance</button> : ''}


            {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}

            {showCreateForm && <InstanceCreateForm func={pull_data} />} <br />

            {showUpdateForm && <InstanceEditForm id={id} func={pull_data} />} <br />
            {showDeleteForm && <InstanceDeleteForm id={id} func={pull_data} />} <br />
        </div >
    )
}

export default BookInstance