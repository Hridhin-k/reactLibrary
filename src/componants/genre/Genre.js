import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import GenreCreateForm from './GenreCreateForm';
import GenreDeleteForm from './GenreDeleteForm'
import GenreEditForm from './GenreEditForm';
import { getGenres } from '../../api/genre';

function Genre() {
    const [genre, setGenre] = useState([])
    const [sgcf, setSgcf] = useState(false);
    const [sgdf, setSgdf] = useState(false);
    const [sgef, setSgef] = useState(false);
    const navigate = useNavigate();
    function getGenre() {


        getGenres('/genres').then(res => {
            console.log(res.data)
            const myGenre = res.data;
            setGenre(myGenre)

        })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div className='genre'>
            <button className='button4' onClick={getGenre} >show genres</button>
            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>


            <table className='table table-striped'>
                <thead>
                    <tr><th>ID</th>
                        <th>GENRES</th>
                    </tr>
                </thead>
                <tbody>

                    {genre.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td><button className='genreupdate' onClick={() => { setSgef(true) }}>UPDATE GENRE</button></td>
                                <td><button className='genredelete' onClick={() => { setSgdf(true) }}>DELETE GENRE</button></td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='genrecreate' onClick={() => { setSgcf(true) }}>ADD NEW GENRE</button>



            <button className='authorcreate' onClick={() => { setSgcf(false); setSgef(false); setSgdf(false) }}>close</button>

            {sgcf && <GenreCreateForm />}<br />
            {sgef && <GenreEditForm />}<br />
            {sgdf && <GenreDeleteForm />}<br />

        </div>
    )

}

export default Genre