import React from 'react'
import BbarComponent from './BbarComponent'



class FooterComponent extends React.Component{
    render(){
        return(
            <div>
               <footer id="footer" className="container-fluid">
      <div className="footer-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
              <img src="images/logo_ftr3.jpg" className="ftr_logo_lft"/>
              <p>
                Lorem Ipsum   <br></br>
                simply dummy<br></br><br></br>
                <strong>Phone:</strong> +1 4567 12345 55 <br></br>
                <strong>Email:</strong> contact@LoremIpsum.com123<br></br>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"> <i class="fab fa-twitter"></i>
               
                </a>
                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="google-plus"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
               
              </div>
            </div> 
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="icofont-thin-right "></i> <a href="#">Flights</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#"> Hotel</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">CarRental</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">More</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>  
            <div className="col-lg-3 col-md-6 footer-links">

            
              <h4>Our Services</h4>
              <ul>
                <li><i className="icofont-thin-right "></i> <a href="#">Lorem Ipsum</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">Lorem Ipsum</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">Lorem Ipsum</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">Lorem Ipsum</a></li>
                <li><i className="icofont-thin-right "></i> <a href="#">Lorem Ipsum</a></li>
              </ul>
            </div> 
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <form action="" method="post">
                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
              </form>  
            </div>  
          </div>
        </div>
      </div> 
      <BbarComponent/> 
      
    </footer>
            </div>
        )
    }
}
export default FooterComponent