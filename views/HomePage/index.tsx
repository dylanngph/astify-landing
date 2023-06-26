'use client';

import React from 'react'
import Hero from './sections/Hero';
import Analytics from './sections/Analytics';
import About from './sections/About';
import Backers from './sections/Backers';
import Newsletter from './sections/Newsletter';


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <About/>
        <Backers/>
        <Newsletter/>
    </div>
  )
}

export default HomePage