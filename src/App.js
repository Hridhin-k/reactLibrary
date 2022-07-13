
import './App.css';
import Author from './componants/author/Author'
import Book from './componants/book/Book'
import BookInstance from './componants/bookInstance/BookInstance'
import Genre from './componants/genre/Genre'
import Homepage from './pages/HomePage';
import Userlogin from './pages/UserLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Protectedroute from './ProtectedRoutes';
import { useState } from 'react';
import SignUp from './pages/SignUp';

function App() {
  const [key, setKey] = useState(false)
  function authData(data) {
    console.log("FROM APP : AUTH DATA , ", data)
    setKey(data)
  }

  return (

    <>
      <div>
        <BrowserRouter>
          <div className='topbox' > <h4>BITITUDE TECH</h4></div>
          <div>
            <nav className='appnav'>
              <h1 className='heading'>THE LIBRARY</h1>
              <Link className='link0' to="/"><h2>HOME</h2></Link>

              <Link className='link1' to="/Author">  Authors</Link>
              <Link className='link2' to="/Book"> Books</Link>
              <Link className='link3' to="/BookInstance"> BookInstance</Link>
              <Link className='link4' to="/Genre"> Genre</Link>

              <Link className='link5' to="/UserLogin">User Login</Link>
              <Link className='link6' to="/SignUp">Sign Up</Link>
              <button className='logout' onClick={() => { setKey(false); <Route path="/" element={<Homepage />} /> }}       >logout</button>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/Author" element={<Protectedroute login={key}><Author /></Protectedroute>} />
              <Route path="/Book" element={<Protectedroute login={key}><Book /></Protectedroute>} />
              <Route path="/BookInstance" element={<Protectedroute login={key}><BookInstance /></Protectedroute>} />
              <Route path="/Genre" element={<Protectedroute login={key}><Genre /></Protectedroute>} />
              <Route path='/UserLogin' element={<Userlogin authData={authData} />} />

              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>


      </div>
    </>

  );
}

export default App;
