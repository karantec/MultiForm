// import Address from "./Address"
// import PersonalInfo from "./PersonalInfo"
import React, { useState} from 'react'
import Account from "./Account"
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";

const MutilForm = () => {
  

  const [signupForm,setSignUpForm] = React.useState({
    
    full_name:'',
    email:'',
    DateofBirth:'',
    Street_Address:'',
    City:'',
    State:'Jharkhand',
    ZipCode:'',
    UserName:'',
    Password:'',
    ConfirmPassword:'',

  })
 




  const [step, setStep]=useState(1);
  
  const nextStep=()=>{
    if(step===3){
    }else{
     setStep((prevStep)=>prevStep+1);
    
 }
}
const backStep=()=>{
  setStep((prevStep)=>prevStep-1);
 

}


  
  const handleChange=(e)=>{
   
    const name=e.target.name;
    const value=e.target.type==='checkbox'?e.target.checked:e.target.value;
    setSignUpForm({ ...signupForm, [name]: value });

  }


  return (
    <>
   <div>
  
   <div className= "bg-blue-500 hover:bg-blue-700  min-h-screen flex justify-center items-center">
  <div className="card p-3 w-1/2 mt-5 bg-white rounded-lg drop-shadow-md md:drop-shadow-xl">
  {
      {
        1: <PersonalInfo   signupForm={signupForm} handleChange={handleChange}  next ={nextStep} />,
        2: <Address  signupForm={signupForm} handleChange={handleChange} next ={nextStep}  back = {backStep}  />,
        3: <Account  signupForm={signupForm} handleChange={handleChange}  back = {backStep}/>
      }[step]
    }
    {/* <div className="flex justify-around px-5 mt-5">
    {
        step > 1 &&
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={backStep}>
          Back
        </button>
      }
      
      <button
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 $"
              onClick={nextStep}
                
              >
                {step === 3 ? 'Submit' : 'Next'}
              </button>
    </div> */}
  </div>
</div>

   </div>
  
    </>
  )
}

export default MutilForm;