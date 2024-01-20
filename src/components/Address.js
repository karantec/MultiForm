import { useState } from "react";

const Address = (props) => {
  console.log(props)
  const { Street_Address, City, State, ZipCode } = props.signupForm;
  const [address, setaddress] = useState("");

  const addressValidate = () => {
    console.log(address);
    if (address.trim() === "") {
      alert("Enter Valid address");
    }

    else if (address.length <= 3) {
      alert("Full address should be between 3 and 50 characters.");
    }
    else{
      return true;
    }
  };
  const [city, setcity] = useState("");
  const cityValidate = () => {
    console.log(city);
    if (city.trim() === "") {
      alert("Enter Valid city");
    }

    else if (city.length <= 3) {
      alert("Full city should be between 3 and 50 characters.");
    }
    else{
      if(addressValidate){
        handleInputChange()
      }
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {


    setIsButtonDisabled(false);
  };
    return (
      <>
      <div>
      
       <h2 className="text-2xl font-bold mb-4">Address Information</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Street Address</label>
    <input
          required
          type="text"
          className="mt-1 p-2 border border-red-500' : 'border-gray-300'  rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Street Address"
          onBlur={addressValidate}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
          name="Street_Address"
        />
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">City</label>
    <input
          required
          type="text"
          className="mt-1 p-2 border  'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="City"
          onBlur={cityValidate}
          onChange={(e) => {
            setcity(e.target.value);
          }}
          name="City"
        />
      
  </div>
  <label htmlFor="State" className="block text-sm font-medium text-gray-700">State</label>
  <select
       className="form-select mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        name="State"
        value={State}
        onChange={props.handleChange}
        placeholder="State"
  >
    <option value="Jharkhand">Jharkhand </option>
    <option value="Delhi">Delhi</option>
    <option value="Noida">Noida</option>
  </select>

  <div className="mb-3">
    <label htmlFor="Zip Code" className="block text-sm font-medium text-gray-700">Zip Code</label>
    <input
          required
          type="Number"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Zip Code"
          name="ZipCode"
        />
  </div>
      </div>
      <button
    
    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.back}
  >
    Back
  </button>
    <button
    disabled={isButtonDisabled}
    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.next}
  >
    Next
  </button>
  
      </>
    )
  }
  
  export default Address