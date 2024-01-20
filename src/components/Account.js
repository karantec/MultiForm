import { useState } from "react";
const Account = (props) => {
  console.log(props);
  const { UserName, Password, ConfirmPassword } = false;

  const [Username, setUsername] = useState("");
  const userNameValidate = () => {
    if (Username.length <= 3 || Username.length > 50) {
      alert("Full name should be between 3 and 50 characters.");
    }else{
      return true;
    }
    // you can add more condition here
  };
  const [password, setpassword] = useState("");
  const passwordValidate = () => {
    console.log(password);
    if (password.length < 6 || password.length > 50) {
      alert("Full password should be between 6 and 50 characters.");
    }else{
      return true
    }
    // you can add more condition here
  };
  const [cnfpassword, setcnfpassword] = useState();
  const cnfpasswordValidate = () => {
    if (password !== cnfpassword) {
      alert("password doesn't match");
    }else if(passwordValidate && userNameValidate){
      handleInputChange();
    }
    // you can add more condition here
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    setIsButtonDisabled(false);
  };
  const handleSubmit = () => {
    alert("form submitted");
  }
    return (<>
      <div>
       
       <h2 className="text-2xl font-bold mb-4 text-center font-serif ">Account Setup</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-md font-medium text-black " >Username</label>
    <input
          type="text"
          className="mt-2 p-2 border 
             'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Username"
          onBlur={userNameValidate}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="UserName"
        />
       
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="block text-md  font-medium text-black">Password</label>
    <input
          type="password"
          className="mt-2 p-2 border 
            'border-red-500' : 'border-gray-300'rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Password"
          onBlur={passwordValidate}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          name="Password"
        />
    
  </div>
  <div className="mb-3">
  <label htmlFor="last_name" className="block text-md  font-medium text-black">Password</label>
  <input
          type="password"
          className="mt-2 p-2 border 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
          placeholder="Confirm Password"
          onBlur={cnfpasswordValidate}
          onChange={(e) => {
            setcnfpassword(e.target.value);
          }}
          name="ConfirmPassword"
        />
    
  </div>
      </div>
      <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={props.back}
    >
    Back
  </button>
    <button
    disabled={isButtonDisabled}
    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={handleSubmit}
    >
    Submit
  </button>
  </>
    )
  }
  
  export default Account