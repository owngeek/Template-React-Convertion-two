import React,{useState} from "react"
import {Tabs, Tab} from 'react-bootstrap-tabs';
import  {Carousel} from "react-bootstrap"
function TabComponent(){
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
   
        return(
            <div>
    

    <section className="container-fluid Trending" >
<div className="container">
<span>What is Lorem Ipsum</span>
<div className="tab">

<Tabs onSelect={(index, label) => console.log(label + ' selected')}>
    <Tab label="Trending cities">
{/* item_one_start */}

<Carousel activeIndex={index} direction={direction} onSelect={handleSelect} >
      <Carousel.Item >

    <div className="row" style={{marginLeft:"0"}}>
<div className="pddng_itm col-sm-6 col-md-3">
      <div className="card  wrpr_trndn_itm">
        <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Denpasar</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</div>

</Carousel.Item>
<Carousel.Item>
{/* item_one_start */}
 <div className="row" style={{marginLeft:"0"}}>
<div className="pddng_itm col-sm-6 col-md-3">
      <div className="card  wrpr_trndn_itm">
        <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Denpasar</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>

<div className="pddng_itm col-sm-6 col-md-3">
  <div className="card  wrpr_trndn_itm">
    <img src="images/pic1_tourism.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Denpasar</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</div>
</Carousel.Item>
</Carousel>















    </Tab>
    <Tab label="Trending countries">Tab 2 content</Tab>
    <Tab label="Trending countries">Tab 2 content</Tab>
</Tabs>



</div>
</div>
</section>







    

            </div>
        )
    }

 
export default TabComponent