import React from "react";


import { FaArrowDown } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";


function Contact(params) {
    return(


        <>
        <div>
<h1 class="text-3xl font-bold mb-6 mt-16 flex justify-center em">Contact</h1>

<div className="flex gap-1  justify-center">
<h1 class="text-lg text-white font-semibold   ">Don't be shy! Hit me up! </h1>
<span className="mt-2 text-blue-200"><FaArrowDown /></span>
</div>
<div className="flex gap-1  justify-center mt-4 mb-4">
<span className="mt-1 text-blue-200 cursor-pointer"><IoMdMailUnread /></span>

<a href="mailto:hsiddiqui697@gmail.com" class="text-blue-200">hsiddiqui697@gmail.com</a>

</div>


</div>
        
        </>
    )
}

export default Contact