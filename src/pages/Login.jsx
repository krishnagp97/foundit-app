import React from 'react'
import { Login as LoginComponent} from '../components'

function Login() {
  useEffect(()=>{
      document.title = "Foundit | Login"
  
    },[])
  return (
    <div className='py-8'>
      <LoginComponent/>
    </div>
  )
}

export default Login
