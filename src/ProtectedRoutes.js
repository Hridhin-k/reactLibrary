import { Navigate } from 'react-router-dom';

const Protectedroute = ({ login, children }) => {
  console.log('this is to check protected route', login)
  if (!login) {
    return (

      <Navigate to="/" replace />)
    // alert('log in first ')}

  }
  return (children)
}

export default Protectedroute 