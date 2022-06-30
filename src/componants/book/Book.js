import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Bookcreateform from './Bookcreateform';
import Bookdeleteform from './Bookdeleteform';
import Bookeditform from './Bookeditform';
function Book() {
    const [book, setbook] = useState([])
    const [sbcf, setsbcf] = useState(false);
    const [sbdf, setsbdf] = useState(false);
    const [sbef, setsbef] = useState(false);
    const navigate = useNavigate();
    function getbook() {


        axios.get('http://localhost:7070/catalog/books').then(res => {
            console.log(res)
            const mybook = res.data;
            setbook(mybook)

        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="book">
            <button className='button2' onClick={getbook}>show all books</button>
            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>SUMMARY</th>
                        <th>ISBN</th>
                        <th>GENRE</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item) => {
                        return (

                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>

                                <td>{item.summary}</td>
                                <td>{item.isbn}</td>
                                <td>{item.genre}</td>


                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='bookcreate' onClick={() => { setsbcf(true) }}>ADD NEW BOOK</button>
            <button className='bookupdate' onClick={() => { setsbef(true) }} >UPDATE BOOK</button>
            <button className='bookdelete' onClick={() => { setsbdf(true) }}>DELETE BOOK</button>
            <button className='authorcreate' onClick={() => { setsbcf(false); setsbef(false); setsbdf(false) }}>close</button>
            {sbcf && <Bookcreateform />}<br />
            {sbef && <Bookeditform />}<br />
            {sbdf && <Bookdeleteform />}<br />

        </div>
    )
}

export default Book