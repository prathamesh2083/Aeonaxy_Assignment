import React, { useContext, useEffect, useState } from 'react'
import last from "../assets/images/last.png";
import { FaRegCircle } from "react-icons/fa6";
import { Appcontext } from '../context/Appcontext';
export default function Page6() {
    const[loading,setloading]=useState(true);
    const { setcurrPage } = useContext(Appcontext);
    useEffect(()=>{
        setTimeout(()=>{
           setloading(false);
        },1000)
        setcurrPage(0);
    },[])
   
  return (
    <div className="w-full m-auto md:w-[70%] flex-wrap gap-4 flex flex-col justify-center items-center md:mt-[100px]  p-4">
      {loading ? (
        <div className="flex flex-col items-center gap-4 mt-[100px]">
          <FaRegCircle size={"80px"} color="#EDC001" />
          <div className="text-center">
            {" "}
            Finding learning path recommendations for you based on your
            responses{" "}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 my-20">
          <div className="text-[2rem] font-bold text-center">
            Learning paths based on your answers
          </div>
          <div className="text-gray-600 text-center">
            Choose one to get started . You can switch anytime.
          </div>
          <div className="flex flex-wrap justify-around gap-4">

            <div className="md:w-[40%] flex min-w-[200px] gap-1 flex-wrap-reverse">
              <div className="flex text-center items-center md:w-[60%] " >
                Foundational Math Build
                your foundational skills in algebra,geometry and probability.
              </div>
              <img src={last} className="min-w-[100px] md:w-[35%]  max-w-[200px] m-auto"></img>
            </div>

            <div className="md:w-[40%] flex min-w-[200px] gap-1 flex-wrap-reverse ">
              <div className="flex text-center items-center  md:w-[60%] " >
                Mathematical Thinking{" "}
                Build your foundational skills in algebra,geometry and
                probability.
              </div>
              <img src={last} className="min-w-[100px] md:w-[35%] max-w-[200px] m-auto "></img>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}
