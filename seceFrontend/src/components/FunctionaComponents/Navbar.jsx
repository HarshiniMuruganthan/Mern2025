
import "../../css/Nav.css";
import {Link} from "react-router-dom";
const Navbar=()=>{
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
                    <li><Link to='/'className="link">Home</Link></li>
                    <li><Link to='/about'className="link">About</Link></li>
                    <li><Link to='/gallery'className="link">Gallery</Link></li>
                    <li><Link to='/contact'className="link">Contact</Link></li>
                    
                    <li><Link to='/login' className="link">Login</Link></li>
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;