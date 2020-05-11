import React from "react"

class TopComponent extends React.Component{
    render(){
        return(
            <div>
              <section class="container-fluid topbar">
  <div class="container">
    <div class="wrpr_mail"> <i class="fas fa-envelope"></i> <a href="mailto:contact@LoremIpsum.com"><span>contact@LoremIpsum.com</span></a> </div>
    <div class="wrpr_mail wrpr_phn"> <i class="fas fa-phone-alt"></i> <a href="tel:1 4567 12345 55"><span>+1 4567 12345 55 </span></a> </div>
    <div class="fltR mob_mrgn">
      <div class="wrpr_mail wrpr_trps"> <i class="fas fa-suitcase-rolling"></i> <a href="#"><span>Trips</span></a> </div>
      <div class="wrpr_mail wrpr_trps"> <i class="far fa-user-circle"></i> <a href="#"><span>Sign In</span></a> </div>
      <div class="wrpr_mail wrpr_trps"> <i class="fas fa-bookmark"></i> <a href="#"><span>Book Now</span></a> </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}
export default TopComponent
