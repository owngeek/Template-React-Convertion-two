import React from "react"

class AboutComponent extends React.Component{
    render(){
        return(
            <div>
              

              <section className="container-fluid about">
  <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-6">
      {this.props.children}
    <span className="main_title">Long established   <br></br> fact that will be distracted?</span>
    <div className="col-sm-12 pzero">
    <div className="bordr_smnts"></div>
    <span className="sml_txt">Long established fact  </span>
    </div>
    <div className="box_smntcs">Long established  <br></br>fact that a reader,<br></br>will be <br></br> distracted.</div>    
    </div>
    <div className="col-sm-12 col-md-6" style={{display:"flex", alignItems:"center"}}>
    <div className=" pzero mlft">
    <div className="box_realvlue">
    <span>long established fact that a reader </span>
    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
    </div>
    </div>
    </div>
    </div>    
    </div>
  </section>






            </div>
        )
    }
}
export default AboutComponent