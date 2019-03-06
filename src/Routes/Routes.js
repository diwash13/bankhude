import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
// import Home from '../components/Home/Home';
import Private from '../components/Private/Private';
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Contact  from '../components/Contact/Contact';
import Review from '../components/Review/Review'
import DetailReview from '../components/Review/DetailReview';
export default (
  <Switch>
    <Route path='/private' component={Private}/>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/services' component={Services}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/review' component={Review}></Route>
    <Route path='/review/:id' component={DetailReview}></Route>
    
  </Switch>
)