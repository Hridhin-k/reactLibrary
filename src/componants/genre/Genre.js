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

    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'));

        else {
            setType('user');
        }
        getGenre();
    }, [])

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
                                    <td> {type === 'admin' ? <button className='genreupdate' onClick={() => { setShowUpdateForm(true); setId(item._id) }}>UPDATE GENRE</button> : ''}</td>
                                    <td> {type === 'admin' ? <button className='genredelete' onClick={() => { setShowDeleteForm(true); setId(item._id) }}>DELETE GENRE</button> : ''}</td>
                                </tr>)
                        })}




                    </tbody>
                </table><br />
                {type === 'admin' ? <button className='genrecreate' onClick={() => { setShowCreateForm(true) }}>ADD NEW GENRE</button> : ''}



                {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}

                {showCreateForm && <GenreCreateForm />}<br />
                {showUpdateForm && <GenreEditForm id={id} />}<br />
                {showDeleteForm && <GenreDeleteForm id={id} />}

            </div>
        </>
    )

}

export default Genre