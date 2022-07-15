import { Navigate } from 'react-router-dom';

const Protectedroute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (

      <Navigate to="/" replace />)
    // alert('log in first ')}

  }
  return (children)
}

export default Protectedroute 