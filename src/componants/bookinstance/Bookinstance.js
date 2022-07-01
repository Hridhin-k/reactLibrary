import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Instancedeleteform from './Instancedeleteform';
import Instancecreateform from './Instancecreateform';
import Instanceeditform from './Instanceeditform';
function Bookinstance() {
    const [instance, setinstance] = useState([])
    const [sicf, setsicf] = useState(false);
    const [sidf, setsidf] = useState(false);
    const [sief, setsief] = useState(false);
    const navigate = useNavigate();
    function getbookinstance() {


        axios.get('https://restapimongoose.herokuapp.com/catalog/bookinstances').then(res => {
            console.log(res.data)
            const myinstance = res.data;
            setinstance(myinstance)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    function resetcard() {

        setinstance([])
    }
    return (
        <div className='bookinstance'>
            <button className='button3' onClick={getbookinstance}>show all bookinstance</button>
            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BOOK</th>
                        <th>IMPRINT</th>
                        <th>STATUS</th>
                        <th> DUE BACK</th>
                    </tr>
                </thead>
                <tbody>
                    {instance.map((item) => {
                        return (

                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.book}</td>
                                <td>{item.imprint}</td>

                                <td>{item.status}</td>

                                <td>{item.due_back}</td>
                                <td>  <button className='bookinstanceupdate' onClick={() => { setsief(true) }}>UPDATE</button></td>
                                <td>    <button className='bookinstancedelete' onClick={() => { setsidf(true) }}>DELETE</button></td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='bookinstancecreate' onClick={() => { setsicf(true) }}>ADD NEW BOOKINSTANCE</button>


            <button className='authorcreate' onClick={() => { setsicf(false); setsief(false); setsidf(false) }}>close</button>

            {sicf && <Instancecreateform />}<br />

            {sief && <Instanceeditform />}<br />
            {sidf && <Instancedeleteform />}<br />
        </div>
    )
}

export default Bookinstance