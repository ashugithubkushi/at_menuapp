import React, { useState } from 'react'

function Abouut() {
    
const [count, setCount] = useState(0);
handleIncrement = () => {
  setCount(count + 1);
}
handleDecrement = () => {
  setCount(count + 1);
}

   
  
    return (
      
      <div className='d-flex justify-content-center align-items-center' style={{height: "100px"}}>
<div>
  <h1 className='text-center' style={{fontSize: "70px"}}>{count}</h1>
  <div className='d-flex'>
    <button onClick={handleIncrement} className='btn btn-success me-3'>+</button>
    <button onClick={handleDecrement} className='btn btn-danger me-3'>-</button>
     </div>
</div>
      </div>
    );
  }
  
  
export default Abouut



// class Abouut extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Childrens: '',
//       snacks: '',
//       drinks: '',
//       totalcount: '',
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }


  // const handleItemCountChange = (newCount) => {
  //   setItemCount(newCount);
  // };
  
  // const handleUserCountChange = (newCount) => {
  //   setUserCount(newCount);
  // };

//   render () {
//   return (
//       <div>
//         <form action="">
          
//           <label className="m-3 p-4">
//             <h5>Elders</h5>
//             <input type="number" name="elders" onChange={this.handleInputChange} />
//           </label>

       

//         <label className="m-3 p-4">
//         <h5>Snacks</h5>
//           <select type="dropdown" name="snacks" onChange={this.handleInputChange}>
//               <option value="N/A">N/A</option>
//               <option value="Pizza">Pizza</option>
//               <option value="Burger">Burger</option>
//               <option value="Chats">Chats</option>
//               </select>
//         </label>

//         <label className="m-3 p-4">
//             <h5>Drinks</h5>
//             <select type="dropdown" name="drinks" onChange={this.handleInputChange}>
//               <option value="N/A">N/A</option>
//               <option value="Coffe">Coffe</option>
//               <option value="Tea">Tea</option>
//               <option value="Cool drink">Cool drink</option>
//               </select>
//           </label>



//           <label className="m-3 p-4">
//             <h5>Item count</h5>
//             <input type="number" name="itemcount" onChange={this.handleInputChange} />
//           </label>
//              </form>

//         <div>
//           <h2>Your Input:</h2>
//           <p>Elder: {this.state.elders}</p>
//           <p>Snacks: {this.state.snacks}</p>
//           <p>Snacks: {this.state.drinks}</p>
//           <p>Snacks: {this.state.itemcount}</p>
//         </div>

//         </div>
//   )
// }
// }

// export default Abouut


// import React from 'react'

  // render () {
  // return (

      
      {/* <form className="formdata">
          
          <label className="m-3 p-4">
            <h5>Childrens</h5>
            <input type="number" name="elders" onChange={this.handleInputChange} />
          </label>

       

        <label className="m-3 p-4">
        <h5>Snacks</h5>
          <select type="dropdown" name="snacks" onChange={this.handleInputChange}>
              <option value="N/A">N/A</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Chats">Chats</option>
              </select>
        </label>

        <label className="m-3 p-4">
            <h5>Drinks</h5>
            <select type="dropdown" name="drinks" onChange={this.handleInputChange}>
              <option value="N/A">N/A</option>
              <option value="Coffe">Coffe</option>
              <option value="Tea">Tea</option>
              <option value="Cool drink">Cool drink</option>
              </select>
          </label>



          <label className="m-3 p-4">
            <h5>Item count</h5>
            <input type="number" name="itemcount" onChange={this.handleInputChange} />
          </label>
             

        <div>
          <h2>Selected data</h2>
          <p>Children: {this.state.childrens}</p>
          <p>Snacks: {this.state.snacks}</p>
          <p>Snacks: {this.state.drinks}</p>
          <p>Snacks: {this.state.itemcount}</p>
        </div>
  </form> */}
      
  









//     )
//   }
// }

// export default Abouut


