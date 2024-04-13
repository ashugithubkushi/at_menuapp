import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import Layout from "antd/es/layout/layout";

import Sidenav from "../../Component/Sidenav";
import { Box } from "@mui/material";

const RegisteredData = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      // .then((result) => setOrders(result.data))
      .then((result) => {
        setTableData(result.data);
        // console.log(orders);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e, status, id) => {
    e.preventDefault();
    axios.put("http://localhost:3000/createRegister/"+id  , {status})
    .then(result => {
        console.log(result)

        // setStatus(false)
        // console.log(status);

        // navigate('/')
    })
    .catch(err => console.log(err))
   }

  return (
    <Box sx={{display:"flex"}}>
      <Sidenav/>
    <Layout>
      <div>
      </div>

      <div className="w-100 vh-100 justify-content-center align-items-center">
        <div className="w-100">
          {/* <Link to="/login" className="btn btn-success float-end">
            Logout
          </Link> */}

          <table className="table">
            <thead>
              <tr className="table-data">
                <th scope="row">Username</th>
                <th scope="row">Email</th>
                <th scope="row">Password</th>
              </tr>
            </thead>

{/* <tbody> */}
            {orders.map((item, i) => {
              //  console.log(item)
            
              // setOrderStatus[item._id] = item.status
              // let obj1=[{item._id : item.status}]
              // setOrderStatus(prevState => [...prevState, obj1])
              // console.log(orderStatus)
              
              return (
                <tbody>
                  <tr key={i}>
                    <td className="p-5 m-1" rowSpan={2} scope="row">
                      {i + 1}
                    </td>
                    {/* <td>Elders</td> */}
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                 
                 
                   
                    {/* <td className="status-btn p-5 m-1" rowSpan={2} scope="row">

                    </td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </Layout>
    </Box>
  )
}

export default RegisteredData
