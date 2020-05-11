import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'

    function TestiComponent(props){
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
          setDirection(e.direction);
        };
      
        return(
            <div>
               
{props.children}

               <section className="container-fluid testimonials">
  <div className="container">
<div className="col-sm-4  img_wrpr">
  <img src="images/testimonals.jpg"/>
</div>
<div className="col-sm-8 wrpr_testi_cntnt">
  <div  className=" slide tab" >
    
  <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>




{/*---item_one_end--*/}
<Carousel.Item>
<h3>Happy with us</h3>
<div className="undeline_tseti"></div>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<h4>Vivek Madathil</h4>
<h5>Lorem Ipsum is simply dummy</h5>
</Carousel.Item>
{/*---item_one_end--*/}

{/*---item_one_end--*/}
<Carousel.Item>
<h3>Happy with us</h3>
<div className="undeline_tseti"></div>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<h4>Vivek Madathil</h4>
<h5>Lorem Ipsum is simply dummy</h5>
</Carousel.Item>
{/*---item_one_end--*/}

</Carousel>

</div>
</div>
  </div>
  </section>



            </div>
        )
    }

export default TestiComponent
