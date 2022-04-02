import React from 'react'
import Herosection from '../components/Herosection';
import ImprooveskillsSection from '../components/ImprooveskillsSection';
import QuatesSection from '../components/QuatesSection';
import TopChef from '../components/TopChef';

export default function Home() {
  return (
    <div>
      <Herosection />
      <ImprooveskillsSection />
      <QuatesSection />
      <TopChef />
    </div>
  );
}
