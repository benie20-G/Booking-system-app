import React from "react";
import "./styles.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft,faLocationDot,faBars,faV} from "@fortawesome/free-solid-svg-icons";

const BookTax = () => {

  const [locationSelected, setLocationSelected] = useState(false)
  return (
    <div className="bg-[rgb(0,11,39)] h-screen pt-10 overscroll-contain">
      <div className="bg-white flex w-12 h-12 rounded-full ml-4 items-center justify-center">
        {locationSelected ? <FontAwesomeIcon icon={faLongArrowAltLeft} onClick={()=>{setLocationSelected(false)}}  />
        :
        <FontAwesomeIcon icon={faBars} />}
      </div>
      <div className="pb-2 text-center">
        <h1 className=" font-bold text-[25px] text-white ">
          Book Tax
        </h1>
        <p className="text-gray-500 font-normal text-[16px]">Select the type of transport you use</p>
      </div>
      <div id="agency" className="px-3">
        <h1 className="text-white font-bold float-left">Choose agency</h1>
        <a href="hoe.com" className="text-gray-400 float-right">view all</a>
        <div className="flex clear-both gap-2 py-3">
          <div className="w-1/3 lg:w-1/6 md:w-1/4 flex text-white rounded-2xl border-2 border-t-[rgb(120,25,136)] border-r-[rgb(120,25,136)] border-b-[rgb(80,146,252)] border-l-[rgb(80,146,252)] h-14 bg-[rgb(25,37,67)] items-center justify-center gap-2">
            <input type="radio" checked="true" value="Virunga" id="virunga" />
            <label className="float-right" for="virunga">Virunga</label>
          </div>
          <div className="w-1/3 lg:w-1/6 md:w-1/4  flex rounded-2xl h-14 text-white bg-[rgb(25,37,67)] items-center justify-center gap-2">
            <input type="radio" value="Virunga" id="virunga" />
            <label className="float-right" for="virunga">Virunga</label>
          </div>
          <div className="w-1/3  lg:w-1/6 md:w-1/4  flex rounded-2xl h-14 text-white bg-[rgb(25,37,67)] items-center justify-center gap-2">
            <input type="radio" value="Virunga" id="virunga" />
            <label className="float-right" for="virunga">Virunga</label>
          </div>

        </div>
      </div>

      <h1 className="text-white px-2">{locationSelected ? "location" : "Select location"}</h1>
      {locationSelected ?
        <div>
          <div className="overflow-hidden bg-[rgb(31,42,74)]  text-white flex gap-3 items-center px-2 py-1">
            <div className="w-[6.25rem]  h-[6.25rem] bg-white flex items-center justify-center rounded-2xl">
              <img src="./location.png" alt="map" className=" my-2 mx-2 w-[4.3rem] clear-both object-contain " />
            </div>
            <div className="w-2/4">
              <p>From Kigali-nyabugogo
                To Nyabihu-Mukamira
              </p>
              <h4>2450 FRW <span className="float-right">3hrs</span></h4>

              <div className="w-3/4 h-9 flex justify-between">
                <div className="flex items-center justify-center w-1/4 h-9 border-2 border-t-[rgb(120,25,136)] border-r-[rgb(120,25,136)]  border-b-[rgb(80,146,252)] border-l-[rgb(80,146,252)]  rounded-full"><FontAwesomeIcon icon={faV}/></div>
                <div className="w-1/4 h-9 flex items-center justify-center">1</div>
                <div className="w-1/4 h-9 border-2 border-t-[rgb(120,25,136)] border-r-[rgb(120,25,136)]  border-b-[rgb(80,146,252)] border-l-[rgb(80,146,252)]  rounded-full"></div>
              </div>



            </div>

          </div>
          <h2 className="text-white m-4">Available Buses</h2>
          <table className="table table-auto  text-white border w-full gap-5">
            <thead>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <th>No</th>
                <th>Plate no</th>
                <th>seats</th>
                <th>Time</th>
                <th>Where</th>
                <th>Go</th>
              </tr>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <td>1</td>
                <td>RAD 303 F</td>
                <td>5</td>
                <td>2: 45 PM</td>
                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                <td><button className="bg-purple-800 rounded-2xl w-full text-center">Go</button></td>
              </tr>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <td>2</td>
                <td>RAD 303 F</td>
                <td>5</td>
                <td>2: 45 PM</td>
                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                <td><button className="bg-purple-800 rounded-2xl w-full text-center">Go</button></td>
              </tr>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <td>3</td>
                <td>RAD 303 F</td>
                <td>5</td>
                <td>2: 45 PM</td>
                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                <td><button className="bg-purple-800 rounded-2xl w-full text-center">Go</button></td>
              </tr>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <td>4</td>
                <td>RAD 303 F</td>
                <td>5</td>
                <td>2: 45 PM</td>
                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                <td><button className="bg-purple-800 rounded-2xl w-full text-center">Go</button></td>
              </tr>
              <tr className="border-8 rounded-3xl border-[rgb(0,11,39)]">
                <td>5</td>
                <td>RAD 303 F</td>
                <td>5</td>
                <td>2: 45 PM</td>
                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                <td><button className="bg-purple-800 rounded-2xl w-full text-center">Go</button></td>
              </tr>
            </thead>
          </table>
      
          <div>
            <button className="absolute text-center   text-white w-full from-[rgb(0,39,124)] via-[rgb(24,14,64)] to-[rgb(0,11,39)] bg-gradient-to-b h-16 font-bold  lg:w-1/4 lg:ml-[38%] lg:relative md:relative lg:top-[100%] lg:rounded-[10px]">
            Purchase
            </button>
          </div>

        </div>
        :
        <div>
          <div id="location" className="mt-2 w-full h-[19rem] bg-contain lg:h-screen md:h-screen"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/map.png'})` }}>

            <select className=" float-left rounded-2xl p-2 my-3 outline-none">
              <option>From</option>
              <option value="Nyabugogo">Nyabugogo</option>
              <option value="musanze">Musanze</option>
              <option value="gisenyi">Gisenyi</option>
              <option value="huye">Huye</option>
              <option value="mukamira">Mukamira</option>
            </select>
            <select className=" float-right rounded-2xl p-2 my-3 outline-none">
              <option>To</option>
              <option value="Nyabugogo">Nyabugogo</option>
              <option value="musanze">Musanze</option>
              <option value="gisenyi">Gisenyi</option>
              <option value="huye">Huye</option>
              <option value="mukamira">Mukamira</option>
            </select>
          </div>
          <div>
            <button className="absolute bottom-0 text-center   text-white w-full from-[rgb(0,39,124)] via-[rgb(24,14,64)] to-[rgb(0,11,39)] bg-gradient-to-b h-16 font-bold  lg:w-1/4 lg:ml-[38%] lg:relative md:relative lg:top-[100%] lg:rounded-[10px]" onClick={() => { setLocationSelected(!locationSelected) }}>
              Select Location
            </button>
          </div>
        </div>
      }


    </div>
  );
};
export default BookTax;
