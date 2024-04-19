// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import IncDec from './IncDec';
// import DropdownPerson from './DropdownPerson';
// import './both.css';

// const App = () => {
//   const [selectedPerson, setSelectedPerson] = useState('');

//     const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
//     const [selectedIncrementValue, setSelectedIncrementValue] = useState(1);
//     const [isDropdownSelected, setIsDropdownSelected] = useState(false);
//     const [isIncrementSelected, setIsIncrementSelected] = useState(false);
//     const [submittedValues, setSubmittedValues] = useState([]);

//     const Submit = (e) => {
//         e.preventDefault();
//         // setSelectedDropdownValue('');
//         // setSelectedIncrementValue(1);
//         // setIsDropdownSelected('');
//         // setIsIncrementSelected('');
//         console.log(submittedValues);
//         alert('values submitted');
//     }

//     const handleDropdownChange = (value) => {
//       setSelectedDropdownValue(value);
//       setIsDropdownSelected(value !== '');
//     };

//     const handleIncrementChange = (value) => {
//       setSelectedIncrementValue(value);
//       setIsIncrementSelected(true);
//     };

//     const handleSubmit = () => {
//       if (isDropdownSelected && isIncrementSelected) {
//         const newSubmittedValue = {
//           person:selectedPerson,
//           dropdownValue: selectedDropdownValue,
//           incrementValue: selectedIncrementValue
//         };
//         setSubmittedValues([...submittedValues, newSubmittedValue]);
//         setSelectedDropdownValue('');
//         setSelectedIncrementValue(1);
//         setIsDropdownSelected(false);
//         setIsIncrementSelected(false);
//       } else {
//         alert('Please select both dropdown and increment/decrement values.');
//       }
//  };

// // const handleSubmit = () => {
// //   if (isDropdownSelected && isIncrementSelected) {
// //     const newSubmittedValue = {
// //       Person: selectedDropdownValue, // Add selected dropdown value to "Person"
// //       Snack: selectedIncrementValue
// //     };
// //     setSubmittedValues([...submittedValues, newSubmittedValue]);
// //     setSelectedDropdownValue('');
// //     setSelectedIncrementValue(1);
// //     setIsDropdownSelected(false);
// //     setIsIncrementSelected(false);
// //   } else {
// //     alert('Please select both dropdown and increment/decrement values.');
// //   }
// // };

// const handlePersonChange = (value) => {
//   setSelectedPerson(value);
// };

//     return (
//       <div className="app">

// {/* <h1>Dropdown Example</h1> */}
//       {/* <DropdownPerson onChange={handlePersonChange} /> */}
//       {/* <p>Selected Person: {selectedPerson}</p> */}
//     {/* </div> */}

// <h1>Elders</h1>
//         <div className="dropdown-container">
//           <Dropdown label="Dropdown" onChange={handleDropdownChange} />
//           <IncDec label="Increment/Decrement" onChange={handleIncrementChange} />
//           <button onClick={handleSubmit} type="button" className="btn btn-success" disabled={!isDropdownSelected || !isIncrementSelected}>
//             Submit
//           </button>

//           <hr />
//         </div>
//         <div className="submitted-values">
//           <h2>Total snack count</h2>
//           <table>
//             <thead>
//               <tr>
//                 {/* <th>Key Index</th> */}
//                 <th>Person</th>
//                 <th>Snack</th>
//                 <th>Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedValues.map((value, index) => (
//                 <tr key={index}>
//                   {/* <td>{index}</td> */}
//                   <td>{value.person}</td>
//                   <td>{value.dropdownValue}</td>
//                   <td>{value.incrementValue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <br />

//           <button onClick={Submit} type="button" className="btn btn-success">
//               Submit
//             </button>
//         </div>

//         <hr />
//         <hr />
//         <h1>Childrens</h1>
//         <div className="dropdown-container">
//           <Dropdown label="Dropdown" onChange={handleDropdownChange} />
//           <IncDec label="Increment/Decrement" onChange={handleIncrementChange} />
//           <button onClick={handleSubmit} type="button" className="btn btn-success" disabled={!isDropdownSelected || !isIncrementSelected}>
//             Submit
//           </button>

//           <hr />
//         </div>
//         <div className="submitted-values">
//           <h2>Total snack count</h2>
//           <table>
//             <thead>
//               <tr>
//                 {/* <th>Key Index</th> */}
//                 <th>Person</th>
//                 <th>Snack</th>
//                 <th>Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedValues.map((value, index) => (
//                 <tr key={index}>
//                   {/* <td>{index}</td> */}
//                   <td>{value.person}</td>
//                   <td>{value.dropdownValue}</td>
//                   <td>{value.incrementValue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <br />

