import React from 'react'
import { Signup as SignupComponent } from '../components'
function SignUp() {
  useEffect(()=>{
      document.title = "Foundit | SignUp"
  
    },[])
  return (
    <div className='py-8'>
        <SignupComponent/> 
    </div>
  )
}

export default SignUp
