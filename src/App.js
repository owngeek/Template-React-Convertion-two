import React from 'react';


import "bootstrap/dist/css/bootstrap.min.css"
import {} from"react-bootstrap"
import './App.css'
import "../src/css/mainStyle.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import TopComponent from"./component/TopComponent"
import MenuBarComponent from "./component/MenuBarComponent"
import SliderComponent from "./component/SliderComponent"
import FormComponent from "./component/FormComponent"
import AboutComponent from "./component/AboutComponent"
import TabComponent from "./component/TabComponent"
import ServicesComponent from "./component/ServicesComponent"
import TestiComponent from "./component/TestiComponent"
import ParalaxComponent from "./component/ParalaxComponent"
import FooterComponent from "./component/FooterComponent"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




class App extends React.Component{
render(){


 


  return (
    <Router>
    <div>
      
    
<TopComponent/>
<MenuBarComponent/>
<SliderComponent/>

<Switch>

          <Route path="/" exact>
            <FormComponent/>
            
<AboutComponent/>
<TabComponent/>
<ServicesComponent/>
<TestiComponent/>
<ParalaxComponent/>
          </Route>

          <Route path="/flight">
          <FormComponent><h3>Flight</h3></FormComponent>
          <AboutComponent/>
<TabComponent/>
<ServicesComponent/>
<TestiComponent/>
<ParalaxComponent/>
          </Route>   
          <Route path="/hotel">
          <AboutComponent><h3>Hotel</h3></AboutComponent>
          </Route>

          <Route path="/carrental">
          <ServicesComponent><h3>CarRental</h3></ServicesComponent>
          </Route>
          <Route path="/more">
          <TestiComponent><h3>MoreLink</h3></TestiComponent>
<ParalaxComponent/>
          </Route>
        </Switch>


<FooterComponent/>

    </div>
    </Router>
  )
}
}

export default App;
