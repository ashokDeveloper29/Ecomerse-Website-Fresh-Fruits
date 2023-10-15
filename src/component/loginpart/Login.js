import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/Api';
import { setStorage } from '../utils/Storage,';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [logindata,setLogindata] = useState({})
  const navigate = useNavigate()
  const handelSubmit = async (event)=>{
    event.preventDefault()
    
    const res = await login(logindata)
    setStorage(res)
    if(res.states == "success"){
      toast.success(res.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
      navigate("/")
      
    }
  }

  const handelChange = (event)=>{
    setLogindata({...logindata,[event.target.name]:event.target.value})
  }
  return (
    <>

<ToastContainer/>
      <div className='hero' >
      </div>

        <div className='form-box'>
          
          <div className='button-box'>
          
            <button type='button' className='toggle-btn'> <Link className='style'>Login</Link> </button>
            <button type='button' className='toggle-btn ms-5'> <Link className='style' to="/signin">Register</Link></button>
          </div>

          <form className='input-group' onClick={handelSubmit} >
            <div>

              <label>Email address</label>
              <input className='input-field' type="email" placeholder="Enter email" name='email' onChange={handelChange} />


              <label className='top'>Password</label>
              <input className='input-field' type="Password" placeholder="Enter password" name='password' onChange={handelChange} />


              <button className='submit-btn ms-5' type='submit'>Login</button>
            </div>

          </form>
        </div>



    </>
  );
}









// <div class="login-card">
//   <div class="card-header">
//     <div class="log">Login</div>
//   </div>
//   <form>
//     <div class="form-group">
//       <label for="username">Username:</label>
//       <input required="" name="username" id="username" type="text">
//     </div>
//     <div class="form-group">
//       <label for="password">Password:</label>
//       <input required="" name="password" id="password" type="password">
//     </div>
//     <div class="form-group">
//       <input value="Login" type="submit">
//     </div>
//   </form>
// </div>
