
import './App.css'
import Home from './components/FunctionaComponents/Home';
import About from './components/FunctionaComponents/About';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Gallery from './components/FunctionaComponents/Gallery';
import Contact from './components/FunctionaComponents/Contact';
function App() {
 

  return (
    <>
    <div>
       <Home/>
       <About/>
      <ClassCompEG/>
      <Gallery image="SECE Logo" page="Gallery"/>
      <Gallery page="Gallery" img="SECE Logo"></Gallery>
      <Contact/>
    </div>
    </>
  )
}

export default App
