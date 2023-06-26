'use client';

import React from 'react'
import Hero from './sections/Hero';
import Analytics from './sections/Analytics';
import About from './sections/About';


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <About/>
    </div>
  )
}

export default HomePage