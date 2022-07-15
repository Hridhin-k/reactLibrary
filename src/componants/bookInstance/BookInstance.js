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
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'));

        else {
            setType('user');
        }
        getBookInstance()

    }, [])

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
                                <td>{type === 'admin' ? <button className='BookInstanceupdate' onClick={() => { setShowUpdateForm(true); setId(item._id) }}>UPDATE</button> : ''}</td>
                                <td>{type === 'admin' ? <button className='BookInstancedelete' onClick={() => { setShowDeleteForm(true); setId(item._id); console.log(item._id) }}>DELETE</button> : ''}</td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            {type === 'admin' ? <button className='BookInstancecreate' onClick={() => { setShowCreateForm(true) }}>ADD NEW BookInstance</button> : ''}


            {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}

            {showCreateForm && <InstanceCreateForm />} <br />

            {showUpdateForm && <InstanceEditForm id={id} />} <br />
            {showDeleteForm && <InstanceDeleteForm id={id} />} <br />
        </div >
    )
}

export default BookInstance