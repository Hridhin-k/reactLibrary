import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import GenreCreateForm from './GenreCreateForm';
import GenreDeleteForm from './GenreDeleteForm'
import GenreEditForm from './GenreEditForm';
import { getGenres } from '../../api/genre';


function Genre() {
    const [genre, setGenre] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [id, setId] = useState('');
    const [type, setType] = useState(null);
    const navigate = useNavigate();
    // const type = localStorage.getItem('type')
    console.log('CHEXKTYPE', type)
    const [ackmowledgement, setAcknowledgement] = useState(null)
    const pull_data = (data) => {
        setAcknowledgement(data)
    }
    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'));

        else {
            setType('user');
        }
        getGenre();
    }, [ackmowledgement])

    function getGenre() {


        getGenres('/genres').then(res => {



            if (res.status == 200) {

                const myGenre = res.data;
                setGenre(myGenre)
            }
        })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <>

            <div className='genre'>

                <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>


                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>GENRES</th>
                        </tr>
                    </thead>
                    <tbody>

                        {genre.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td> {type === 'admin' ? <button className='authorbt' onClick={() => { setShowUpdateForm(true); setId(item._id) }}>UPDATE </button> : ''}</td>
                                    <td> {type === 'admin' ? <button className='authorbt' onClick={() => { setShowDeleteForm(true); setId(item._id) }}>DELETE </button> : ''}</td>
                                </tr>)
                        })}




                    </tbody>
                </table><br />
                {type === 'admin' ? <button className='authorbt' onClick={() => { setShowCreateForm(true) }}>ADD GENRE</button> : ''}



                {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}

                {showCreateForm && <GenreCreateForm func={pull_data} />}<br />
                {showUpdateForm && <GenreEditForm id={id} func={pull_data} />}<br />
                {showDeleteForm && <GenreDeleteForm id={id} func={pull_data} />}

            </div>
        </>
    )

}

export default Genre