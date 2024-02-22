import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Abouut = () => {
  // const navigate = useNavigate();

  const [pizzaCount, setPizzaCount] = useState(0);
  const [burgerCount, setBurgerCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);

  const handleCountIncrement = () => {
    setPizzaCount(pizzaCount + 1);
    setBurgerCount(burgerCount + 1);
    setChatCount(chatCount + 1);
  };

  const handleCountDecrement = () => {
    setPizzaCount(pizzaCount - 1);
    setBurgerCount(burgerCount - 1);
    setChatCount(chatCount - 1);
  };

  // const Submit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/createOrder", {
  //       pizzaCount,
  //       burgerCount,
  //       chatCount
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/menu");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <table className="border">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      <div className="d-flex">
        <td>Pizza</td>
          <td className="d-flex"><button className="btn" name="" onClick={handleCountDecrement}>
            -
          </button>
          <option
            value="Pizza"
            onChange={(e) => setPizzaCount(e.target.value)}
          >{`${pizzaCount}`}</option>
          <button className="btn" onClick={handleCountIncrement}>
            +
          </button></td>
          <td><p> = {pizzaCount}</p></td>
        </div>


        <div className="d-flex">
        <td>Burger</td>
        <td className="d-flex"><button className="btn" onClick={handleCountDecrement}>
            -
          </button>
          <option
            value="Burger"
            onChange={(e) => setBurgerCount(e.target.value)}
          >{`${burgerCount}`}</option>
          <button className="btn" onClick={handleCountIncrement}>
            +
          </button></td>
          <td><p> = {burgerCount}</p></td>
        </div>


        <div className="d-flex">
        <td>Chats</td>
        <div>
        <td className="d-flex"><button 
          // style={{ backgroundColor: ""}}
          className="btn" onClick={handleCountDecrement}>
            -
          </button>
          <td>
            <option
              value="Chats"
              onChange={(e) => setChatCount(e.target.value)}
            >{`${chatCount}`}</option>
          </td>
          <button className="btn" onClick={handleCountIncrement}>
            +
          </button></td>
          </div>
          <p> = {chatCount}</p>
        </div>
        </tbody>
      </table>



      <select className="dropdown" name="chats">
        <option value="N/A"></option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Pizza - ${chatCount}`}</option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Burger - ${chatCount}`}</option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Chats - ${chatCount}`}</option>
       </select> 

      {/* <div>
        <table>
          <thead>
            <tr>
              <th>a</th>
              <th>SnackCount</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((val , i) => {
                <tr>
                  <td>{val.a}</td>
                  <td>{val.x}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Abouut;
