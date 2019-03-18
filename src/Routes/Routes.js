import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Private from '../components/Private/Private';
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Contact  from '../components/Contact/Contact';
import DetailReview from '../components/Review/DetailReview';
import ReviewPage from '../components/Review/ReviewPage';
import Detail from '../components/Detail/Detail'
import Cart from '../components/Cart/Cart';

export default (
  <Switch>
    <Route path='/private' component={Private}/>
    <Route exact path='/' component={Private}/>
    <Route path='/services' component={Services}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/reviews' component={ReviewPage}></Route>
    <Route path='/review/:id' component={DetailReview}></Route>
    <Route path='/detail/:id' component={Detail}></Route>
    <Route path='/cart' component={Cart}></Route>
    <Route path='*' component={Dashboard}></Route>
    
  </Switch>
)