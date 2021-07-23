import React from 'react'
 import NavbarList from './NavbarList';
import Button from './Button';

class Navbar extends React.Component{
    render(){
        return(
        <div className="container">
            <nav className="header">
        
        <div className="logo">
            <i className="fa fa-foursquare" aria-hidden="true">
                <span>Innovate
                   <p className="logo-title">ventures</p>
                </span>
            </i>
             <NavbarList /> 
            </div>
           <Button />
            </nav>
        </div>
        );
    }
}
export default Navbar;
