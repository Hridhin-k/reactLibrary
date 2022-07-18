import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import AuthorCreateForm from './AuthorCreateForm.js'
import AuthorDeleteForm from './AuthorDeleteForm'
import AuthorEditForm from './AuthorEditForm'
import { getAuthors } from '../../api/author.js'



function Author() {
    const [author, setAuthor] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [id, setId] = useState('');
    const [type, setType] = useState(null)
    const [acknowledgement, setAcknowledgement] = useState(null)

    const navigate = useNavigate();
    const pull_data = (data) => {
        setAcknowledgement(data)

    }
    console.log('aknowladgment', acknowledgement)
    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'))
        else
            setType('user')
        getAuthor();
    }, [acknowledgement]);
    function getAuthor() {
        getAuthors('/authors').then(res => {
            if (res.status == 200) {
                console.log(res.status)
                const myAuthor = res.data;
                setAuthor(myAuthor)
            }
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='author'>

            <button className='backbutton' onClick={() => navigate(-1)}>Back</button>

            <table className="table table-striped">
                <thead>
                    <tr>

                        <th>FIRST NAME</th>
                        <th>FAMILY NAME</th>
                        <th>DATE OF BIRTH</th>
                        <th>DATE OF DEATH</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((item) => {

                        return (

                            <tr key={item._id}>

                                <td>{item.first_name}</td>
                                <td>{item.family_name}</td>

                                <td>{item.date_of_birth}</td>

                                <td>{item.date_of_death}</td>
                                <td>  {type === 'admin' ? <button className='authorbt' onClick={() => { setShowUpdateForm(true); setId(item._id) }} >UPDATE </button> : ''}</td>
                                <td>  {type === 'admin' ? <button className='authorbt' onClick={() => { setShowDeleteForm(true); setId(item._id); }}>DELETE </button> : ''}</td>

                            </tr>)
                    })}
                </tbody>
            </table><br />


            {type === 'admin' ? <button className='authorbt' onClick={() => { setShowCreateForm(true) }}>ADD AUTHOR</button> : ''}




            {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}




            {showCreateForm && <AuthorCreateForm func={pull_data} />}

            {showUpdateForm && <AuthorEditForm id={id} func={pull_data} />}
            {showDeleteForm && <AuthorDeleteForm id={id} func={pull_data} />}



        </div >

    )
}
export default Author

