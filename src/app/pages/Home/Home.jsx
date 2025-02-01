import React from 'react';
import Herosection from '../../components/LandingPage/herosection/Herosection';
import Coursebrocher from '../../components/LandingPage/coursebrocher/Coursebrocher';
import Navbar from '../../components/Navbar/Navbar';
import OurExperience from '../../components/LandingPage/ourexperience/OurExperience';
import PlacementBenefits from '../../components/LandingPage/placementbenefits/Placement';
import CourseBenefits from '../../components/LandingPage/coursebenefits/Benefits';
import Trustlove from '../../components/LandingPage/trust&love/Trustlove'
import Learners from '../../components/LandingPage/learners/Learners'
import Benefits from '../../components/LandingPage/beyondlearning/Benefits';
import PlansAndPricing from '../../components/LandingPage/plans/Plans';
import RequestCall from '../../components/LandingPage/RequestCall/RequestCall';
import FAQ from '../../components/LandingPage/Faq/Faq';
import Footer from '../../components/LandingPage/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Coursebrocher />
      <PlacementBenefits />
      <div className='bg-black'>
      <CourseBenefits />
      <Benefits />
      <Trustlove />
      </div>
      <Learners />
      <OurExperience />
      <PlansAndPricing />
      <RequestCall />
      <FAQ/>
      <Footer/>
    </>
  )
}
