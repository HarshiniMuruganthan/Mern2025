import {useState} from 'react';
import "../../css/Nav.css";
import {Link} from "react-router-dom";
const Navbar=()=>{
    var[dropdown,showdropdown]=useState(false)
    const toggleDropdown=()=>{
    showdropdown((dropdown)=>!dropdown)
    };
    /*var styling={
        textDecoration:"none",
        color:"blue",
        listStyleType:"none",
        textAlign:"center",
    }*/
    return(
        <header>
         {  /* <nav>
                <ol style={styling}>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>contact</li>
                </ol>
            </nav>*/}
            <nav>
                <ol>
                <li><Link to='/signup'className="link">Signup</Link></li>
                <li><Link to='/login' className="link">Login</Link></li>
                    <li><Link to='/'className="link">Home</Link></li>
                    <li><Link to='/about'className="link">About</Link></li>
                    <li><Link to='/gallery'className="link">Gallery</Link></li>
                    <li><Link to='/contact'className="link">Contact</Link></li>
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>Hooks</span>
                        {/*<span onMouseEnter={()=>showDropdown(true) }onMouseLeave={()=>showDropdown(false)}>Hooks</span>*/}
                        {dropdown && (
                        <ul>
                            <li><Link to='usestate' classname='link'>useState</Link></li>
                           
                            <li><Link to='useeffect' classname='link'>useEffect</Link></li>
                            <li><Link to='useapi' classname='link'>useApi</Link></li>
                        </ul>
                        )}
                    </div>
                   
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;