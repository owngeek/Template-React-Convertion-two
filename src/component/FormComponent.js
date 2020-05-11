import React from "react"
import {NavDropdown} from "react-bootstrap"
import Icofont from 'react-icofont';

class FormComponent extends React.Component{
    render(){
        return(
            <div>
            
      <section className="container-fluid banner">
    
  <div className=" bg_banner">    
    <div className="container bnr_cntnr">
    {this.props.children} 
      <div className="col-sm-12  wrpr_input_tab">
        <div className="tab_more">
          <div className="dropdown tab_drop">
            
          <NavDropdown title="Return" id="basic-nav-dropdown">

          <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="nrw_brdr"></div>
          <div className="dropdown tab_drop">
          <NavDropdown title="Return" id="basic-nav-dropdown">

<NavDropdown.Item href="#">Action</NavDropdown.Item>
<NavDropdown.Item href="#">Another action</NavDropdown.Item>
<NavDropdown.Item href="#">Something</NavDropdown.Item>
  </NavDropdown>
          </div>
          <div className="nrw_brdr"></div>
          <div className="dropdown tab_drop">
          <NavDropdown title="Return" id="basic-nav-dropdown">

<NavDropdown.Item href="#">Action</NavDropdown.Item>
<NavDropdown.Item href="#">Another action</NavDropdown.Item>
<NavDropdown.Item href="#">Something</NavDropdown.Item>
  </NavDropdown>
          </div>
        </div>
        <div className="wrpr_trvlbx">
          <div className="box_trvl"> <i className="icofont-airplane-alt"></i>
            <input type="text" placeholder="From?"/>
          </div>
          <div className="arrw_box"> <i className="fas fa-arrows-alt-h"></i> </div>
          <div className="box_trvl"> <i className="icofont-airplane-alt icofont-flip-vertical" style={{marginTop:-1}}></i>
            <input type="text" placeholder="To?"/>
          </div>
          <div className="box_trvl trvlmrgn">
            <div> <i className="far fa-calendar-alt"></i>
              <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" placeholder="21/03/2020" id="datepicker" data-type="datepicker" data-guid="254d94a2-5707-6216-fc2b-e8c3b397106d" data-datepicker="true" className="form-control" role="input"/><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
              <i className="icofont-thin-right btn_arrw_trvl"></i> <i className="icofont-thin-left btn_arrw_trvl2"></i>
              <div className="nrw_arrw2"></div>
            </div>
            <div className="wrpr_input_date"> <i className="far fa-calendar-alt"></i>
              <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" placeholder="21/03/2020" id="datepicker2" data-type="datepicker" data-guid="1ab520a8-5634-8a10-4d17-87f65cff1015" data-datepicker="true" className="form-control" role="input"/><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
              <i className="icofont-thin-right btn_arrw_trvl"></i> <i className="icofont-thin-left btn_arrw_trvl2"></i> </div>
          </div>
          <button type="button" className=" btn_srch"> Search <i className="icofont-search icofont-flip-horizontal"></i> </button>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}

export default FormComponent