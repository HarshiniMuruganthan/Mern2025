
import './App.css'
import Home from './components/FunctionaComponents/Home';
import About from './components/FunctionaComponents/About';
import Signup from './components/FunctionaComponents/Signup';
import Gallery from './components/FunctionaComponents/Gallery';
import Contact from './components/FunctionaComponents/Contact';
import Navbar from './components/FunctionaComponents/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
 

  return (
    <>
 
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/gallery' element={<Gallery page="Gallery" img="SECE Logo"/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    
    </Routes> </BrowserRouter>

    </>
  )
}export default App