//           <button onClick={Submit} type="button" className="btn btn-success">
//               Submit
//             </button>
//         </div>

//       </div>
//     );
//   };

//   export default App;

// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import IncDec from './IncDec';
// // import DropdownPerson from './DropdownPerson';
// import './both.css';

// const App = () => {
//   const [selectedElderDropdownValue, setSelectedElderDropdownValue] = useState('');
//   const [selectedElderIncrementValue, setSelectedElderIncrementValue] = useState(1);
//   const [isElderDropdownSelected, setIsElderDropdownSelected] = useState(false);
//   const [isElderIncrementSelected, setIsElderIncrementSelected] = useState(false);
//   const [submittedElderValues, setSubmittedElderValues] = useState([]);

//   const [selectedChildrenDropdownValue, setSelectedChildrenDropdownValue] = useState('');
//   const [selectedChildrenIncrementValue, setSelectedChildrenIncrementValue] = useState(1);
//   const [isChildrenDropdownSelected, setIsChildrenDropdownSelected] = useState(false);
//   const [isChildrenIncrementSelected, setIsChildrenIncrementSelected] = useState(false);
//   const [submittedChildrenValues, setSubmittedChildrenValues] = useState([]);

//   const [submittedValues, setSubmittedValues] = useState([]);
//   //
//   const Submit = (e) => {
//             e.preventDefault();
//             // setSelectedDropdownValue('');
//             // setSelectedIncrementValue(1);
//             // setIsDropdownSelected('');
//             // setIsIncrementSelected('');
//             console.log(submittedElderValues);
//             // console.log(submittedChildrenValues);
//             alert('Elders value submitted');
//         }

//   const Submit1 = (e) => {
//             e.preventDefault();
//             // setSelectedDropdownValue('');
//             // setSelectedIncrementValue(1);
//             // setIsDropdownSelected('');
//             // setIsIncrementSelected('');
//             // console.log(submittedElderValues);
//             console.log(submittedChildrenValues);
//             alert('Childrens value submitted');
//         }

//   const handleElderDropdownChange = (value) => {
//     setSelectedElderDropdownValue(value);
//     setIsElderDropdownSelected(value !== '');
//   };

//   const handleElderIncrementChange = (value) => {
//     setSelectedElderIncrementValue(value);
//     setIsElderIncrementSelected(true);
//   };

//   const handleChildrenDropdownChange = (value) => {
//     setSelectedChildrenDropdownValue(value);
//     setIsChildrenDropdownSelected(value !== '');
//   };

//   const handleChildrenIncrementChange = (value) => {
//     setSelectedChildrenIncrementValue(value);
//     setIsChildrenIncrementSelected(true);
//   };

//   const handleElderSubmit = () => {
//     if (isElderDropdownSelected && isElderIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedElderDropdownValue,
//         incrementValue: selectedElderIncrementValue
//       };
//       setSubmittedElderValues([...submittedElderValues, newSubmittedValue]);
//       setSelectedElderDropdownValue('');
//       setSelectedElderIncrementValue(1);
//       setIsElderDropdownSelected(false);
//       setIsElderIncrementSelected(false);
//     } else {
//       alert('Please select both dropdown and increment/decrement values for elders.');
//     }
//   };

//   const handleChildrenSubmit = () => {
//     if (isChildrenDropdownSelected && isChildrenIncrementSelected) {
//       const newSubmittedValue = {
//         dropdownValue: selectedChildrenDropdownValue,
//         incrementValue: selectedChildrenIncrementValue
//       };
//       setSubmittedChildrenValues([...submittedChildrenValues, newSubmittedValue]);
//       setSelectedChildrenDropdownValue('');
//       setSelectedChildrenIncrementValue(1);
//       setIsChildrenDropdownSelected(false);
//       setIsChildrenIncrementSelected(false);
//     } else {
//       alert('Please select both dropdown and increment/decrement values for children.');
//     }
//   };

//   return (
//     <div className="app">
//       <div className="dropdown-container">
//         <h1>Elders</h1>
//         <Dropdown label="Dropdown" onChange={handleElderDropdownChange} />
//         <IncDec label="Increment/Decrement" onChange={handleElderIncrementChange} />
//         <button onClick={handleElderSubmit} type="button" className="btn btn-success" disabled={!isElderDropdownSelected || !isElderIncrementSelected}>
//           Submit
//         </button>
//       </div>
//       <div className="submitted-values">
//         <h4>Total count for Elders</h4>

