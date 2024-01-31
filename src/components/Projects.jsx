import React from "react";
import cosmo from '../assets/images/Dribbble.png'
import code from '../assets/images/download (1).png'
import live from '../assets/images/live.png'
import ecom from '../assets/images/Headline.png'
import agency from '../assets/images/Landing 3.png'
import Dash from '../assets/images/Cover.png'
import { FaGithub } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import wise from '../assets/images/mark.jpg'
function    Projects (params) {
    return(

        <>
        <div className="flex justify-center text-center items-center flex-col mb-4">
<h1 class="text-4xl  font-extrabold em ">Portfolio</h1>
<h1 class="text-lg text-white font-bold ">Each project is a unique piece of development</h1>

</div>
        <div className="print  flex-col flex items-center">


{/* first project */}
<div class="  flex justify-center transition duration-300 ease-in-out hover:border-blue-300  m-4 justify-center cosmoc mt-16 mb-8 p-4 bg-opacity-70 border-2  border-gray-600 rounded ">

<div class="flex gap-6 flex-col md:flex-row ">
  
  <div class="flex  justify-center">
  <img src ={wise} alt="Your Image" class="w-72 h-64 object-cover rounded"/>
  </div>


  <div className=" items-center mt-2 text-center">

    <h1 class="text-lg text-white font-bold mt-2"> Wise Mart  </h1>
    <p class="mt-4 text-gray-200 text-sm">
    Living in Pakistan, you might have come faced with an issue 
   <br /> with buying reliable and affordable devices. However, that's 
    <br />all changed with Wise MarketPakistan because we make sure
    <br /> that you get the device you're looking for at an affordable price. 
 
   </p>
   <div class="flex gap-6 mt-4 justify-center">
   <a href="https://github.com/harissiddiqui28/Next-Ecommerce" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300"> 
  <p class="text-sm text-white">Source Code</p>
  <span class="text-white"><FaGithub /></span>
</a>
<a href="https://next-ecommerce-psi-brown.vercel.app/" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
  <p class="text-sm text-white">Go Live</p>
  <span class="text-white cursor-pointer"><CgMediaLive /></span>
</a>
      </div>
  </div>
  
 
</div>




</div>






{/* second-project */}


<div class="flex items-center transition duration-300 ease-in-out hover:border-blue-300  m-4 justify-center cosmoc mt-16 mb-8 p-4 bg-opacity-70 border-2  border-gray-600 rounded">

  <div class="flex gap-12 flex-col md:flex-row">
  
    <div class="flex justify-center">
    <img src ={ecom} alt="Your Image" class="w-72 h-64 object-cover rounded"/>
    </div>

    <div class="items-center mt-2 text-center">

      <h1 class="text-lg text-white font-semibold mt-2">  Toutem  </h1>
      <p class="mt-4 text-gray-200 text-sm">Discover natural beauty at Toutem, your go-to e-commerce
     <br />destination for premium skincare infused with the richness 
     <br />of pearls and the freshness of kiwi extracts. 
   <br /> Elevate your routine with our curated collection 
    <br />of luxurious and effective beauty products. </p>
      
    <div class="flex gap-6 mt-4 justify-center">
    <a href="https://github.com/harissiddiqui28/Toutem" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300"> 
  <p class="text-sm text-white">Source Code</p>
  <span class="text-white"><FaGithub /></span>
</a>
<a href="https://toutem-iota.vercel.app/" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
  <p class="text-sm text-white">Go Live</p>
  <span class="text-white cursor-pointer"><CgMediaLive /></span>
</a>
      </div>

    </div>

  </div>
</div>




{/* third project */}
<div class="  flex justify-center transition duration-300 ease-in-out hover:border-blue-300  m-4 justify-center cosmoc mt-16 mb-8 p-4 bg-opacity-70 border-2  border-gray-600 rounded">

<div class="flex gap-12 flex-col md:flex-row ">
  
  <div class="flex  justify-center">
    <img src ={agency} alt="Your Image" class="w-72 h-64 object-cover rounded"/>
  </div>


  <div className=" items-center mt-2 text-center">

    <h1 class="text-lg text-white font-bold mt-2"> Enver </h1>
    <p class="mt-4 text-gray-200 text-sm">Enver studio is a digital studio that offers several services
     <br />such as UI/UX Design to developers, we will provide 
     <br />the best service for those of you who use our services. </p>
     <div class="flex gap-6 mt-4 justify-center">
     <a href="https://github.com/harissiddiqui28/Portfolio-Web" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300"> 
  <p class="text-sm text-white">Source Code</p>
  <span class="text-white"><FaGithub /></span>
</a>
<a href="https://portfolio-web-xi-brown.vercel.app/" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
  <p class="text-sm text-white">Go Live</p>
  <span class="text-white cursor-pointer"><CgMediaLive /></span>
</a>
      </div>
  </div>
  
 
</div>




</div>

{/* fourth-project */}
<div class="  flex justify-center transition duration-300 ease-in-out hover:border-blue-300  m-4 justify-center cosmoc mt-16 mb-8 p-4 bg-opacity-70 border-2  border-gray-600 rounded ">

<div class="flex gap-6 flex-col md:flex-row ">
  
  <div class="flex  justify-center">
  <img src ={Dash} alt="Your Image" class="w-72 h-64 object-cover rounded"/>
  </div>


  <div className=" items-center mt-2 text-center">

    <h1 class="text-lg text-white font-bold mt-2"> Metrix Dashboard  </h1>
    <p class="mt-4 text-gray-200 text-sm">
    Experience analytics at its best with our Metrics Dashboard,
    <br /> built using Tailwind CSS and ReactJS. This responsive dashboard 
     <br /> combines a modern aesthetic with dynamic interactivity, 
     <br />ensuring a seamless experience on any device.
     <br />Enjoy comprehensive metrics, customizable widgets, 
     <br />and an intuitive interface for effortless navigation.
   </p>
   <div class="flex gap-6 mt-4 justify-center">
   <a href="https://github.com/harissiddiqui28/dash-board" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300"> 
  <p class="text-sm text-white">Source Code</p>
  <span class="text-white"><FaGithub /></span>
</a>
<a href="https://dash-board-beryl.vercel.app/" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
  <p class="text-sm text-white">Go Live</p>
  <span class="text-white cursor-pointer"><CgMediaLive /></span>
</a>
      </div>
  </div>
  
 
</div>




</div>

{/* fifth-project */}
<div class="flex items-center transition duration-300 ease-in-out hover:border-blue-300  m-4 justify-center cosmoc mt-16 mb-8 p-4 bg-opacity-70 border-2  border-gray-600 rounded">

  <div class="flex gap-12 flex-col md:flex-row">
  
    <div class="flex justify-center">
      <img src={cosmo} alt="Your Image" class="w-72 h-64 object-cover rounded"/>
    </div>

    <div class="items-center mt-2 text-center">

      <h1 class="text-lg text-white font-semibold mt-2"> Cosmoc </h1>
      <p class="mt-4 text-gray-200 text-sm">
        At odissey, our mission is to inspire,
        <br />educate, and ignite your passion for the 
        <br />cosmos.  We are your premier destination for
        <br />all things related to space exploration,
        <br />astronomy, and the mysteries of the universe. 
        <br />Whether you're a seasoned astronomer or a curious novice,
        <br />join us on a journey to the furthest reaches of the cosmos.
      </p>
      
      <div class="flex gap-6 mt-4 justify-center">
        
        <a href="https://github.com/harissiddiqui28/Cosmoc-figma" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300"> 
  <p class="text-sm text-white">Source Code</p>
  <span class="text-white"><FaGithub /></span>
</a>

<a href="https://cosmoc-figma.vercel.app" target="_blank" class="flex gap-1 border-2 border-gray-600 p-2 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
  <p class="text-sm text-white">Go Live</p>
  <span class="text-white cursor-pointer"><CgMediaLive /></span>
</a>

      </div>

    </div>

  </div>
</div>


        </div>


        
        </>
    )
}

export default Projects;