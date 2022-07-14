
import './App.css';
import Author from './componants/author/Author'
import Book from './componants/book/Book'
import BookInstance from './componants/bookInstance/BookInstance'
import Genre from './componants/genre/Genre'
import Homepage from './pages/HomePage';
import Userlogin from './pages/UserLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Protectedroute from './ProtectedRoutes';
import { useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';

function Root() {
  const navigate = useNavigate();
  const tToken = window.localStorage.getItem('token');
  console.log(tToken)
  return (


    <>


      <div>

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
            <button className='logout' onClick={() => { navigate('/'); window.localStorage.removeItem('token') }}>logout</button>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/Author" element={<Protectedroute login={tToken}><Author /></Protectedroute>} />
            <Route path="/Book" element={<Protectedroute login={tToken}><Book /></Protectedroute>} />
            <Route path="/BookInstance" element={<Protectedroute login={tToken}><BookInstance /></Protectedroute>} />
            <Route path="/Genre" element={<Protectedroute login={tToken}><Genre /></Protectedroute>} />
            <Route path='/UserLogin' element={<Userlogin />} />

            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>



      </div>
    </>

  )

}
function App() {

  // const tToken = window.localStorage.getItem('token');
  // console.log(tToken)
  // return (

  //   <>
  //     <button className='logout' onClick={() => { navigate(-1); window.localStorage.removeItem('token') }}>logout</button>

  //     <div>
  //       <BrowserRouter>
  //         <div className='topbox' > <h4>BITITUDE TECH</h4></div>
  //         <div>
  //           <nav className='appnav'>
  //             <h1 className='heading'>THE LIBRARY</h1>
  //             <Link className='link0' to="/"><h2>HOME</h2></Link>

  //             <Link className='link1' to="/Author">  Authors</Link>
  //             <Link className='link2' to="/Book"> Books</Link>
  //             <Link className='link3' to="/BookInstance"> BookInstance</Link>
  //             <Link className='link4' to="/Genre"> Genre</Link>

  //             <Link className='link5' to="/UserLogin">User Login</Link>
  //             <Link className='link6' to="/SignUp">Sign Up</Link>
  //           </nav>
  //           <Routes>
  //             <Route path="/" element={<Homepage />} />

  //             <Route path="/Author" element={<Protectedroute login={tToken}><Author /></Protectedroute>} />
  //             <Route path="/Book" element={<Protectedroute login={tToken}><Book /></Protectedroute>} />
  //             <Route path="/BookInstance" element={<Protectedroute login={tToken}><BookInstance /></Protectedroute>} />
  //             <Route path="/Genre" element={<Protectedroute login={tToken}><Genre /></Protectedroute>} />
  //             <Route path='/UserLogin' element={<Userlogin />} />

  //             <Route path="/SignUp" element={<SignUp />} />
  //           </Routes>
  //         </div>
  //       </BrowserRouter>


  //     </div>
  //   </>

  // );

  return (
    <BrowserRouter><Root />
    </BrowserRouter>
  )
}

export default App;
