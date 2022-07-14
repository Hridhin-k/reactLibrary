import React, { useState } from 'react'

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
    const navigate = useNavigate();

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
            <button className='button1' onClick={getAuthor}>show authors</button>
            <button className='backbutton' onClick={() => navigate(-1)}>Back</button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
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
                                <td>{item._id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.family_name}</td>

                                <td>{item.date_of_birth}</td>

                                <td>{item.date_of_death}</td>
                                <td>  <button className='authorbt' onClick={() => { setShowUpdateForm(true); setId(item._id) }} >UPDATE </button></td>
                                <td>  <button className='authorbt' onClick={() => { setShowDeleteForm(true); setId(item._id); }}>DELETE </button></td>

                            </tr>)
                    })}
                </tbody>
            </table><br />


            <button className='authorbt' onClick={() => { setShowCreateForm(true) }}>ADD NEW AUTHOR</button>




            <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button>




            {showCreateForm && <AuthorCreateForm />}

            {showUpdateForm && <AuthorEditForm id={id} />}
            {showDeleteForm && <AuthorDeleteForm id={id} />}
        </div >

    )
}

export default Author

