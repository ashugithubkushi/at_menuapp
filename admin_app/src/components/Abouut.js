import React, { useEffect , useState } from "react";
import axios from "axios";
import "./About.css";
// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

const Abouut = () => {
  // const navigate = useNavigate();

  // const [pizzaCount, setPizzaCount] = useState(0);
  // const [burgerCount, setBurgerCount] = useState(0);
  // const [chatCount, setChatCount] = useState(0);

  // const handleCountIncrement = () => {
  //   setPizzaCount(pizzaCount + 1);
  //   setBurgerCount(burgerCount + 1);
  //   setChatCount(chatCount + 1);
  // };

  // const handleCountDecrement = () => {
  //   setPizzaCount(pizzaCount - 1);
  //   setBurgerCount(burgerCount - 1);
  //   setChatCount(chatCount - 1);
  // };


//   const [formState, setFormState] = useState({ email: "", password: ""});
//   const {email, password} = formState;

// const handleChange = (e) => {
//   let value = e.target.value;
//   let name = e.target.name;


// setFormState((prev) => ({ ...prev, [name]: value}));
// };

// useEffect(() => {
//   const forms = JSON.parse(localStorage.getItem("user"));
//   if (email === "" && password === "") {
//     setFormState((prev)=> ({ ...prev, ...forms}));
//   }
// }, [email, password]);

// useEffect(() => {
//   localStorage.setItem("user" , JSON.stringify(formState));
// }, [email, password]);

// 1 
const [selectedOption, setSelectedOption] = useState(1)

useEffect(() => {
  const storedSelectedOption = parseInt(sessionStorage.getItem('selectedOption') || '1')
  setSelectedOption(storedSelectedOption)
}, [])

const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedOption(parseInt(e.target.value))
  sessionStorage.setItem('selectedOption', e.target.value)
}


  

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
      {/* <table className="border">
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
          style={{ backgroundColor: ""}}
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
      </table> */}



      {/* <select className="dropdown" name="chats">
        <option value="N/A"></option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Pizza - ${chatCount}`}</option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Burger - ${chatCount}`}</option>
       <option value="Chats" onChange={(e) => setChatCount(e.target.value)}>{`Chats - ${chatCount}`}</option>
       </select>  */}



       {/* side menu  */}
    {/* <div class="container">
        <header>
            <h1>My Website</h1>
            <button class="menu-toggle">
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
            </button>
        </header>
        <nav class="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <main>
            <p>Main content...</p>
        </main>
    </div> */}
    

    {/* side menu2  */}

{/* <body>
  <label htmlFor="">
    <input type="checkbox" />
    <div className="toggle">
      <span className="top_line common"></span>
      <span className="middle_line common"></span>
      <span className="bottom_line common"></span>
    </div>
    <div className="slide">
      <h1>Dashboard</h1>
      <ul>
        <li><a href="#"><i className=""></i>Ordered data</a></li>
        <li><a href="#"><i className=" "></i>Total data</a></li>
      </ul>
    </div>
  </label>
</body> */}


{/* dropdown  */}


    {/* <form>
      <label htmlFor="">Email
      <input type="email" name="email" placeholder="email" onChange={handleChange} value={email} />
      </label> 
      <hr />
      <label htmlFor="">Password
      <input type="password" name="password" placeholder="password" onChange={handleChange} value={password} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form> */}

    
    <select onChange={handleOnChange}>
    
      <option value="1" selected={selectedOption === 1}>Pending</option>
      <option value="2" selected={selectedOption === 2}>In progress</option>
      <option value="3" selected={selectedOption === 3}>Ordered</option>
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
