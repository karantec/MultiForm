
const Address = (props) => {
  console.log(props)
  const {Street_Address,City,State,ZipCode}=props.signupForm;
    return (
      <div>
      
       <h2 className="text-2xl font-bold mb-4">Address Information</h2>
  <div className="mb-3">
    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Street Address</label>
    <input
      type="text"
      className="mt-1 p-2 border border-red-500' : 'border-gray-300'  rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
     placeholder="Street Address" value={Street_Address} onChange={props.handleChange} name='Street_Address'
    />
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">City</label>
    <input
      type="text"
      className="mt-1 p-2 border  'border-red-500' : 'border-gray-300'
          rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      placeholder="City" value={City} onChange={props.handleChange} name='City'
    />
      
  </div>
  <label htmlFor="State" className="block text-sm font-medium text-gray-700">State</label>
  <select
    className="form-select mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    name='State' value={State} onChange={props.handleChange} placeholder='State'
  >
    <option value="Jharkhand">Jharkhand </option>
    <option value="Delhi">Delhi</option>
    <option value="Noida">Noida</option>
  </select>

  <div className="mb-3">
    <label htmlFor="Zip Code" className="block text-sm font-medium text-gray-700">Zip Code</label>
    <input
      type="number"
      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
      placeholder="Zip Code" value={ZipCode} onChange={props.handleChange} name='ZipCode'
    />
  </div>
      </div>
    )
  }
  
  export default Address