//         <table className="bordered-table">
//   <thead>
//     <tr>
//       <th>Total</th>
//       <th>Count</th>
//     </tr>
//   </thead>
//   <tbody>
//     {submittedElderValues.map((value, index) => (
//       <tr key={index}>
//         <td>{value.dropdownValue}</td>
//         <td>{value.incrementValue}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
//         <br />
//         <button onClick={Submit} type="button" className="btn btn-success">
//                Submit
//              </button>
//       </div>
//       <hr />
//       <hr />
//       <div className="dropdown-container">
//         <h1>Childrens</h1>
//         <Dropdown label="Dropdown" onChange={handleChildrenDropdownChange} />
//         <IncDec label="Increment/Decrement" onChange={handleChildrenIncrementChange} />
//         <button onClick={handleChildrenSubmit} type="button" className="btn btn-success" disabled={!isChildrenDropdownSelected || !isChildrenIncrementSelected}>
//           Submit
//         </button>
//       </div>
//       <div className="submitted-values">
//         <h2>Total count for Children</h2>
//         <table className='bordered-table'>
//           <thead>
//             <tr>
//               <th>Total</th>
//               <th>Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedChildrenValues.map((value, index) => (
//               <tr key={index}>
//                 <td>{value.dropdownValue}</td>
//                 <td>{value.incrementValue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <button onClick={Submit1} type="button" className="btn btn-success">
//                Submit
//              </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import IncDec from "./IncDec";
import "./both.css";

