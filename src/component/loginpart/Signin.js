import { useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { rgistration } from '../../api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signin() {
  const [singupdata , setSingupdata] = useState({})
  const [verifyotp , setVerifyotp] = useState()
  const [writeOtp,setWriteOtp] = useState()
  const [otp , setOtp] = useState(true)
  const navigate = useNavigate()


  const handelSubmit = async(event)=>{
    event.preventDefault()
    console.log(singupdata.email)
    const res = await rgistration(singupdata)
    // console.log(res.otp + "        otp")
    // console.log(res)
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
    // setWriteOtp(res.otp)
    //   setOtp(false)
    } 
    else{
      toast.error(res.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    }
    }


    // const otpSection = (event)=>{
    // event.preventDefault()
    //   if(writeOtp == verifyotp){
    //     setTimeout(() => {
    //     navigate("/")
    //     }, 2000);
    //     toast.success("Welcome to Fresh Fruits Website", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //   })
    //   }
    //   else{
    //     toast.error("Pleass Enter Correct OTP", {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //   })
    //   }
    // }
  // }

  const handelChange = (event)=>{
    setSingupdata({...singupdata,[event.target.name]:event.target.value})
  }
  // const handelotp = (event)=>{
  //   setVerifyotp(event.target.value)
  // }
  return (
    <>
  <ToastContainer/>
        <Col md={12}>

        <div className='hero'>
        </div>

        {
              otp? <div className='form-box2'>
              <div style={{width:"400px",padding:"0px 10px"}}>
  
              <div className='button-box text-center' >
                
                <button type='button' className='toggle-btn me-2'> <Link className='style' to="/login">Login</Link></button>
                <button type='button' className='toggle-btn ms-5'><Link className='style'>Register</Link></button>
              </div>
              </div>
              
              <form className='input-group2' onSubmit={handelSubmit}>
                <div>
  
                  <label>Name</label><br/>
                  <input className='input-field' type="text" placeholder="Enter Name" name='name' onChange={handelChange} />
                  
                  
                  
                  <label className='top'>Email</label>
                  <input className='input-field' type="Email" placeholder="Enter email" name='email'  onChange={handelChange}/>
  
                  <label className='top'>Phone Number</label>
                  <input className='input-field' type="Number" placeholder="Enter Phone No" name='phoneNumber' onChange={handelChange} />
  
                  <label className='top'>Password</label>
                  <input className='input-field' type="Password" placeholder="Enter Password" name='password' onChange={handelChange} />
                 <button className='submit-btn ms-5' type='submit'>Sign In</button>
  
                </div>
  
              </form>
            </div>:
                <div className='form-box2 ' style={{width:"20%"}}>
                  {/* <form className='ms-5' onSubmit={otpSection}>
                  <label className='mt-4'>OTP</label><br/>
                  <input className='input-field' type="number" placeholder="Enter otp" name='otp' onChange={handelotp} />
                  <div className='ms-5 mt-4'>
                  <Button type='submit'>submit otp</Button>

                  </div>
                  </form> */}
              </div>
            
            }
         

        </Col>

      

    </>
  );
}


// const backentOtp = await res.otp