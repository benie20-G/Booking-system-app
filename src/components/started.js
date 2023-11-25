import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const  GetStarted =()=>{
    return(
<div className="bg-[rgb(0,11,39)] h-screen pt-12 overscroll-contain">
            <div className=" flex bg-white w-12 h-12 rounded-full ml-5 items-center justify-center">
            <FontAwesomeIcon icon={faLongArrowAltLeft}/>
            </div>
          <h1  className=' pb-24 font-bold text-[25px] text-white text-center '>Let's get started</h1>

<div className="flex-col relative gap-10  px-10 items-center justify-center w-full lg:px-[40%]">   
<button className='block text-white   bg-blue-700 my-5 w-80 py-4 rounded-2xl text-center'>Facebook</button>
<button className='block text-white bg-blue-300 my-5 w-80 py-4 rounded-2xl text-center'>Twiter</button>
<button className='block text-white bg-red-500 my-5 w-80  py-4 rounded-2xl text-center' >Google</button>
</div>
<div>
<p className='text-center  text-gray-400 mt-24'>Arleady have an accout <a href="/login" className='text-[rgb(0,71,216)] '>Login</a></p>
    <button className='absolute bottom-0 text-center  text-white w-full  from-[rgb(0,39,124)] via-[rgb(24,14,64)] to-[rgb(0,11,39)] bg-gradient-to-b h-16 font-bold  lg:w-1/4 lg:ml-[38%] lg:top-[85%] lg:rounded-[10px]'>Create account</button>
    </div>
</div>

    )
}
export default GetStarted;
