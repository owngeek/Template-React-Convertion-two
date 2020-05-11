import React from "react"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"

import {
  Link
} from "react-router-dom";






class MenuBarComponent extends React.Component{
    render(){
        return(
            
  
    <div>
<section className="container-fluid header">
  <div className="mob_bdr"></div>
  <div className="container prght"><Link to="/"> <img src="images/logo3.jpg"/></Link>
    <div className="fltR">
     
      <Navbar bg="light" expand="lg" classNameName="navbar navbar-expand-lg navbar-light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
      <Nav classNameName="mr-auto">
     
   
            <Nav.Link className="nav-item active"> <Link to="/flight" classNameName="nav-link" ><i className="fas fa-plane actve_menu"></i> <span className="actve_menu">Flights</span> <span className="sr-only">(current)</span></Link> </Nav.Link>
            <Nav.Link className="nav-item"> <Link className="nav-link" to="/hotel"><i className="fas fa-hotel"></i> <span>Hotel</span></Link> </Nav.Link>
            <Nav.Link className="nav-item"> <Link className="nav-link" to="/carrental"><i className="fas fa-car"></i> <span>CarRental</span></Link> </Nav.Link>
            
            <NavDropdown title="More" id="basic-nav-dropdown" className="nav-item dropdown">
        <NavDropdown.Item><Link to="/more">Drop Down1</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/more">Drop Down1</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/more">Drop Down1</Link></NavDropdown.Item>
        </NavDropdown>
           
            
             
              
           
        
     
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
</section>



</div>

            
        )
    }
}







export default MenuBarComponent


