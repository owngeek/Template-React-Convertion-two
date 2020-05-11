import React,{useState} from "react"
import  {Carousel} from "react-bootstrap"

function SliderComponent (){
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
        return(
            <div>
            <section id="hero">
    <div class="hero-container">

      
           <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="..\images\slide-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <div className="carousel-content container">
          <h2>First slide label</h2>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid.
             Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus 
              deleniti vel. Minus et tempore modi architecto.</p>
          <a href="#about" class="btn-get-started scrollto">Read More</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="..\images\slide-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-content container">
          <h2>First slide label</h2>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid.
             Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus 
              deleniti vel. Minus et tempore modi architecto.</p>
          <a href="#about" class="btn-get-started scrollto">Read More</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="..\images\slide-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="carousel-content container">
          <h2>First slide label</h2>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid.
             Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus 
              deleniti vel. Minus et tempore modi architecto.</p>
          <a href="#about" class="btn-get-started scrollto">Read More</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
         
    </Carousel>
    
    </div>   
     </section>
    


            </div>
        )
    
}
export default SliderComponent