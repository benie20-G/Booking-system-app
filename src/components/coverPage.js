import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft,faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


const CoverPage= () => {
  return (
    <div className="bg-[rgb(42,74,153)] h-screen pt-10 overscroll-contain">
      <div className="flex bg-white w-12 h-12 rounded-full ml-4 items-center justify-center">
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
      <div className="flex items-center justify-center h-[90%]">
      <div className="flex-col ">
    
        <div className="flex items-center justify-center">
        <img src="../Online taxi booking.png" alt="forgot" className="self-center"/>
        </div>
       
          <div className="w-7/8 mt-8 mx-6 h-[6.12rem] flex-col gap-4 text-white items-center justify-center">
         <h1 className="text-center">TrackGo</h1>
         <p className="text-center">Book your ticket</p>
         <p className="text-center">Now</p>
         <a href="/home"><FontAwesomeIcon  icon={faLongArrowAltRight} className="float-right px-4 py-2 rounded-2xl hover:bg-[rgb(24,14,64)]"/></a>
         {/* <button className=" mx-[20%] border p-5 text-black text-center bg-white rounded-lg">Continue</button> */}
          </div>
    </div>
    </div>
    </div>
  );
};
export default CoverPage;
