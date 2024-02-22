import React, { useState } from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
// import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const Home = () => {
  const navigate = useNavigate();

  // const [numberOfElders, setNumberOfElders] = useState();
  const [snacksElder, setSnacksElder] = useState("");
  const [drinksElder, setDrinksElder] = useState("");
  const [totalItemElder, setTotalItemElder] = useState();

  // const [numberOfChild, setNumberOfChild] = useState();
  const [snacksChildren, setSnacksChildren] = useState("");
  const [drinksChildren, setDrinksChildren] = useState("");
  const [totalItemChildren, setTotalItemChildren] = useState();

  const [visible, setVisible] = useState(false);

  // console.log("snacksElder", snacksElder);
  // console.log("drinksElder", drinksElder);
  // console.log("totalItemElder", totalItemElder);
  // console.log("numberOfChild", numberOfChild);
  // console.log("snacksChildren", snacksChildren);
  // console.log("drinksChildren", drinksChildren);
  // console.log("totalItemChildren", totalItemChildren);

  // const Submit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/createOrder", {
  //       numberOfElders,
  //       snacksElder,
  //       drinksElder,
  //       totalItemElder,
  //       numberOfChild,
  //       snacksChildren,
  //       drinksChildren,
  //       totalItemChildren,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/menu");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const Submit = (e) => {
    e.preventDefault();
    axios
   .post("http://localhost:3000/createOrder", {
        numberOfElders,
        pizzaCount,
        burgerCount,
        chatCount,
        coffeCount,
        teaCount,
        coolDrinkCount,
        numberOfChild,
        pizzaCount1,
        burgerCount1,
        chatCount1,
        coffeCount1,
        teaCount1,
        coolDrinkCount1,     
      })
   .then((result) => {
        console.log(result);
        navigate("/menu");
      })
   .catch((err) => console.log(err));
  };

  // update of snacks count
  const [numberOfElders, setNumberOfElders] = useState();
  const [pizzaCount, setPizzaCount] = useState(0);
  const [burgerCount, setBurgerCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [coffeCount, setCoffeCount] = useState(0);
  const [teaCount, setTeaCount] = useState(0);
  const [coolDrinkCount, setCoolDrinkCount] = useState(0);

  // console.log("pizzaCount", pizzaCount);
  // console.log("burgerCount", burgerCount);
  // console.log("chatCount", chatCount);
  // console.log("coffeCount", coffeCount);
  // console.log("teaCount", teaCount);
  // console.log("coolDrinkCount", coolDrinkCount);


  const PizzaCountIncre = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const BurgerCountIncre = () => {
    setBurgerCount(burgerCount + 1);
  };
  const ChatCountIncre = () => {
    setChatCount(chatCount + 1);
  };
  const CoffeCountIncre = () => {
    setCoffeCount(coffeCount + 1);
  };
  const TeaCountIncre = () => {
    setTeaCount(teaCount + 1);
  };
  const CoolDrinkCountIncre = () => {
    setCoolDrinkCount(coolDrinkCount + 1);
  };

  const PizzaCountDecre = () => {
    setPizzaCount(pizzaCount - 1);
  };
  const BurgerCountDecre = () => {
    setBurgerCount(burgerCount - 1);
  };
  const ChatCountDecre = () => {
    setChatCount(chatCount - 1);
  };
  const CoffeCountDecre = () => {
    setCoffeCount(coffeCount - 1);
  };
  const TeaCountDecre = () => {
    setTeaCount(teaCount - 1);
  };
  const CoolDrinkCountDecre = () => {
    setCoolDrinkCount(coolDrinkCount - 1);
  };
 
  //children
  const [numberOfChild, setNumberOfChild] = useState();
  const [pizzaCount1, setPizzaCount1] = useState(0);
  const [burgerCount1, setBurgerCount1] = useState(0);
  const [chatCount1, setChatCount1] = useState(0);
  const [coffeCount1, setCoffeCount1] = useState(0);
  const [teaCount1, setTeaCount1] = useState(0);
  const [coolDrinkCount1, setCoolDrinkCount1] = useState(0);

  // console.log("pizzaCount1", pizzaCount1);
  // console.log("burgerCount1", burgerCount1);
  // console.log("chatCount1", chatCount1);
  // console.log("coffeCount1", coffeCount1);
  // console.log("teaCount1", teaCount1);
  // console.log("coolDrinkCount1", coolDrinkCount1);

  const PizzaCountIncre1 = () => {
    setPizzaCount1(pizzaCount1 + 1);
  };
  const BurgerCountIncre1 = () => {
    setBurgerCount1(burgerCount1 + 1);
  };
  const ChatCountIncre1 = () => {
    setChatCount1(chatCount1 + 1);
  };
  const CoffeCountIncre1 = () => {
    setCoffeCount1(coffeCount1 + 1);
  };
  const TeaCountIncre1 = () => {
    setTeaCount1(teaCount1 + 1);
  };
  const CoolDrinkCountIncre1 = () => {
    setCoolDrinkCount1(coolDrinkCount1 + 1);
  };

  const PizzaCountDecre1 = () => {
    setPizzaCount1(pizzaCount1 - 1);
  };
  const BurgerCountDecre1 = () => {
    setBurgerCount1(burgerCount1 - 1);
  };
  const ChatCountDecre1 = () => {
    setChatCount1(chatCount1 - 1);
  };
  const CoffeCountDecre1 = () => {
    setCoffeCount1(coffeCount1 - 1);
  };
  const TeaCountDecre1 = () => {
    setTeaCount1(teaCount1 - 1);
  };
  const CoolDrinkCountDecre1 = () => {
    setCoolDrinkCount1(coolDrinkCount1 - 1);
  };

  return (
    <div>
       <div className="background ">
        <div>
          {/* <div className="scrolling"> */}
          <marquee direction="right">
            <h4>Select your delicious snack here</h4>
          </marquee>
        </div>

        <div className="d-flex">
          {/* <form className="formdata"> */}
          <label className="m-3 p-4">
            <h2>Elders</h2>
            {/* <div className=" m-3 p-4"><h2>Snacks</h2></div> */}

            {/* <input
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              /> */}

            <select
              style={{ width: 150, height: 50 }}
              className="form-control d-flex"
              type="dropdown"
              name="elders"
              onChange={(e) => setNumberOfElders(e.target.value)}
            >
              <option value="N/A">N/A</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <div className=" m-3 p-4">
            <h2>Snacks</h2>
            <div className="form-control">
              <div className="d-flex">
                <th>Pizza</th>
                <button className="btn" name="" onClick={PizzaCountDecre}>
                  -
                </button>
                <option
                  value="Pizza"
                  onChange={(e) => setPizzaCount(e.target.value)}
                >{`${pizzaCount}`}</option>
                <button className="btn" onClick={PizzaCountIncre}>
                  +
                </button>
                <p> = {pizzaCount}</p>
              </div>

              <div className="d-flex">
                <th>Burger</th>
                <button className="btn" name="" onClick={BurgerCountDecre}>
                  -
                </button>
                <option
                  value="Burger"
                  onChange={(e) => burgerCount(e.target.value)}
                >{`${burgerCount}`}</option>
                <button className="btn" onClick={BurgerCountIncre}>
                  +
                </button>
                <p> = {burgerCount}</p>
              </div>

              <div className="d-flex">
                <th>Chats</th>
                <button className="btn" onClick={ChatCountDecre}>
                  -
                </button>
                <td>
                  <option
                    value="Chats"
                    onChange={(e) => setChatCount(e.target.value)}
                  >{`${chatCount}`}</option>
                </td>
                <button className="btn" onClick={ChatCountIncre}>
                  +
                </button>
                <p> = {chatCount}</p>
              </div>
            </div>
          </div>

          <div className=" m-3 p-4">
            <h2>Beverages</h2>
            <div className="form-control">
              <div className="d-flex">
                <th>Coffe</th>
                <button className="btn" name="" onClick={CoffeCountDecre}>
                  -
                </button>
                <option
                  value="Coffe"
                  onChange={(e) => coffeCount(e.target.value)}
                >{`${coffeCount}`}</option>
                <button className="btn" onClick={CoffeCountIncre}>
                  +
                </button>
                <p> = {coffeCount}</p>
              </div>

              <div className="d-flex">
                <th>Tea</th>
                <button className="btn" name="" onClick={TeaCountDecre}>
                  -
                </button>
                <option
                  value="Tea"
                  onChange={(e) => teaCount(e.target.value)}
                >{`${teaCount}`}</option>
                <button className="btn" onClick={TeaCountIncre}>
                  +
                </button>
                <p> = {teaCount}</p>
              </div>

              <div className="d-flex">
                <th>Cooldrink</th>
                <button className="btn" name="" onClick={CoolDrinkCountDecre}>
                  -
                </button>
                <option
                  value="Cool Drink"
                  onChange={(e) => coolDrinkCount(e.target.value)}
                >{`${coolDrinkCount}`}</option>
                <button className="btn" onClick={CoolDrinkCountIncre}>
                  +
                </button>
                <p> = {coolDrinkCount}</p>
              </div>
            </div>
          </div>
          <div />
        </div>

        {/* children */}

        <div className="d-flex">
          {/* <form className="formdata"> */}
          <label className="m-3 p-4">
            <h2>Childrens</h2>
            {/* <div className=" m-3 p-4"><h2>Snacks</h2></div> */}

            {/* <input
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              /> */}

            <select
              style={{ width: 150, height: 50 }}
              className="form-control d-flex"
              type="dropdown"
              name="elders"
              onChange={(e) => setNumberOfChild(e.target.value)}
            >
              <option value="N/A">N/A</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <div className=" m-3 p-4">
            <h2>Snacks</h2>
            <div className="form-control">
              <div className="d-flex">
                <th>Pizza</th>
                <button className="btn" name="" onClick={PizzaCountDecre1}>
                  -
                </button>
                <option
                  value="Pizza"
                  onChange={(e) => setPizzaCount1(e.target.value)}
                >{`${pizzaCount1}`}</option>
                <button className="btn" onClick={PizzaCountIncre1}>
                  +
                </button>
                <p> = {pizzaCount1}</p>
              </div>

              <div className="d-flex">
                <th>Burger</th>
                <button className="btn" name="" onClick={BurgerCountDecre1}>
                  -
                </button>
                <option
                  value="Burger"
                  onChange={(e) => burgerCount1(e.target.value)}
                >{`${burgerCount1}`}</option>
                <button className="btn" onClick={BurgerCountIncre1}>
                  +
                </button>
                <p> = {burgerCount1}</p>
              </div>

              <div className="d-flex">
                <th>Chats</th>
                <button className="btn" onClick={ChatCountDecre1}>
                  -
                </button>
                <td>
                  <option
                    value="Chats"
                    onChange={(e) => setChatCount1(e.target.value)}
                  >{`${chatCount1}`}</option>
                </td>
                <button className="btn" onClick={ChatCountIncre1}>
                  +
                </button>
                <p> = {chatCount1}</p>
              </div>
            </div>
          </div>

          <div className=" m-3 p-4">
            <h2>Beverages</h2>
            <div className="form-control">
              <div className="d-flex">
                <th>Coffe</th>
                <button className="btn" name="" onClick={CoffeCountDecre1}>
                  -
                </button>
                <option
                  value="Coffe"
                  onChange={(e) => coffeCount1(e.target.value)}
                >{`${coffeCount1}`}</option>
                <button className="btn" onClick={CoffeCountIncre1}>
                  +
                </button>
                <p> = {coffeCount1}</p>
              </div>

              <div className="d-flex">
                <th>Tea</th>
                <button className="btn" name="" onClick={TeaCountDecre1}>
                  -
                </button>
                <option
                  value="Tea"
                  onChange={(e) => teaCount1(e.target.value)}
                >{`${teaCount1}`}</option>
                <button className="btn" onClick={TeaCountIncre1}>
                  +
                </button>
                <p> = {teaCount1}</p>
              </div>

              <div className="d-flex">
                <th>Cooldrink</th>
                <button className="btn" name="" onClick={CoolDrinkCountDecre1}>
                  -
                </button>
                <option
                  value="Cool Drink"
                  onChange={(e) => coolDrinkCount1(e.target.value)}
                >{`${coolDrinkCount1}`}</option>
                <button className="btn" onClick={CoolDrinkCountIncre1}>
                  +
                </button>
                <p> = {coolDrinkCount1}</p>
              </div>
            </div>
          </div>
          <div />
          </div>

<button onClick={Submit} type="button" className="btn btn-success">
              Submit
            </button>
        {/* <button to='/' type="button" className="btn btn-success">Submit</button> */}

        

        <button
          type="submit"
          className="btn btn-success"
          style={{ marginLeft: "10px" }}
          onClick={() => setVisible(true)}
        >
          Submit
        </button>
      </div>

      <div>
        <Modal
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 1020,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(255, 255, 255, 0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              background: "white",
              width: "45rem",
              maxWidth: "calc(100vw - 2rem)",
              maxHeight: "calc(100vh - 2rem)",
              overflowY: "auto",
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "0.3rem",
            },
          }}
        >
          <h1>Success</h1>
          <p>
            Your Order has been submitted! <br />
            Thank you.{" "}
          </p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setVisible(false)}
          >
            OK
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
