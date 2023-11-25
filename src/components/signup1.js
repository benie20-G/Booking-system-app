import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
const Signup1 = () => {
  return (
    <div className="bg-[rgb(0,11,39)] h-screen pt-10 overscroll-contain">
      <div className="flex bg-white w-12 h-12 rounded-full ml-4 items-center justify-center">
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
      <h1 className="pb-10 font-bold text-[25px] text-white text-center">
        Sign Up
      </h1>
      <div>
        <div className="flex-col items-center justify-center px-6">
          <div className="w-7/8 mt-8">
            <input
              type="text"
              class=" peer block min-h-[auto] w-full  rounded border-b-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear c   
               data-[te-input-state-active]:placeholder:opacity-100 
               dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Example label"
            />
            <label
              for="exampleFormControlInput1"
              className=" peer pointer-events-none  relative -top-9 dark:peer-focus:-top-16 text-white peer-focus:text-neutral-500   mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
               dark:text-white dark:peer-focus:text-neutral-200-300"
            >
              Username
            </label>
          </div>

          <div className="w-7/8 mt-8">
            <input
              type="text"
              class=" peer block min-h-[auto] w-full rounded border-b-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear c   
               data-[te-input-state-active]:placeholder:opacity-100 
               dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Example label"
            />
            <label
              for="exampleFormControlInput1"
              class=" peer pointer-events-none relative  text-white -top-9 dark:peer-focus:-top-16 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
               dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          <div className="w-7/8 mt-8">
            <input
              type="text"
              class=" peer block min-h-[auto]  w-full rounded border-b-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear c   
               data-[te-input-state-active]:placeholder:opacity-100 
               dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Example label"
            />
            <label
              for="exampleFormControlInput1"
              class=" peer pointer-events-none relative text-white  -top-9 dark:peer-focus:-top-16 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
               dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Email address
            </label>
          </div>
        </div>

        
        <button className="absolute bottom-0 text-center  text-white w-full from-[rgb(0,39,124)] via-[rgb(24,14,64)] to-[rgb(0,11,39)] bg-gradient-to-b h-16 font-bold  lg:w-1/4 lg:ml-[38%] lg:top-[85%] lg:rounded-[10px]">
        sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup1;
