import React from 'react';
import Hero from './ui/home/Hero';
import Features from './ui/home/Features';
import OpeningHours from './ui/home/OpeningHours';
import MeetChefs from './ui/home/MeetChefs';
import MostOrdered from './ui/home/MostOrdered';

function Home() {
  return (
    <div className='mx-auto'>
      <Hero />
      <Features />
      <OpeningHours />
      <MostOrdered/>
      <MeetChefs/>
    </div>
  );
}

export default Home;
