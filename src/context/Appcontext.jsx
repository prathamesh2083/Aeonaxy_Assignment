import {  createContext, useState } from "react";

export const Appcontext = createContext("");

export default function AppcontextProvider({children}){

      const [currPage,setcurrPage]=useState(1);
      const value={
        currPage,
        setcurrPage
      }
      return <Appcontext.Provider value={value} >{children} </Appcontext.Provider>
}