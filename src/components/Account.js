import { useState } from "react";
const Account = (props) => {
  const { UserName, Password, ConfirmPassword } = props.signupForm;

  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [cnfpassword, setcnfpassword] = useState();
  const [errorUser, seterrorUser] = useState("");
 const [errorPass , seterrorPass] = useState("");
 const [errorCnfPass,setErrorCnfPass]=useState("");

  const userNameValidate = () => {
    if (Username.length <= 3 || Username.length > 50) {
      seterrorUser("Full name should be between 3 and 50 characters.");
    } else {
      seterrorUser("");
      return true;
    }
   
  };
  const passwordValidate = () => {
    if (password.length < 6 || password.length > 50) {
      seterrorPass("Full password should be between 6 and 50 characters.");
    } else {
      seterrorPass("");
      return true;
    }
    // you can add more condition here
  };
  const cnfpasswordValidate = () => {
    if (password !== cnfpassword) {
      setErrorCnfPass("password doesn't match");
    } else {
      setErrorCnfPass("");
      if (passwordValidate && userNameValidate) {
      handleInputChange();
    }
    }
    // you can add more condition here
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    setIsButtonDisabled(false);
  };
  const handleSubmit = () => {
    console.log(props);
    console.log("submit");
    alert("form submitted");
  }
    return (<>
      <div>
       
       <h2 className="text-md font-bold mb-4 text-center font-serif text-white ">Account Setup</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-md font-medium text-white " >Username</label>
    <input
          type="text"
          className="mt-2 p-2 border 
             'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Username"
          onBlur={userNameValidate}
            value={UserName}
            onChange={(e) => {
              setUsername(e.target.value);
              props.handleChange(e);
            }}
          name="UserName"
        />
        <h1 style={{color:"red"}}>{errorUser}</h1>
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="text-md font-bold mb-4 text-center text-white font-serif">Password</label>
    <input
          type="password"
          className="mt-2 p-2 border 
            'border-red-500' : 'border-gray-300'rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Password"
          onBlur={passwordValidate}
            value={Password}
            onChange={(e) => {
              setpassword(e.target.value);
              props.handleChange(e);
            }}
          name="Password"
        />
     <h1 style={{color:"red"}}>{errorPass}</h1>
  </div>
  <div className="mb-3">
  <label htmlFor="last_name" className="text-md font-bold mb-4 text-center text-white font-serif">Password</label>
  <input
          type="password"
          className="mt-2 p-2 border 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Confirm Password"
          onBlur={cnfpasswordValidate}
            value={ConfirmPassword}
            onChange={(e) => {
              setcnfpassword(e.target.value);
              props.handleChange(e);
            }}
          name="ConfirmPassword"
        />
     <h1 style={{color:"red"}}>{errorCnfPass}</h1>
  </div>
      </div>
      <button className="float-left focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.back}
    >
    Back
  </button>
    <button
    disabled={isButtonDisabled}
    className="float-right focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={handleSubmit}
    >
    Submit
  </button>
  </>
    )
  }
  
  export default Account