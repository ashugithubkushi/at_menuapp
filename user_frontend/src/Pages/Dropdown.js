



// import React, { useState } from 'react';
// // import './Dropdown.css';

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState('Pizza');

//   const handleChange = (e) => {
//     setSelectedValue(e.target.value);
//   };

//   return (
//     <div className="dropdown">
//       <select value={selectedValue} onChange={handleChange}>
//         <option value={'Pizza'}>Pizza</option>
//         <option value={'Burger'}>Burger</option>
//         <option value={'Chat'}>Chat</option>
//         {/* Add more options as needed */}
//       </select>
//       <p>Selected Dropdown Value: {selectedValue}</p>
//     </div>
//   );
// };

// const IncrementDecrement = () => {
//   const [value, setValue] = useState(1);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   const handleDecrement = () => {
//     if (value > 1) {
//       setValue(value - 1);
//     }
//   };

//   return (
//     <div>
//       <button className="decrement" onClick={handleDecrement}>-</button>
//       <span>{value}</span>
//       <button className="increment" onClick={handleIncrement}>+</button>
//       <p>Selected Increment/Decrement Value: {value}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       <Dropdown />
//       <IncrementDecrement />
//     </div>
//   );
// };

// export default App;






// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [selectedValues, setSelectedValues] = useState([]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSelectedValues((prevValues) => [...prevValues, value]);
//   };

//   return (
//     <div className="dropdown">
//       <select onChange={handleChange}>
//         <option value={'a'}>Option A</option>
//         <option value={'b'}>Option B</option>
//         <option value={'c'}>Option C</option>
//         {/* Add more options as needed */}
//       </select>
//       <div>
//         <p>Selected Dropdown Values:</p>
//         <ul>
//           {selectedValues.map((value, index) => (
//             <li key={index}>{value}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const IncrementDecrement = () => {
//   const [value, setValue] = useState(1);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   const handleDecrement = () => {
//     if (value > 1) {
//       setValue(value - 1);
//     }
//   };

//   return (
//     <div className="increment-decrement">
//       <button className="decrement" onClick={handleDecrement}>-</button>
//       <span>{value}</span>
//       <button className="increment" onClick={handleIncrement}>+</button>
//       <p>Selected Increment/Decrement Value: {value}</p>
//     </div>
//   );
// };

// const App = () => {
//     const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
//     const [selectedIncrementValue, setSelectedIncrementValue] = useState(1);
//     const [submittedValues, setSubmittedValues] = useState([]);
  
//     const handleDropdownChange = (value) => {
//       setSelectedDropdownValue(value);
//     };
  
//     const handleIncrementChange = (value) => {
//       setSelectedIncrementValue(value);
//     };
  
//     const handleSubmit = () => {
//       const newSubmittedValue = {
//         dropdownValue: selectedDropdownValue,
//         incrementValue: selectedIncrementValue
//       };
//       setSubmittedValues([...submittedValues, newSubmittedValue]);
//       setSelectedDropdownValue(''); // Reset dropdown value after submission
//       setSelectedIncrementValue(1); // Reset increment value after submission
//     };
  
//     return (
//       <div className="app">
//         <div className="dropdown-container">
//           <Dropdown label="Dropdown" onChange={handleDropdownChange} />
//           <IncrementDecrement label="Increment/Decrement" onChange={handleIncrementChange} />
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//         <div className="submitted-values">
//           <h2>Submitted Values</h2>
//           {submittedValues.map((value, index) => (
//             <div key={index}>
//               <p>{`Dropdown: ${value.dropdownValue} - Increment/Decrement: ${value.incrementValue}`}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default App;



// import React, { useState } from 'react';
// import './dropdown.css'

// const Dropdown = ({onChange }) => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [selectedValue1, setSelectedValue1] = useState('');

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSelectedValue(value);
//     onChange(value);
//   };
//   const handleChange1 = (e) => {
//     const value = e.target.value;
//     setSelectedValue1(value);
//     onChange(value);
//   };

//   return (
//     <div className="dropdown-container d-flex">
//   <div className="dropdown">
//     <h3>Snacks</h3>
//     <select value={selectedValue} onChange={handleChange}>
//       <option value="">Select an option</option>
//       <option value="Pizza">Pizza</option>
//       <option value="Burger">Burger</option>
//       <option value="Chat">Chat</option>
//     </select>
//     <p>Selected snack: {selectedValue}</p>
//   </div>
  
//   <div className="dropdown">
//     <h3>Beverages</h3>
//     <select value={selectedValue1} onChange={handleChange1}>
//       <option value="">Select an option</option>
//       <option value="Coffee">Coffee</option>
//       <option value="Tea">Tea</option>
//       <option value="Cool drink">Cool drink</option>
//     </select>
//     <p>Selected beverage: {selectedValue1}</p>
//   </div>
// </div>

//   );
// };

// export default Dropdown;



import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [snackOptions, setSnackOptions] = useState(["Pizza", "Burger", "Chat"]);
  const [beverageOptions, setBeverageOptions] = useState(["Coffee", "Tea", "Cool drink"]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
    setSnackOptions(snackOptions.filter(option => option !== value));
  };

  const handleChange1 = (e) => {
    const value = e.target.value;
    setSelectedValue1(value);
    onChange(value);
    setBeverageOptions(beverageOptions.filter(option => option !== value));
  };

  return (
    <div className="dropdown-container d-flex">
      <div className="dropdown">
        <h3>Snacks</h3>
        <select value={selectedValue} onChange={handleChange}>
          <option value="">Select an option</option>
          {snackOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Selected snack: {selectedValue}</p>
      </div>
      <div className="dropdown">
        <h3>Beverages</h3>
        <select value={selectedValue1} onChange={handleChange1}>
          <option value="">Select an option</option>
          {beverageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Selected beverage: {selectedValue1}</p>

      </div>
    </div>

    
  );
};

export default Dropdown;







