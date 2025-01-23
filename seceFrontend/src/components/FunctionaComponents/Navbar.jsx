import { useState } from 'react';
import "../../css/Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, showDropdown] = useState(false);

    const toggleDropdown = () => {
        showDropdown((dropdown) => !dropdown);
    };

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/signup' className="link">Signup</Link></li>
                    <li><Link to='/login' className="link">Login</Link></li>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    
                   
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span>Hooks</span>
                        {dropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                backgroundColor: 'beige',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                <li><Link to='/usestate' className='link'>useState</Link></li>
                                <li><Link to='/useeffect' className='link'>useEffect</Link></li>
                                <li><Link to='/useapi' className='link'>useApi</Link></li>
                                <li><Link to='/useref' className='link'>useRef</Link></li>
                                <li><Link to='/usered' className='link'>useReducer</Link></li>
                                <li><Link to='/usememo' className='link'>useMemo</Link></li>
                                <li><Link to='/usecallback' className='link'>useCallback</Link></li>
                            </ul>
                        )}
                    </div>
                </ol>
            </nav>
        </header>
    );
};

export default Navbar;
