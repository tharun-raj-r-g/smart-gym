import React from 'react'
import Home from '../home'
import Benefits from '../benefits'
import OurClasses from '../ourClasses'
import ContactUs from '../contactUs'

const Homepage = ({setSelectedPage}:{setSelectedPage:any}) => {
  return (
    <>
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
  </>
  )
}

export default Homepage