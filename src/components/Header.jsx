import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";

import {useNavigate }from "react-router-dom"
import { Appcontext } from '../context/Appcontext';
import { MdHeight } from 'react-icons/md';
export default function Header() {
    const {currPage} = useContext(Appcontext);
    const [dwidth,setdwidth]=useState("");
   
    useEffect(()=>{
    
     if(currPage==1){
         setdwidth("w-[20%]");
     }
     else if (currPage==2){
        setdwidth("w-[40%]");
     }
     else if(currPage==3){
        setdwidth("w-[60%]");
     }
     else if(currPage==4){
        setdwidth("w-[80%]");
     }
     else if(currPage==5){
        setdwidth("w-[100%]");
     }
     
     

     
    
    },[currPage])
    const navigate=useNavigate();
  return (
    <>
        {currPage!==0?<div className="flex items-center w-[80%] m-auto " >
      <FaArrowLeft
        onClick={() => {
          navigate(-1);
        }}
      />
      <div   className={`border-[2px] border-green-700 rounded-lg mx-4 ${dwidth}  my-10`}></div>
      
    </div>:<div></div>
        }
    </>
    
  );
}
