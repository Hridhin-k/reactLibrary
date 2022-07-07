import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function UserLogin({ authData }) {
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    authData(auth);
  }, [auth])

  const onInputName = (e) => {
    setName(e.target.value)



  }
  const onInputPassword = (e) => {
    setPassword(e.target.value)
  }


  const submitHandler = (e) => {
    e.preventDefault()
    if (name === 'User' && password === 'Password') {
      setAuth(true);

      console.log('success');

    }
    else {

      alert('wrong username or password')
    }
    setName('');
    setPassword('');
  }

  return (
    <>
      <div className='card' id='logincard'>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='enter the username' onChange={onInputName} className='loginput' required /><br /><br />
          <input type='password' placeholder='enter the password' onChange={onInputPassword} className='loginput' required /><br /><br />
          <input type="submit" value='login' className='login' />
        </form>
      </div>
    </>
  )
}

export default UserLogin