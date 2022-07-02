import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BookCreateForm from './BookCreateForm';
import BookDeleteForm from './BookDeleteForm';
import BookEditForm from './BookEditForm';
import { getBooks } from '../../api/book';
function Book() {
    const [book, setBook] = useState([])
    const [sbcf, setSbcf] = useState(false);
    const [sbdf, setSbdf] = useState(false);
    const [sbef, setSbef] = useState(false);
    const navigate = useNavigate();
    function getBook() {


        getBooks('/books').then(res => {
            console.log(res)
            const myBook = res.data;
            setBook(myBook)

        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="book">
            <button className='button2' onClick={getBook}>show all books</button>
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
                                <td> <button className='bookupdate' onClick={() => { setSbef(true) }} >UPDATE </button></td>
                                <td>  <button className='bookdelete' onClick={() => { setSbdf(true) }}>DELETE </button></td>

                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='bookcreate' onClick={() => { setSbcf(true) }}>ADD NEW BOOK</button>


            <button className='authorcreate' onClick={() => { setSbcf(false); setSbef(false); setSbdf(false) }}>close</button>
            {sbcf && <BookCreateForm />}<br />
            {sbef && <BookEditForm />}<br />
            {sbdf && <BookDeleteForm />}<br />

        </div>
    )
}

export default Book