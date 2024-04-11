import React, { useContext, useEffect } from "react";
import pulley from "../assets/images/pulley.png"
import { Link } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
export default function () {
  const { setcurrPage } = useContext(Appcontext);
  useEffect(() => {
    setcurrPage(3);
  }, []);
  return (
    <div className="w-full m-auto md:w-[70%] flex-wrap gap-4 flex flex-col justify-center items-center md:mt-[100px]  p-4 ">
      <div className="flex-wrap flex justify-center gap-4">
        <div className="w-[40%] min-w-[280px]  ">
          <img src={pulley} className="min-w-[280px] max-h-[400px] m-auto"></img>{" "}
        </div>
        <div className="w-[55%]  min-w-[280px] flex flex-col gap-4 justify-center">
          <div className="text-[2rem] font-bold">
            {" "}
            You're in the right place
          </div>
          <div className="font-medium"> 
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </div>
        </div>
      </div>
      <Link
        to="/page4"
        
        className="m-auto border-[1px] text-center p-2 rounded-md w-[150px] bg-gray-200 hover:bg-black hover:text-white "
      >
        Continue
      </Link>
    </div>
  );
}
