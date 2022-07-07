import { Navigate } from 'react-router-dom';
import { Route, } from 'react-router-dom'

const Protectedroute = ({ login, children }) => {

  if (login == false) {
    return (
      <Navigate to="/" replace />)
    //alert('log in first ')

  }
  return (children)
}

export default Protectedroute 