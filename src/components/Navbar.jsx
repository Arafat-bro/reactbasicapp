import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Navbar = () => {
    return (
        <>
            {/* <NavLink exact to="/" component={ Home} />
            <NavLink exact to="/contact" component={ Contact} />
            <NavLink exact to="/about" component={ About} />
            <NavLink exact to="/service" component={ Services} /> */}
            <div className="container-fluid nav_bg mb-5">
                <div className='row'>
                    <div className='col-10 mx-auto'>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active"  className="nav-link" to="about">About us</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Navbar;