/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Home = ({ history }) => (
  <div>
    <div className='ui inverted vertical masthead center aligned segment'>
      <div className='ui text container'>
        <h1 className='ui inverted stackable header'>
          <img
            className='ui image massive'
            src='/assets/images/logo.png'
            alt='logo'
          />
          <div className='content'>Revents</div>
        </h1>
        <h2>Do whatever you want to do</h2>
        <div onClick={ () => history.push('/events') } className='ui huge white inverted button'>
          Get Started
          <i className='right arrow icon' />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
