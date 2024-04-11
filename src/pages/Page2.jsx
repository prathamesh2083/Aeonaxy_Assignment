import React, { useContext, useEffect } from "react";
import { data } from "../data/mostInterested";
import { Link } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
export default function () {
    const { setcurrPage } = useContext(Appcontext);
    useEffect(() => {
      setcurrPage(2);
    }, []);
  return (
    <div className="w-full m-auto md:w-[550px] flex flex-col justify-center items-center md:h-screen p-4 ">
      <div className="text-[1.8rem] font-bold w-full text-center p-2 ">
        Which are you most interested in?
      </div>
      <div className="text-center w-full">
         Choose just one. This
        will help us get you started (but won't limit your experience.)
      </div>
      <div className="flex flex-col gap-4 my-2 w-full p-2">
        {data?.map((info) => {
          return (
            <div className="border-[1px] flex w-full gap-4 items-center p-1">
              <img src={info.image} className="w-[50px]"></img>
              <div>
                 {info.text}
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to="/page3"
       
        className="border-[1px] text-center p-2 rounded-md w-[150px] bg-gray-200 hover:bg-black hover:text-white "
      >
        Continue
      </Link>
    </div>
  );
}
