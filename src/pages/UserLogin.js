import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { userLogin } from '../api/user';
import SignUp from './SignUp';

function UserLogin({ authData }) {
  const [auth, setAuth] = useState(false)

  const [login, setLogin] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate();
  // useEffect(() => {
  //   authData(auth);
  // }, [auth])

  const onInputChange = (e) => {
    const { name, value } = e.target
    // console.log('name', name)
    // console.log('value', value)

    setLogin(prevInput => { return { ...login, [name]: value } })

  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const resp = await userLogin(login)
      if (resp.data.user) {
        console.log('heelo', resp.data)
        console.log('hyylo', resp.status)
        alert('hello you are logged in')


      }
      else { alert('invalid user details') }
    }
    catch (err) {
      console.log('error invalid user details')
    }
  }
  return (
    <>
      <div className='card' id='logincard'>
        <form onSubmit={submitHandler}>

          <input type='text' name='name' placeholder='enter the username' onChange={onInputChange} className='loginput' required /><br /><br />
          <input type='text' name='email' placeholder='enter the email address' onChange={onInputChange} className='loginput' required /><br /><br />
          <input type='password' name='password' placeholder='enter the password' onChange={onInputChange} className='loginput' required /><br /><br />

          <input type="submit" value='login' className='login' />
        </form>
      </div>


    </>
  )
}

export default UserLogin