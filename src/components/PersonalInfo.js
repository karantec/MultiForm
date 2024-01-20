
const PersonalInfo = (props) => {
  console.log(props)
  const {full_name,email,DateofBirth}=props.signupForm;
 

    return (
      <div>
      
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
  <div className="mb-3">
    <label  className="block text-sm font-medium text-gray-700">Full Name</label>
    <input
      type="text"
       className="mt-1 p-2 border  'border-red-500' : 'border-gray-300'
           rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      id="full_name" name='full_name' value={full_name} onChange={props.handleChange} placeholder='Full Name'
    />
      
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      className="`mt-1 p-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
           rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      id="Email" name='email' placeholder='email' onChange={props.handleChange} value={email}
    />
    
  </div>
  <div className="relative max-w-sm">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
    </div>
    <label htmlFor="Date of Birth" className="block text-sm font-medium text-gray-700">Date of Birth</label> 
     <input
  type="date"
  className="bg-gray-50 border  border-red-500' : 'border-gray-300'  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  id="DateofBirth"
  name="DateofBirth"
  placeholder="Select date"
  onChange={props.handleChange}
  value={DateofBirth}
 
/>

  </div>
      </div>
    )
  }
  
  export default PersonalInfo