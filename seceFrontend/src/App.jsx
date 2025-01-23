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
import UseMemo from "./components/FunctionaComponents/UseMemo";
import UseCallback from "./components/FunctionaComponents/UseCallback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
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
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}
export default App;
