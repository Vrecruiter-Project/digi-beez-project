import React from 'react';
import Herosection from '../../components/herosection/Herosection';
import Coursebrocher from '../../components/CourseBrocher/Coursebrocher';
import Navbar from '../../components/Navbar/Navbar';
import PlacementBenefits from '../../components/PlacementBenefits/Placement';
import CourseBenefits from '../../components/CourseBenefits/Benefits';
import Trustlove from '../../components/Trust&Love/Trustlove'
import Learners from '../../components/Learners/Learners'
import Benefits from '../../components/beyondlearning/Benefits';
import PlansAndPricing from '../../components/Plans/Plans';
import OurExperience from '../../components/OurExperience/OurExperience';
export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Coursebrocher />
      <PlacementBenefits />
      <CourseBenefits />
      <Benefits />
      <Trustlove />
      <Learners />
      <OurExperience/>
      <PlansAndPricing />



    </>
  )
}
