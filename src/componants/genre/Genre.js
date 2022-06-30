import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Genrecreateform from './Genrecreateform';
import Genredeleteform from './Genredeleteform'
import Genreeditform from './Genreeditform';
function Genre() {
    const [genre, setgenre] = useState([])
    const [sgcf, setsgcf] = useState(false);
    const [sgdf, setsgdf] = useState(false);
    const [sgef, setsgef] = useState(false);
    const navigate = useNavigate();
    function getgenre() {


        axios.get('http://localhost:7070/catalog/genres').then(res => {
            console.log(res.data)
            const mygenre = res.data;
            setgenre(mygenre)

        })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div className='genre'>
            <button className='button4' onClick={getgenre} >show genres</button>
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
                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='genrecreate' onClick={() => { setsgcf(true) }}>ADD NEW GENRE</button>
            <button className='genreupdate' onClick={() => { setsgef(true) }}>UPDATE GENRE</button>
            <button className='genredelete' onClick={() => { setsgdf(true) }}>DELETE GENRE</button><br /><br />

            <button className='authorcreate' onClick={() => { setsgcf(false); setsgef(false); setsgdf(false) }}>close</button>

            {sgcf && <Genrecreateform />}<br />
            {sgef && <Genreeditform />}<br />
            {sgdf && <Genredeleteform />}<br />

        </div>
    )

}

export default Genre