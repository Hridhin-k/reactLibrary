import React, { useState, useEffect } from 'react'

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
    const [type, setType] = useState('')
    const [acknowledgement, setAcknowledgement] = useState(null)
    const navigate = useNavigate();
    const pull_data = (data) => {
        setAcknowledgement(data)
    }
    console.log('bookeditackn', acknowledgement,);
    useEffect(() => {
        if (localStorage.getItem('type'))
            setType(localStorage.getItem('type'));

        else {
            setType('user');
        }
        getBook()
    }, [acknowledgement]);

    function getBook() {


        getBooks('/books').then(res => {

            if (res.status == 200) {
                console.log(res.status)
                const { book } = res.data;//destructured
                setBook(book)
            }

        })
            .catch((error) => {
                console.log(error)
            })

    }



    return (
        <div className="book">

            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>

            <table className="table table-striped">
                <thead>
                    <tr>

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
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.summary}</td>
                                <td>{item.isbn}</td>
                                <td>{item.genre}</td>
                                <td>{type === 'admin' ? <button className='authorbt' onClick={() => { setShowUpdateForm(true); setId(item._id) }} >UPDATE </button> : ''}</td>
                                <td>{type === 'admin' ? <button className='authorbt' onClick={() => { setShowDeleteForm(true); setId(item._id) }}>DELETE </button> : ''}</td>

                            </tr>)
                    })}




                </tbody>
            </table><br />
            {type === 'admin' ? <button className='authorbt' onClick={() => { setShowCreateForm(true) }}>ADD BOOK</button> : ''}


            {type === 'admin' ? <button className='formback' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button> : ''}
            {showCreateForm && <BookCreateForm func={pull_data} />}<br />
            {showUpdateForm && <BookEditForm id={id} func={pull_data} />}<br />
            {showDeleteform && <BookDeleteForm id={id} func={pull_data} />}<br />

        </div>
    )
}

export default Book