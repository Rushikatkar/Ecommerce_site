import './App.css';
import './contact.css'
import './Login.css'
import Mainpage from './components/Mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Electronics from './components/Electronics';
import Clothing from './components/Clothing';
import Footware from './components/Footware';
import Furniture from './components/Furniture';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Mainpage/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Electronics' element={<Electronics/>} />
        <Route path='/Clothing' element={<Clothing/>} />
        <Route path='/Footware' element={<Footware/>} />
        <Route path='/Furniture' element={<Furniture/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    {/* <Navbar title="Textutils" About="About"/>
    <Landing/> */}
    </>
  );
}

export default App;
