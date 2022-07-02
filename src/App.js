
import './App.css';
import Author from './componants/author/Author'
import Book from './componants/book/Book'
import BookInstance from './componants/bookinstance/BookInstance'
import Genre from './componants/genre/Genre'
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
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
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Author" element={<Author />} />
              <Route path="/Book" element={<Book />} />
              <Route path="/BookInstance" element={<BookInstance />} />
              <Route path="/Genre" element={<Genre />} />
            </Routes>
          </div>
        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
