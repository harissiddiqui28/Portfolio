import React from "react";
import html from '../assets/images/htm2.png'
import css from '../assets/images/css22.png'
import tail  from '../assets/images/tail2.png'
import js  from '../assets/images/js2.png'
import react  from '../assets/images/react2.png'
import next  from '../assets/images/next2.png'
import boot  from '../assets/images/boot2.png'
function Skills(params) {
    return(

      <>
<div>
<h1 className="font-extrabold text-6xl text-center em">Skills</h1>

</div>
   <body class=" flex items-center justify-center min-h-screen  ">

<div class="flex  flex-col md:flex-row gap-6 p-2">
  
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={html}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={css}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={tail}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={js}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={react}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={next}  />
            </span>
        </div>
    </div>
    <div class="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div class=" w-14 h-14 flex items-center justify-center rounded-full">
            <span class="text-white text-lg font-bold">
                <img src={boot}  />
            </span>
        </div>
    </div>

</div>

</body>

      </>
    )
    
}
export default Skills;