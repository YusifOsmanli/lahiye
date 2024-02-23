import React from 'react'
import Header from '../../../Layout/site/Header'
import Footer from '../../../Layout/site/Footer'
import { Outlet  } from "react-router-dom";
import Header2 from '../../../Layout/site/Header2';

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Header2/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot