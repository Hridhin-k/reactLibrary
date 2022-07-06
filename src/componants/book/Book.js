import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import BookCreateForm from './BookCreateForm';
import BookDeleteForm from './BookDeleteForm';
import BookEditForm from './BookEditForm';
import { getBooks } from '../../api/book';

function Book() {
    const [book, setBook] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteform, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [id, setId] = useState('')
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
                    {console.log(book)}
                    {book.map((item) => {
                        return (

                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>

                                <td>{item.summary}</td>
                                <td>{item.isbn}</td>
                                <td>{item.genre}</td>
                                <td> <button className='bookupdate' onClick={() => { setShowUpdateForm(true) }} >UPDATE </button></td>
                                <td>  <button className='bookdelete' onClick={() => { setShowDeleteForm(true); setId(item._id) }}>DELETE </button></td>

                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='bookcreate' onClick={() => { setShowCreateForm(true) }}>ADD NEW BOOK</button>


            <button className='authorcreate' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button>
            {showCreateForm && <BookCreateForm />}<br />
            {showUpdateForm && <BookEditForm />}<br />
            {showDeleteform && <BookDeleteForm id={id} />}<br />

        </div>
    )
}

export default Book