const App = () => {
  const [selectedElderDropdownValue, setSelectedElderDropdownValue] =
    useState("");
  const [selectedElderIncrementValue, setSelectedElderIncrementValue] =
    useState(1);
  const [isElderDropdownSelected, setIsElderDropdownSelected] = useState(false);
  const [isElderIncrementSelected, setIsElderIncrementSelected] =
    useState(false);
  const [submittedElderValues, setSubmittedElderValues] = useState([]);

  const [selectedChildrenDropdownValue, setSelectedChildrenDropdownValue] =
    useState("");
  const [selectedChildrenIncrementValue, setSelectedChildrenIncrementValue] =
    useState(1);
  const [isChildrenDropdownSelected, setIsChildrenDropdownSelected] =
    useState(false);
  const [isChildrenIncrementSelected, setIsChildrenIncrementSelected] =
    useState(false);
  const [submittedChildrenValues, setSubmittedChildrenValues] = useState([]);


  //Submit
  const Submit = (e) => {
    e.preventDefault();
    // const confirmed = window.confirm("Are you sure you want to submit?");
    // 
    if (submittedElderValues.length === 0) {
      alert("Please fill in the details before submitting.");
    } else {
      // Proceed with submitting the form
      console.log(submittedElderValues);
      alert('Elders value submitted');
      setSubmittedElderValues([]); // Clear submitted elder values
      setSubmittedChildrenValues([]); // Clear submitted children values
    }
    
    // if (confirmed) {
    //   console.log(submittedElderValues);
    //   alert('Elders value submitted');
    // } else {
    //   //
    // }
  };

  //Submit1
  // const Submit1 = (e) => {
  //   e.preventDefault();
  //   const confirmed = window.confirm("Are you sure you want to submit?");
  //   if (confirmed) {
  //     console.log(submittedElderValues);
  //     alert('Childrens value submitted');
  //   } else {
  //     //
  //   }
  // };
  const Submit1 = (e) => {
    e.preventDefault();
    // const confirmed = window.confirm("Are you sure you want to submit?");
    // 
    if (submittedChildrenValues.length === 0) {
      alert("Please fill in the details before submitting.");
    } else {
      // Proceed with submitting the form
      console.log(submittedElderValues);
      alert('Childrens value submitted');
      setSubmittedElderValues([]); // Clear submitted elder values
      setSubmittedChildrenValues([]); // Clear submitted children values
    }
    
    // if (confirmed) {
    //   console.log(submittedElderValues);
    //   alert('Elders value submitted');
    // } else {
    //   //
    // }
  };

  const handleElderDropdownChange = (value) => {
    setSelectedElderDropdownValue(value);
    setIsElderDropdownSelected(value !== "");
  };

  const handleElderIncrementChange = (value) => {
    setSelectedElderIncrementValue(value);
    setIsElderIncrementSelected(true);
  };

  const handleChildrenDropdownChange = (value) => {
    setSelectedChildrenDropdownValue(value);
    setIsChildrenDropdownSelected(value !== "");
  };

  const handleChildrenIncrementChange = (value) => {
    setSelectedChildrenIncrementValue(value);
    setIsChildrenIncrementSelected(true);
  };

  const handleElderSubmit = () => {
    if (isElderDropdownSelected && isElderIncrementSelected) {
      const newSubmittedValue = {
        dropdownValue: selectedElderDropdownValue,
        incrementValue: selectedElderIncrementValue,
      };
      setSubmittedElderValues([...submittedElderValues, newSubmittedValue]);
      setSelectedElderDropdownValue("");
      setSelectedElderIncrementValue(1);
      setIsElderDropdownSelected(false);
      setIsElderIncrementSelected(false);
    } else {
      alert(
        "Please select both dropdown and increment/decrement values for elders."
      );
    }
  };

  const handleChildrenSubmit = () => {
    if (isChildrenDropdownSelected && isChildrenIncrementSelected) {
      const newSubmittedValue = {
        dropdownValue: selectedChildrenDropdownValue,
        incrementValue: selectedChildrenIncrementValue,
      };
      setSubmittedChildrenValues([
        ...submittedChildrenValues,
        newSubmittedValue,
      ]);
      setSelectedChildrenDropdownValue("");
      setSelectedChildrenIncrementValue(1);
      setIsChildrenDropdownSelected(false);
      setIsChildrenIncrementSelected(false);
    } else {
      alert(
        "Please select both dropdown and increment/decrement values for children."
      );
    }
  };

  // count change
  const handleCountChange = (index, newValue, isElder) => {
    if (isElder) {
      const updatedElderSubmittedValues = [...submittedElderValues];
      updatedElderSubmittedValues[index].incrementValue = newValue;
      setSubmittedElderValues(updatedElderSubmittedValues);
    } else {
      const updatedChildrenSubmittedValues = [...submittedChildrenValues];
      updatedChildrenSubmittedValues[index].incrementValue = newValue;
      setSubmittedChildrenValues(updatedChildrenSubmittedValues);
    }
  };

  //delete
  const handleDeleteRow = (index, isElder) => {
    if (isElder) {
      const updatedElderSubmittedValues = [...submittedElderValues];
      updatedElderSubmittedValues.splice(index, 1);
      setSubmittedElderValues(updatedElderSubmittedValues);
    } else {
      const updatedChildrenSubmittedValues = [...submittedChildrenValues];
      updatedChildrenSubmittedValues.splice(index, 1);
      setSubmittedChildrenValues(updatedChildrenSubmittedValues);
    }
  };

  return (
    <div className="app">
      <div className="dropdown-container">
        <h1>Elders</h1>
        <Dropdown label="Dropdown" onChange={handleElderDropdownChange} />
        <hr />
        <IncDec
          label="Increment/Decrement"
          onChange={handleElderIncrementChange}
        />
        <button
          onClick={handleElderSubmit}
          type="button"
          className="btn btn-success"
          disabled={!isElderDropdownSelected || !isElderIncrementSelected}
        >
          Submit
        </button>
        <hr />
      </div>
      <div className="submitted-values">
        <h4>Total count for Elders</h4>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Item-name</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedElderValues.map((value, index) => (
              <tr key={index}>
                <td>{value.dropdownValue}</td>
                {/* <td>{value.incrementValue}</td> */}
                <td>
                  <input
                    type="number"
                    value={value.incrementValue}
                    onChange={(e) =>
                      handleCountChange(index, e.target.value, true)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(index, true)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button onClick={Submit} type="button" className="btn btn-success">
          Submit
        </button>
      </div>
      <hr />
      <hr />
      <div className="dropdown-container">
        <h1>Children</h1>
        <Dropdown label="Dropdown" onChange={handleChildrenDropdownChange} />
        <IncDec
          label="Increment/Decrement"
          onChange={handleChildrenIncrementChange}
        />
        <button
          onClick={handleChildrenSubmit}
          type="button"
          className="btn btn-success"
          disabled={!isChildrenDropdownSelected || !isChildrenIncrementSelected}
        >
          Submit
        </button>
      </div>
      <div className="submitted-values">
        <h4>Total count for Children</h4>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Item-name</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedChildrenValues.map((value, index) => (
              <tr key={index}>
                <td>{value.dropdownValue}</td>
                {/* <td>{value.incrementValue}</td> */}
                <td>
                  <input
                    type="number"
                    value={value.incrementValue}
                    onChange={(e) =>
                      handleCountChange(index, e.target.value, false)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(index, false)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button onClick={Submit1} type="button" className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
