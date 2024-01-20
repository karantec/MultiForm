
const Account = (props) => {
  console.log(props);
  const {UserName, Password,ConfirmPassword}=props.signupForm;
  
    return (
      <div>
       
       <h2 className="text-2xl font-bold mb-4 text-center font-serif ">Account Setup</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-md font-medium text-black " >Username</label>
    <input
      type="text"
      className="mt-2 p-2 border 
             'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
     placeholder="Username" value={UserName} onChange={props.handleChange} name='UserName'
    />
       
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="block text-md  font-medium text-black">Password</label>
    <input
      type="password"
      className="mt-2 p-2 border 
            'border-red-500' : 'border-gray-300'rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      placeholder="Password" value={Password} onChange={props.handleChange} name='Password'
    />
    
  </div>
  <div className="mb-3">
  <label htmlFor="last_name" className="block text-md  font-medium text-black">Password</label>
    <input
      type="password"
      className="mt-2 p-2 border 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      placeholder="Confirm Password" value={ConfirmPassword} onChange={props.handleChange} name='ConfirmPassword'
    />
    
  </div>
  
  
      </div>
    )
  }
  
  export default Account