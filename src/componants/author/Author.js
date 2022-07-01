import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Authorcreateform from './Authorcreateform'
import Authordeleteform from './Authordeleteform'
import Authoreditform from './Authoreditform'

function Author() {
    const [author, setauthor] = useState([])
    const [sacf, setsacf] = useState(false);
    const [sadf, setsadf] = useState(false);
    const [saef, setsaef] = useState(false);
    const navigate = useNavigate();
    function getauthor() {


        axios.get('https://restapimongoose.herokuapp.com/catalog/authors').then(res => {

            const myauthor = res.data;
            setauthor(myauthor)
        })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className='author'>
            <button className='button1' onClick={getauthor}>show authors</button>
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
                                <td>  <button className='authorbt' onClick={() => { setsaef(true) }} >UPDATE </button></td>
                                <td>  <button className='authorbt' onClick={() => { setsadf(true) }}>DELETE </button></td>
                            </tr>)
                    })}




                </tbody>
            </table><br />


            <button className='authorbt' onClick={() => { setsacf(true) }}>ADD NEW AUTHOR</button>




            <button className='authorbt' onClick={() => { setsacf(false); setsaef(false); setsadf(false) }}>close</button>




            {sacf && <Authorcreateform />}

            {saef && <Authoreditform />}
            {sadf && <Authordeleteform />}
        </div >

    )
}

export default Author
//{ setsacf(false); setsaef(false); setsadf(false) }