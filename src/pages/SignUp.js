import React, { useState } from 'react'
import { createUser } from '../api/user'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [register, setRegister] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate();
  const onInputChange = (e) => {
    const { name, value } = e.target
    setRegister(prevInput => { return { ...register, [name]: value } })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await createUser(register)
      if (resp.status == 200) {
        console.log(resp.status)
        alert('user created')
        console.log(register)
        navigate(-1)

      }
    }
    catch (err) {
      console.log('error')
    }
  }
  return (
    <>
      <div className='card' id='logincard'>
        <form onSubmit={onSubmit} className="form-horizontal">
          <div className="form-group">

            <input type="text" name='name' onChange={onInputChange} className='inputcontrol' placeholder='ENTER NAME' required /><br /><br />

            <input type="text" name='email' onChange={onInputChange} className='inputcontrol' placeholder='ENTER EMAIL' required /><br /><br />

            <input type="password" name='password' onChange={onInputChange} className='inputcontrol' placeholder='ENTER PASSWORD' required /><br /><br />

          </div>
          <input type='submit' className='formsubmit' value='SIGN UP' />

        </form></div>

    </>
  )
}

export default SignUp