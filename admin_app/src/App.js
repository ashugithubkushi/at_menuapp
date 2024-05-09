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
import OrderDetails from "./OrderDetails/OrderDetails";
import axios from "axios";
import { useEffect, useState } from "react";

import Headers from "./components/Layouts/Headers";
import Adminpasswordreset from "./pages/Forgotpassword/Adminpasswordreset";
import AdminRegisterData from "./pages/AdminRegisterData/AdminRegisterData";
import LoginButton from "./pages/Home/LoginButton";
import LogoutButton from "./pages/Home/LogoutButton";
import Profile from "./pages/Home/Profile";
import Registerr from "./pages/Register/Registerr";




function App() {
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);

  useEffect(() => {
    // Fetch orders count from backend
    const fetchOrdersCount = async () => {
      try {
        const response = await axios.get("http://localhost:3000/ordersCount");
        setTotalOrdersCount(response.data.totalOrdersCount);
      } catch (error) {
        console.error("Error fetching orders count:", error);
      }
    };

    fetchOrdersCount();
  }, []);
  
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
        <Route path='/header' element={<Headers/>} />
        <Route path='/registerr' element={<Registerr/>} />
        <Route path='/adminpasswordreset' element={<Adminpasswordreset/>} />
        <Route path='/adminregisterdata' element={<AdminRegisterData/>} />
        

        {/*  */}
        <Route path='/loginbutton' element={<LoginButton/>} />
        <Route path='/logoutbutton' element={<LogoutButton/>} />
        <Route path='/profile' element={<Profile/>} />
        {/*  */}


        <Route path="/menu" element={<Menu />} />
        <Route path="/bell" element={<Bell/>} />
        <Route path="*" element={<Pagenotfound />} />
        {/* <Route path="testdropdown" element={<Testdropdown/>} /> */}
        {/* <Route path='/lineChat' element={<LineChat/>}/> */}
        {/* <Route path='/pieChat' element={<PieChat/>}/> */}
        <Route path='/dashboard' element={<Dashboard totalOrdersCount={totalOrdersCount} />} />
        <Route path='/registerdata' element={<RegisterData/>} />
        <Route path='/orderdetails' element={<OrderDetails/>} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
