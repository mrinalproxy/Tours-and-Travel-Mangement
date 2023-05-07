import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dekjf dhjd adsdf, xcojjnfjhs sdjbjsna ekmkej.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dekjf dhjd adsdf, xcojjnfjhs sdjbjsna ekmkej.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dekjf dhjd adsdf, xcojjnfjhs sdjbjsna ekmkej.",
    },

]
const ServiceList = () => {
  return (
    <>
    {servicesData.map((item,index) =>(
        <Col lang="3" key={index}>
            <ServiceCard item={item} />
        </Col>
        ))}
    </>
    
  )
}

export default ServiceList