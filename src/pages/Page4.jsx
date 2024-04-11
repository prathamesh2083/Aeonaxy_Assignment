import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {mathlevel} from "../data/mathlevel"
import { Appcontext } from '../context/Appcontext';
export default function Page4() {
    const { setcurrPage } = useContext(Appcontext);
    useEffect(() => {
      setcurrPage(4);
    }, []);
  return (
    <div className="w-full m-auto  flex flex-col gap-4 justify-center items-center md:h-screen p-4 ">
      <div className="text-[2rem] font-bold text-center md:text-start" >What is your math comfort level?</div>
      <div   className="font-small text-center md:text-start" >
        {" "}
        choose the highest level you feel confident in - you can always adjust
        later.{" "}
      </div>
      <div className="w-full p-2 max-w-[900px] flex gap-2 flex-wrap justify-center md:justify-around min-w-[300px]">
        {mathlevel?.map((level)=>{
            return (
              <div className="border-[2px] min-w-[250px] md:min-w-[200px] w-[20%] p-1 rounded-md hover:border-yellow-300 hover:shadow-md">
                <img src={level.image} className="w-full m-auto  "></img>
              </div>
            ); 
        })}
      </div>
      <Link
        to="/page5"
        
        className="border-[1px] text-center p-2 rounded-md w-[150px] bg-gray-200 hover:bg-black hover:text-white "
      >
        Continue
      </Link>
    </div>
  );
}
