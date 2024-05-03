import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../../Sidebar";
import Header from "../Orders/Header";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  Assignment as RegisterDataIcon,
} from "@mui/icons-material";

const Dashboard = ({ totalOrdersCount }) => {
  return (
    <>
      <Header showCounts={false} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div className="container-fluid bg-white">
          <div className="row">

            {/* Order data */}
            <div className="col-md-6 col-lg-6 p-3">
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
                      Orders
                      <h2>Total Order IDs: {totalOrdersCount}</h2>
                    </span>
                  </div>
                </div>
              </Link>
            </div>



           {/* Register data */}
            <div className="col-md-6 col-lg-6 p-3">
              <Link to="/orders" className="p-3 ">
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
                      Register Data
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
