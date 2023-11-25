import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const Verification= () => {
  return (
    <div className="bg-[rgb(0,11,39)] h-screen pt-10 overscroll-contain">
      <div className="flex bg-white w-12 h-12 rounded-full ml-4 items-center justify-center">
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
      <h1 className=" font-bold text-[25px] text-white text-center">
  Verification Code
      </h1>
      <div>
        <img src="./IMG.png" alt="forgot"/>

       
          <div className="w-7/8 mt-8 mx-6 h-[6.12rem] flex gap-4">
            <div className=" h-full w-1/4 text-white flex items-center justify-center border-white border rounded-lg">6</div>
            <div className=" h-full w-1/4 text-white flex items-center justify-center border-white border rounded-lg">4</div>
            <div className=" h-full w-1/4 text-white flex items-center justify-center border-white border rounded-lg">9</div>
            <div className=" h-full w-1/4 text-white flex items-center justify-center border-white border rounded-lg">5</div>
            
          </div>
    

<p className="text-gray-500 text-center mx-5 mt-16"><a href="ww.facebook.com" className="text-blue-600">00:20</a> resend verification code. </p>
<a href="/resetpassword" className="flex items-center justify-center absolute bottom-0 text-center  text-white w-full from-[rgb(0,39,124)] via-[rgb(24,14,64)] to-[rgb(0,11,39)] bg-gradient-to-b h-16 font-bold  lg:w-1/4 lg:ml-[38%] lg:top-[85%] lg:rounded-[10px]">
 Confirm code
        </a>
      </div>
    </div>
  );
};
export default Verification;
