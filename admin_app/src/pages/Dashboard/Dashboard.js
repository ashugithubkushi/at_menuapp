import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../../Sidebar";
import Header from "../Orders/Header";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  Assignment as RegisterDataIcon,
} from "@mui/icons-material";
import AdminRegisterData from "../AdminRegisterData/AdminRegisterData";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const [totalAdminRegisterDataCount, setTotalAdminRegisterDataCount] = useState(0);
  const [totalRegisterDataCount, setTotalRegisterDataCount] = useState(0);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0);

  const [monthlyCounts, setMonthlyCounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/adminRegisterData")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalAdminRegisterDataCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);

      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/registerData")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalRegisterDataCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);

      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        const totalCount = response.data.length;
        setTotalOrdersCount(totalCount);

        setMonthlyCounts((prevCounts) => [...prevCounts, totalCount]);

      })
      .catch((err) => console.log(err));
  }, []);

  // Bar chart data
  const data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    labels: ["Admin register data", "User register data", "Orders data"],
    datasets: [
      {
        label: "Count",
        backgroundColor: "#d8d2d4",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: monthlyCounts,
      },
    ],
  };



  return (
    <>
      <Header showCounts={false} />
      <Box sx={{ display: "flex"}}>
        <Sidebar />
        <div className="container-fluid bg-white d-flex">
          <div className="row">

            {/* Order data */}
            <div className="col-lg-4 p-3">
              <Link to="/orders" className="p-3">
                <div className="d-flex justify-content-between p-5 mb-5 mr-5 align-items-center  border-secondary shadow-sm" 
              style={{ 
                backgroundColor: '#e7e0e0', 
                border: 'none', 
                borderRadius: "10px",
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d8d2d4';
                e.target.style.transform = 'scale(0.95)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e7e0e0';
                e.target.style.transform = 'scale(1)';
              }}
              >
                  <OrdersIcon
                    fontSize="large"
                    style={{ fontSize: "5rem", color: "#4CAF50" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#4CAF50" }}
                    >
                     Total Orders Count
                      <h2> {totalOrdersCount}</h2>
                    </span>
                  </div>
                </div>
              </Link>
            </div>



           {/* Register data */}
            <div className="col-lg-4 p-3">
              <Link to="/registerdata" className="p-3 ">
                <div className="d-flex justify-content-between p-5 mb-5 mr-5 align-items-center  border-secondary shadow-sm" 
              style={{ 
                backgroundColor: '#e7e0e0', 
                border: 'none', 
                borderRadius: "10px",
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d8d2d4';
                e.target.style.transform = 'scale(0.95)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e7e0e0';
                e.target.style.transform = 'scale(1)';
              }}
              >
                  <RegisterDataIcon
                    fontSize="large"
                    style={{ fontSize: "5rem", color: "#674ae6" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#674ae6" }}
                    >
                     User Register count
                     {/*  */}
                     <h2> {totalRegisterDataCount}</h2>
                    </span>
                  </div>
                </div>
              </Link>
            </div>


            
           {/* Register data */}
            <div className="col-lg-4 p-3">
              <Link to="/adminregisterdata" className="p-3 ">
                <div className="d-flex justify-content-between p-5 mb-5 mr-5 align-items-center  border-secondary shadow-sm" 
              style={{ 
                backgroundColor: '#e7e0e0', 
                border: 'none', 
                borderRadius: "10px",
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d8d2d4';
                e.target.style.transform = 'scale(0.95)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e7e0e0';
                e.target.style.transform = 'scale(1)';
              }}
              >
                  <RegisterDataIcon
                    fontSize="large"
                    style={{ fontSize: "5rem", color: "#cf8867" }}
                  />
                  <div>
                    <span
                      className="fw-bold fs-5"
                      style={{ fontSize: "1.5rem", color: "#cf8867" }}
                    >
                      Admin Register Count
                      {/*  */}
                      <h2>{totalAdminRegisterDataCount}</h2>
                    </span>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <Bar
                  data={data}
                  options={{
                    title: {
                      display: true,
                      text: "Data Counts",
                      fontSize: 20,
                      width: 100
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                    scales: {
                      x: {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
