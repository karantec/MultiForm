import { useState } from "react";

const Address = (props) => {
  console.log(props)
  const { Street_Address, City, ZipCode } = props.signupForm;
  const [address, setaddress] = useState(Street_Address);
  const [city, setcity] = useState(City);
  let checkpoint = true;
  if(Street_Address !== '' && City !== '' && ZipCode !== ''){
    checkpoint =false;
  }
  const [isButtonDisabled, setIsButtonDisabled] = useState(checkpoint);

  
  const [errorStreet,setErrorStreet]=useState("");
  const [errorCity,setErrorCity]=useState("");


 const addressValidate = () => {
    if (address.trim() === "") {
      setErrorStreet("Enter Valid address");
    } else if (address.length <= 3) {
      setErrorStreet("Full address should be between 3 and 50 characters.");
    } else {
      setErrorStreet("");
      return true;
    }
  };
  const cityValidate = () => {
    if (city.trim() === "") {
      setErrorCity("Enter Valid city");
    } else if (city.length <= 3) {
      setErrorCity("Full city should be between 3 and 50 characters.");
    } else {
      setErrorCity("");
      if (addressValidate) {
        handleInputChange();
      }
    }
  };

  

  const handleInputChange = () => {
    props.signupForm.Street_Address = address;
    props.signupForm.City = city;

    setIsButtonDisabled(false);
  };

    return (
      <>
      <div>
      
       <h2 className="text-2xl font-bold mb-4 text-white">Address Information</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-sm font-medium text-white">Street Address</label>
    <input
          required
          type="text"
          className="mt-2 p-2 border border-red-500' : 'border-gray-300'  rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Street Address"
          onBlur={addressValidate}
            value={Street_Address}
            onChange={(e) => {
              setaddress(e.target.value);
              props.handleChange(e);
            }}
            name="Street_Address"
        />
         <h1 style={{color:"red"}}>{errorStreet}</h1>
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="block text-sm font-medium text-white">City</label>
    <input
          required
          type="text"
          className="mt-2 p-2 border  'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="City"
          onBlur={cityValidate}
            value={City}
            onChange={(e) => {
              setcity(e.target.value);
              props.handleChange(e);
            }}
            name="City"
        />
         <h1 style={{color:"red"}}>{errorCity}</h1>
      
  </div>
  <label htmlFor="State" className="block text-sm font-medium text-white">State</label>
  <select
       className="form-select mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        name="State"
        onChange={props.handleChange}
        placeholder="State"
  >
    <option value="Jharkhand">Jharkhand </option>
    <option value="Delhi">Delhi</option>
    <option value="Noida">Noida</option>
  </select>

  <div className="mb-3">
    <label htmlFor="Zip Code" className="block text-sm font-medium text-white">Zip Code</label>
    <input
          required
          type="Number"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Zip Code"
          name="ZipCode"  value={ZipCode}
            onChange={props.handleChange}
        />
        
  </div>
      </div>
      
      <button
    
    className=" float-left focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.back}
  >
    Back
  </button>
    <button
    disabled={isButtonDisabled}
    className="float-right focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.next}
  >
    Next
  </button>
  
  
      </>
    )
  }
  
  export default Address