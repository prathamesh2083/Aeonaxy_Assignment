import React, { useContext } from 'react'
import {Routes,Route} from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Header from './components/Header';
import { Appcontext } from './context/Appcontext';
export default function App() {
  
  return (
    <div>
       <Header  ></Header>
      <Routes>
        <Route path="/" element={<Page1></Page1>} ></Route>
        <Route path="/page2" element={<Page2></Page2>} ></Route>
        <Route path="/page3" element={<Page3></Page3>} ></Route>
        <Route path="/page4" element={<Page4></Page4>} ></Route>
        <Route path="/page5" element={<Page5></Page5>} ></Route>
        <Route path="/page6" element={<Page6></Page6>} ></Route>
      </Routes>
    </div>
  )
}
