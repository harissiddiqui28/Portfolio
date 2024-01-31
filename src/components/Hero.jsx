import React from "react";
import hero from '../assets/images/human.png'
import { TypeAnimation } from 'react-type-animation';


function Hero(params) {
  
    return(

      <>
      <div className="p-8">
     
  
    <div class=" bg text-center">
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi I am Haris Siddiqui',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hi I am Haris Siddiqui',
        1000,
        'Hi I am Haris Siddiqui',
        1000,
        'Hi I am Haris Siddiqui',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '4em', fontWeight:'bold', color:'white'}}
      repeat={Infinity}
    />


      {/* <p class="mt-4  text-lg em">  A passionate Front-End React Developer.</p> */}
    </div>

   
 
      </div>







      </>
    )
    
}
export default Hero;