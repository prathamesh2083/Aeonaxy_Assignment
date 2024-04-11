import React, { useContext, useEffect } from "react";
import page5img from "../assets/images/page5img.png";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Appcontext } from "../context/Appcontext";
export default function () {
    const { setcurrPage } = useContext(Appcontext);
    useEffect(() => {
      setcurrPage(5);
    }, []);
  return (
    <div className="w-full m-auto md:w-[70%] flex-wrap gap-4 flex flex-col justify-center items-center md:mt-[100px]  p-4 ">
      <div className="flex-wrap flex justify-center gap-4">
        <div className="w-[40%] min-w-[280px]  ">
          <img
            src={page5img}
            className="min-w-[280px] max-h-[400px] m-auto"
          ></img>{" "}
        </div>

        <div className="w-[80%] md:w-[55%]   min-w-[300px] flex flex-col gap-4 justify-center">
          <div className="text-[2rem] font-bold"> You're on your way!</div>
          <div className="flex gap-1 ">
            <FaStar size={"30px"} color="#EDC001" />
            <FaStar size={"30px"} color="#EDC001"/>
            <FaStar size={"30px"} color="#EDC001" />
            <FaStar size={"30px"} color="#EDC001"/>
            <FaStar size={"30px"} color="#EDC001" />
          </div>
          <div className="font-medium">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </div>
          <div className="font-medium" >- Jacob S.</div>
        </div>
      </div>
      <Link
        to="/page6"
        className="m-auto border-[1px] text-center p-2 rounded-md w-[150px] bg-gray-200 hover:bg-black hover:text-white "
      >
        Continue
      </Link>
    </div>
  );
}
