import React, { useState } from "react";

const PersonalInfo = (props) => {
  
  const { email, full_name } = props.signupForm;
  const [fullName, setFullName] = useState(full_name);
  const [Email, setEmail] = useState(email);
  
let checkpoint = true;
  if(email !== '' && full_name !== ''){
    checkpoint =false;
  }
  const[Dob,setDob]=useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(checkpoint);
  const [errorFull,setErrorFull] = useState("");
  const [errorEmail , setErrorEmail] = useState("");
  const [errorDob , setErrorDob] = useState("");

 
  const handleValidate = () => {
    if (fullName.trim() === "") {
      setErrorFull("Enter Valid name");
    } else if (fullName.length <= 3 || fullName.length > 50) {
      setErrorFull("Full name should be between 3 and 50 characters.");
    } else {
      setErrorFull("");
      return true;
    }
    // you can add more condition here
  };
  const EmailhandleValidate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(Email)) {
      setErrorEmail("Enter Proper Email");
    } else {
      setErrorEmail("");
      if (handleValidate) {
        handleInputChange();
      }
    }

    // you can add more condition here
  };
  const DobValidate = () => {
    if (Dob.trim() === "") {
      setErrorDob("Enter Enter valid Date of Birth");
    } else {
      setErrorDob("");
      return true;
    }
    // you can add more condition here
  };

  const handleInputChange = () => {
    setIsButtonDisabled(false);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4
         text-center">Personal Info</h2>
        <div className="mb-3">
          <label className="block text-sm font-medium text-black">
            Full Name
          </label>
          <input
            required
            type="text"
            className="mt-2 p-2 border  'border-red-500' : 'border-gray-300'
           rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            id="full_name"
            name="full_name"
            onBlur={handleValidate}
            value={full_name}
            onChange={(e) => {
              setFullName(e.target.value);
              props.handleChange(e);
            }}
            placeholder="Full Name"
          />
        </div>
        <h1 style={{color:"red"}}>{errorFull}</h1>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            required
            type="email"
            className="`mt-2 p-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
           rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            id="Email"
            name="email"
            placeholder="email"
            onBlur={EmailhandleValidate}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              props.handleChange(e);
            }}
          />
           <h1 style={{color:"red"}}>{errorEmail}</h1>
        </div>
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <label
            htmlFor="Date of Birth"
            className="block text-sm font-medium text-black"
          >
            Date of Birth
          </label>
          <input
            required
            type="date"
            className="bg-gray-50 border  mt-2 border-red-500' : 'border-gray-300'  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="DateofBirth"
            name="DateofBirth"
            onBlur={DobValidate}
            placeholder="Select date"
            onChange={(e) => {
              setDob(e.target.value);
              props.handleChange(e);
            }}
          />
           <h1 style={{color:"red"}}>{errorDob}</h1>
        </div>
      </div>
      <button
        disabled={isButtonDisabled}
        className="focus:outline-none mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={props.next}
      >
        Next
      </button>
    </>
  );
};

export default PersonalInfo;
