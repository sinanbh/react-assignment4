import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Students from './components/students';


function App() {
  return (
    <div className="App">
      <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/students'>Students</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
