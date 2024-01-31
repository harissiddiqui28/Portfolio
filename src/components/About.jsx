import React from "react";
import about from '../assets/images/about.png'

function About (params) {
    return(

        <>

<div className="p-8">
      <div class=" mx-auto flex  flex-col md:flex-row justify-around p-4 items-center ">
  
    <div class="mb-8">
      <div className="flex gap-1 justify-center">
      <h1 class="text-4xl font-bold text-white">About</h1>
      <h1 className="text-4xl font-bold em">Me</h1>
      </div>
  
      <p class="mt-4 text-white text-sm text-center">I am a final-year Software Engineering student
     <br />at Government Boys Polytechnic Institute with expertise in 
     <br />Front-End React Web Development. I have completed 
    <br /> a 6-month Web Developer course at Learnify Academy,
      <br />enhancing my skills in React and web development.
     <br />Eager to apply my knowledge and contribute to innovative projects.
     <br />With a strong foundation in software development principles, I am well-equipped 
     <br />to create dynamic and responsive user interfaces, adapting to industry trends effectively.</p>
    </div>

    <div class="flex justify-around icons items-end ">
      <img src={about} alt="Image 1" class="h-64 w-64 mr-4"/>
    
    </div>
  </div>
      </div>








        </>
    )
}

export default About;