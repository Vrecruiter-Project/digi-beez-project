import React from 'react';
import Herosection from '../../components/herosection/Herosection';
import Coursebrocher from '../../components/CourseBrocher/Coursebrocher';
import Navbar from '../../components/Navbar/Navbar';
import PlacementBenefits from '../../components/PlacementBenefits/Placement';
import CourseBenefits from '../../components/CourseBenefits/Benefits';
import TestimonialsSection from '../../components/Trust&Love/Trustlove';
export default function Home() {
  return (
    <>
    <Navbar/>
        <Herosection/>
        <Coursebrocher/>
        <PlacementBenefits/>
        <CourseBenefits/>
        <TestimonialsSection/>


    </>
  )
}
