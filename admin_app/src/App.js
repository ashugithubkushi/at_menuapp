// import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home/Home";
// import Contact from './pages/Contact';
import Pagenotfound from "./pages/Pagenotfound";
import Abouut from "./components/Abouut";
import Login from "./pages/Home/Login";
import Bell from "./pages/Bell";
import Sidebar from "./Sidebar";
import Menu from "./components/Menu";
// import Testdropdown from "./components/Testdropdown/Testdropdown";
import LineChat from "./components/LineChart";
import PieChat from "./components/PieChart";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./pages/Orders/Orders";
import RegisterData from "./pages/RegisterData/RegisterData";
import Totalorderdata from "./pages/Dashboard/totalorderdata/Totalorderdata";

// import Headers from "./components/Layouts/Headers";




function App() {

  
  return (
    
    <BrowserRouter>


     {/* <div><Navbar/></div> */}

   <div className="d-flex">
    {/* <div className="w-auto"> */}
      {/* <Sidebar/> */}
   
    {/* </div> */}
    <div className='col'>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/abouut" element={<Abouut />} />
        <Route path='/orders' element={<Orders/>} />
        {/* <Route path='/sidebar' element={<Sidebar/>} /> */}
        {/* <Route path='/header' element={<Headers/>} /> */}

        <Route path="/menu" element={<Menu />} />
        <Route path="/bell" element={<Bell/>} />
        <Route path="*" element={<Pagenotfound />} />
        {/* <Route path="testdropdown" element={<Testdropdown/>} /> */}
        {/* <Route path='/lineChat' element={<LineChat/>}/> */}
        {/* <Route path='/pieChat' element={<PieChat/>}/> */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/registerdata' element={<RegisterData/>}/>
        <Route path='/totalorderdata' element={<Totalorderdata/>}/>
      </Routes>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
