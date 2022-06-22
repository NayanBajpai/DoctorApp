import React from 'react';
import  {Link, NavLink, useRouter} from "react-router-dom";
const Navbar = () =>{
  //const router = useRouter();
 // const navigate = () =>{

  //}

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
        <a className="navbar-brand" href="/">Your Own Doctor APP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link active " aria-current="page" to="/">Home </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link"  aria-current="page" to='/about'>About </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link"  aria-current="page" to="/contact">Contact </NavLink>
            </li>
            
            
           
          </ul>
          
        </div>
        <Link className='btn btn-outline-light w-25 m-2' to = "/dsignup">Hire a New Doctor</Link>
       
        </div>
      </nav>
      
    );
}

export default Navbar;