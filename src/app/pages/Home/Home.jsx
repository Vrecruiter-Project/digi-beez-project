import React from 'react';
import Herosection from '../../components/LandingPage/herosection/Herosection';
import Coursebrocher from '../../components/LandingPage/coursebrocher/Coursebrocher';
import Navbar from '../../components/Navbar/Navbar';
import PlacementBenefits from '../../components/PlacementBenefits/Placement';
import CourseBenefits from '../../components/CourseBenefits/Benefits';
import Trustlove from '../../components/Trust&Love/Trustlove'
import Learners from '../../components/Learners/Learners'
import Benefits from '../../components/beyondlearning/Benefits';
import PlansAndPricing from '../../components/Plans/Plans';
import OurExperience from '../../components/OurExperience/OurExperience';
import PlacementBenefits from '../../components/LandingPage/placementbenefits/Placement';
import CourseBenefits from '../../components/LandingPage/coursebenefits/Benefits';
import Trustlove from '../../components/LandingPage/trust&love/Trustlove'
import Learners from '../../components/LandingPage/learners/Learners'
import Benefits from '../../components/LandingPage/beyondlearning/Benefits';
import PlansAndPricing from '../../components/LandingPage/plans/Plans';
import RequestCall from '../../components/LandingPage/RequestCall/RequestCall';
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

      <RequestCall/>



    </>
  )
}
