import { useState } from 'react';
import "../../css/Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mdropdown, mshowDropdown] = useState(false);
    const [hdropdown, hshowDropdown] = useState(false);

    const togglemDropdown = () => {
        mshowDropdown((mdropdown) => !mdropdown);
    };
    const togglehDropdown = () => {
        hshowDropdown((hdropdown) => !hdropdown);
    };

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Signup</Link></li>
                    <li><Link to='/login' className="link">Login</Link></li>
                    <li><Link to='/reactlm' className="link">ReactLifeCycle</Link></li>

                    <li><Link to='/home' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <li><Link to='/class' className="link">ClassComp</Link></li>
                    
                    
                   
                    <div onMouseEnter={togglehDropdown} onMouseLeave={togglehDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span>Hooks</span>
                        {hdropdown && (
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
                                <li><Link to='/darktoggle' className='link'>DarkToggle</Link></li>
                             
                                <li><Link to='/usecallback' className='link'>useCallback</Link></li>
                                <li><Link to='/usecontext' className='link'>useContext</Link></li>
                                <li><Link to='/custom-hooks' className='link'>CustomHooks</Link></li>
                                <li><Link to='/localStorage' className='link'>LocalStorage</Link></li>
                                <li><Link to='/lazyloading' className='link'>LazyLoading</Link></li>
                            </ul>
                            
                        )}
                    </div>
                    <div onMouseEnter={togglemDropdown} onMouseLeave={togglemDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span>Memo</span>
                        {mdropdown && (
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
                                      
                                <li><Link to='/updatenumber' className='link'>updatenumber</Link></li>
                                <li><Link to='/updatetext' className='link'>updatetext</Link></li>
                                
                            </ul>
                            
                        )}
                    </div>
                </ol>
            </nav>
        </header>
    );
};

export default Navbar;
