import './login.css';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import {log_in , sign_up} from '../../js/fireBase'
import netflix_spinner from '../../assets/netflix_spinner.gif';

function login() {

  const [signState,setSignState] = useState('Sign In');
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const user_auth = async (event: { preventDefault: () => void; })=>{
    event.preventDefault()
    setLoading(true);
    if(signState==='Sign In'){
      await log_in(email, password)
    }else{
      await sign_up(name , email , password)
    }
    setLoading(false);

  }

  return (

    loading?<div className="login-spinner">

    <img src={netflix_spinner} alt="loading...." />
    </div>:

    <div className='login'>
      <img src={Logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h2>{signState}</h2>

        <form >

        {signState==='Sign Up'?
        <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>:<></>}

        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={user_auth} type='submit'>{signState}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <p>need help?</p>
        </div>


        </form>

        <div className="form-switch">

        {signState==='Sign In'?
         <p>New To Netflix <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p>:
         <p>Already Have Account <span onClick={()=> setSignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default login
