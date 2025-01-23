import React from 'react';
import Herosection from '../../components/herosection/Herosection'
import Coursebrocher from '../../components/CourseBrocher/Coursebrocher'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
        <Herosection/>
     <Navbar/>
        <Coursebrocher/>
    </>
  )
}
