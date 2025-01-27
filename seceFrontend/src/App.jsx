import "./App.css";
import Home from "./components/FunctionaComponents/Home";
import About from "./components/FunctionaComponents/About";
import Signup from "./components/FunctionaComponents/Signup";
import Gallery from "./components/FunctionaComponents/Gallery";
import Contact from "./components/FunctionaComponents/Contact";
import Navbar from "./components/FunctionaComponents/Navbar";
import Login from "./components/FunctionaComponents/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./components/FunctionaComponents/Hooks/UseState";
import UseEffect from "./components/FunctionaComponents/Hooks/UseEffect";
import UseEffectapi from "./components/FunctionaComponents/Hooks/UseEffectAPI";
import UseRefExample from "./components/FunctionaComponents/Hooks/UseRef";
import UseReducer from "./components/FunctionaComponents/Hooks/UseReducer";
import UseMemo from "./components/FunctionaComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionaComponents/Hooks/UseCallback";
import ReactLifecycleMethods from "./components/classComponents/ReactLifecycleMethods";
import UseContext from "./components/FunctionaComponents/Hooks/UseContext";
import Memo from "./components/FunctionaComponents/Memoization/Memo";
import ClassCompEG from "./components/classComponents/ClassCompEG";
//import HoC from "./components/FunctionaComponents/HOC/HoC";
import SampleCustomHooks from "./components/FunctionaComponents/Hooks/CustomHooks/SampleCustomHooks";
import UseLocalStorage from "./components/FunctionaComponents/Hooks/CustomHooks/SampleCustomHooks";
import LazyLoadingWithSuspense from "./components/FunctionaComponents/Memoization/LazyLoadingWithSuspense";
import DarkToggle from "./components/FunctionaComponents/Hooks/CustomHooks/DarkToggle";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/gallery"
            element={<Gallery page="Gallery" img="SECE Logo" />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/useeffect" element={<UseEffect />}></Route>
          <Route path="/useapi" element={<UseEffectapi />}></Route>
          <Route path="/useref" element={<UseRefExample />}></Route>
          <Route path="/usered" element={<UseReducer />}></Route>
          <Route path="/usememo" element={<UseMemo />}></Route>
          <Route path="/useCallback" element={<UseCallback />}></Route>
          <Route path="/usecontext" element={<UseContext/>}></Route>
          <Route path="/memo" element={<Memo/>}></Route>
          <Route path="/lazyloading" element={<LazyLoadingWithSuspense/>}></Route>

          
          <Route path="/custom-hooks" element={<SampleCustomHooks/>}></Route>
          <Route path="/localStorage" element={<UseLocalStorage/>}></Route>
          <Route path="/darktoggle" element={<DarkToggle/>}></Route>
           

          <Route path="/reactlm" element={<ReactLifecycleMethods/>}></Route>
          <Route path="/class" element={<ClassCompEG/>}></Route>
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
