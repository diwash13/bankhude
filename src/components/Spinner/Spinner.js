import React from 'react';

import './Spinner.scss';

export default () => (
  <div className="spinner lds-ring">
    <div className='spinner-div'/>
    <div className='spinner-div'/>
    <div className='spinner-div'/>
    <div className='spinner-div'/>
  </div>
);