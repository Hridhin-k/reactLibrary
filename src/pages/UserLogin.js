import React, { useState, useEffect } from 'react'

function UserLogin({ authData }) {
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

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
      setAuth(true)

      console.log('success')
    }
    else {

      alert('wrong username or password')
    }
    setName('');
    setPassword('');
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='enter the username' onChange={onInputName} required /><br /><br />
          <input type='password' placeholder='enter the password' onChange={onInputPassword} required /><br /><br />
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default UserLogin