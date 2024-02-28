import React from 'react'
import './Style/Footer.css'
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {

  return (
    <div>
            <p className='para'>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 

            </p>
             <div className="horizontal-line"></div>

             <p className='para'>
            <b>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS

            </b>
             </p>
             
                <span>
                CHEMICALS & PROCESS | POWER | WATER & WASTE WATER |  OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD  & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE | FIGHTING |AGRICULTURE & RESIDENTIAL
                </span>

                <div className='footer'>
                  <div className="toll">
                <IoIosCall /> Toll Free 1800 200 1234

                  </div>
                  <div className="facebook">

                <FaFacebook /> www.facebook.com/cripumps
                  </div>
                  <div className="globe">

                <CiGlobe /> www.crigroups.com
                  </div>
                </div>
    </div>
  )
}

export default Footer
