import React from 'react'
import './Home.css'
import ImgSwiper from '../ImgSwiper'
import Section1 from '../Sections/Section1'
import Cards from '../../../Components/Cards'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Entertainer</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
        </div>
        <ImgSwiper/>
        <Section1/>
        <Cards/>
    </div>
  )
}

export default Home